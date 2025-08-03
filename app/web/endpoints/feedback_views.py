from fastapi import APIRouter, Header
from pydantic import BaseModel, SecretStr
from openai import OpenAI
import json
import os
import requests
from typing import Optional
from urllib.parse import urlparse
from datetime import datetime, timezone, timedelta

from app.web.db.models.evaluation import AIFeedback, AIFeedbackStatus, LLMFeedbackRequest, AuditRetrievalRequest, ApprovalRetrievalRequest
from app.autograding.feedback_prompts import generate_llm_feedback_messages
from app.web.utils.canvas import CanvasAPI

router = APIRouter()
# api_token = "HECZzFDHkWGGEDE94WHvFUZRuQGrBRPChJ82Bm6fvwTLrCK3aa9DDfBmraurwKXZ"
# domain = "canvas.sfu.ca"
# course_id = "76521"


@router.post("/llm-feedback", response_model=AIFeedback)
async def get_llm_feedback(
    request: LLMFeedbackRequest,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
    x_canvas_base_url: str = Header(..., alias="X-Canvas-Base-Url"),
    x_user_openai_key: Optional[SecretStr] = Header(None, alias="X-User-OpenAI-Key")
):
    # Original OpenAI setup (commented out for rollback)
    # OPENAI_API_KEY = "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"  # <<< REPLACE WITH YOUR ACTUAL KEY
    # OPENAI_MODEL_NAME = "gpt-4.1-mini-2025-04-14" # Or "gpt-3.5-turbo", etc.

    # OpenRouter configuration
    OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
    if not OPENROUTER_API_KEY:
        return AIFeedback(
            feedback="Error: OPENROUTER_API_KEY environment variable not set.",
            status=AIFeedbackStatus.FAILURE
        )
    
    # OpenRouter model configuration - you can use various models
    OPENROUTER_MODEL_NAME = "openai/gpt-4o-mini"  # or "anthropic/claude-3-haiku", "google/gemini-pro", etc.

    # Check for missing comments or points
    if not request.rubricAssessment or (not request.rubricAssessment.comments and request.rubricAssessment.points is None):
        return AIFeedback(
            feedback="Feedback not possible: Both comments and awarded points are missing or empty.",
            status=AIFeedbackStatus.FAILURE
        )
    if not request.rubricAssessment.comments:
        return AIFeedback(
            feedback="Feedback not possible: Comments are missing or empty.",
            status=AIFeedbackStatus.FAILURE
        )
    if request.rubricAssessment.points is None:
        return AIFeedback(
            feedback="Feedback not possible: Awarded points are missing.",
            status=AIFeedbackStatus.FAILURE
        )

    # Original OpenAI client setup (commented out for rollback)
    # client = OpenAI(api_key=OPENAI_API_KEY)
    
    # OpenRouter client setup
    client = OpenAI(
        api_key=OPENROUTER_API_KEY,
        base_url="https://openrouter.ai/api/v1"
    )
    print(f"request: {request}")
    messages = generate_llm_feedback_messages(request.rubricCriterion, request.rubricAssessment, request.assignment)
    print(f"msg: {messages}\n\n\n")  #  actual prompt message, not the audit

    try:
        # Original OpenAI model call (commented out for rollback)
        # response = client.chat.completions.create(
        #     model=OPENAI_MODEL_NAME,
        #     messages=messages,
        #     response_format={"type": "json_object"}
        # )
        
        response = client.chat.completions.create(
            model=OPENROUTER_MODEL_NAME,
            messages=messages,
            response_format={"type": "json_object"}
        )
        # Assuming the response content is a JSON string
        ai_feedback_data = json.loads(response.choices[0].message.content)
        print(f"feedback data: {ai_feedback_data}\n\n\n")  # audit, happens criterion by criterion
        
        # Audit Storage
        try:
            course_id = request.extra.get("courseId", request.assignment.course_id)          # Extract data from request extra field
            assignment_id = request.extra.get("assignmentId", request.assignment.id)  
            user_id = request.extra.get("userId")
            
            domain = urlparse(x_canvas_base_url).netloc  # Removes "https://"
            
            canvas_api = CanvasAPI(               # CanvasAPI object initialized using the new headers passed in from the frontend call
                api_token=x_canvas_token,
                domain=domain,
                course_id=course_id
            )
            
            # Get submission details to find grader ID using Canvas API
            submission_data = canvas_api._request('get', f"/assignments/{assignment_id}/submissions/{user_id}")
            grader_id = submission_data.get("grader_id", "unknown_grader")  
            
            # Get grader name from Canvas user API ~ using grader ID just collected
            grader_name = "Unknown Grader"  # fallback

            if grader_id != "unknown_grader":
                try:
                    grader_data = canvas_api._global_request('get', f"/users/{grader_id}")
                    grader_name = grader_data.get("name", "Unknown Grader")
                except Exception as grader_error:
                    print(f"[DEBUG] Could not get grader name: {grader_error}")
                    pass  
            
            # Generate current timestamp in Vancouver time (UTC-7) 
            vancouver_tz = timezone(timedelta(hours=-7))
            vancouver_time = datetime.now(vancouver_tz)
            current_timestamp = vancouver_time.isoformat()
            
            audit_criterion = {
                "criterionId": request.rubricCriterion.id,
                "criterionName": request.rubricCriterion.description,
                "graderFeedback": request.rubricAssessment.comments if request.rubricAssessment else "",
                "score": request.rubricAssessment.points if request.rubricAssessment else 0,
                "maxPoints": request.rubricCriterion.points,
                "status": ai_feedback_data["status"],
                "feedback": ai_feedback_data["feedback"]
            }
            

            audit_entry = {
                "iteration": 1,  # Nee
                "graderId": str(grader_id),
                "graderName": grader_name,
                "timestamp": current_timestamp,
                "overallStatus": ai_feedback_data["status"],  
                "criteria": [audit_criterion]
            }
            
            # Check if we should append to existing iteration or create new one
            try:
                existing_audit_data = canvas_api.get_file(assignment_id, str(user_id))
                
                # Check if latest iteration is from same grader within 15 seconds - in which case, should manually append in same iteration
                should_append_to_latest = False
                if existing_audit_data.get("history"):
                    latest_iteration = max(existing_audit_data["history"], key=lambda x: x.get("iteration", 0)) # Latest iteration by max 'iteration' field value
                    latest_grader_id = latest_iteration.get("graderId")
                    latest_timestamp = latest_iteration.get("timestamp")
                    

                    if latest_grader_id == str(grader_id) and latest_timestamp:
                        try:
                            latest_time = datetime.fromisoformat(latest_timestamp)
                            time_diff = (vancouver_time - latest_time).total_seconds()
                            
                            if time_diff <= 15:  # Within 15 seconds
                                should_append_to_latest = True   # Appends to same iteration, in the criterion [].This is a core thing we need to handle as each criterion has a seperate backend call to this function
                        except Exception as time_error:
                            print(f"[DEBUG] Could not parse timestamps: {time_error}\n\n")
                
                if should_append_to_latest:
                    latest_iteration["criteria"].append(audit_criterion)
                    
                    criteria_statuses = [c["status"] for c in latest_iteration["criteria"]]
                    if "FAILURE" in criteria_statuses:
                        latest_iteration["overallStatus"] = "FAILURE"
                        existing_audit_data["currentStatus"] = "FAILURE"
                    else:
                        latest_iteration["overallStatus"] = "SUCCESS"
                        existing_audit_data["currentStatus"] = "SUCCESS"
                    
                    user_audit_data = existing_audit_data
                    should_overwrite = True  # We manually merged to add new criterion, so overwrite entire file
                else:
                    # Let Canvas upload_file handle the iteration numbering and appending
                    user_audit_data = {           # Passed as essentially a new file with just a new iteration, upload_file handles this and appends it to the existing one
                        "currentStatus": ai_feedback_data["status"],
                        "history": [audit_entry]  # Single new iteration
                    }
                    should_overwrite = False  # Let Canvas handle appending new iteration
                    
            except Exception as get_error:
                print(f"[DEBUG] No existing file found or error reading it: {get_error}\n\n")

                user_audit_data = {               # Same user_audit_data as above but since the file will not be found, a new file with this will be generated
                    "currentStatus": ai_feedback_data["status"],
                    "history": [audit_entry]
                }
                should_overwrite = False  
            
            upload_result = canvas_api.upload_file(user_audit_data, assignment_id, str(user_id), overwrite=should_overwrite)
        except Exception as upload_error:
            print(f"AUDIT UPLOAD ERROR: {upload_error}")
        
        return AIFeedback(**ai_feedback_data)
    except Exception as e:
        print(f"Error invoking OpenAI LLM or parsing response: {e}")
        return AIFeedback(feedback="Error generating AI feedback.", status=AIFeedbackStatus.FAILURE)


@router.post("/audit-retrieval")
async def get_audit_file(
    request: AuditRetrievalRequest,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
    x_canvas_base_url: Optional[str] = Header("canvas.sfu.ca", alias="X-Canvas-Base-Url"),
):
    """
    Retrieves audit file for a specific assignment and user, returning streamlined format.
    
    Args:
    - assignmentId: Canvas assignment ID
    - userId: Canvas user ID (student ID)
    - courseId: Canvas course ID where the assignment exists
    
    Returns:
    - currentStatus: Latest overall status (SUCCESS/FAILURE)
    - latestIteration: Most recent audit iteration with full details
    """
    print(f"[DEBUG] Called audit-retrieval endpoint for assignment {request.assignmentId}, user {request.userId}")
    try:
        domain = urlparse(x_canvas_base_url).netloc

        canvas_api = CanvasAPI(
            api_token=x_canvas_token,
            domain=domain,
            course_id=request.courseId
        )

        audit_data = canvas_api.get_file(request.assignmentId, str(request.userId))
        print(f"[DEBUG] Successfully retrieved audit data")

        current_status = audit_data.get("currentStatus", "SUCCESS")
        print(f"[DEBUG] Current status: {current_status}")

        history = audit_data.get("history", [])
        print(f"[DEBUG] History length: {len(history)}")
        if not history:
            return {
                "currentStatus": current_status,
                "latestIteration": None,
                "message": "No audit history found"
            }

        latest_iteration = max(history, key=lambda x: x.get("iteration", 0))
        

        result = {
            "currentStatus": current_status,
            "latestIteration": latest_iteration
        }
        print(f"[DEBUG] Returning result for audit-retrieval")
        
        return result

    except Exception as e:
        print(f"[DEBUG] Exception in audit-retrieval: {str(e)}")
        return {
            "currentStatus": "SUCCESS",
            "latestIteration": None,
            "error": f"Could not retrieve audit file: {str(e)}"
        }


@router.post("/approval-retrieval")
async def get_approvals(
    request: ApprovalRetrievalRequest,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
    x_canvas_base_url: Optional[str] = Header("canvas.sfu.ca", alias="X-Canvas-Base-Url"),
):
    """
    Retrieves approval statistics for all submissions in an assignment.
    Simply opens all audit files in an assignment folder and tallies up the number of current successes.
    
    Args:
    - assignmentId: Canvas assignment ID
    - courseId: Canvas course ID where the assignment exists
    
    Returns:
    - approvals: Count of submissions with currentStatus = "SUCCESS"
    - total: Total count of all submission files found
    """
    print(f"[DEBUG] Called approval-retrieval endpoint for assignment {request.assignmentId}")
    import re
    
    try:
        domain = urlparse(x_canvas_base_url).netloc

        canvas_api = CanvasAPI(
            api_token=x_canvas_token,
            domain=domain,
            course_id=request.courseId
        )

        files = canvas_api.list_files_in_assignment_folder(request.assignmentId)  # Just gets names i.e. metadat
        
        # Filter for audit files
        user_files = []
        for file_meta in files:
            filename = file_meta.get('display_name', '')
            # Check if filename matches assignmentId_userId.json pattern (where both assignmentId and userId are numeric)
            if re.match(r'^\d+_\d+\.json$', filename):
                user_files.append(file_meta)
        
        total_count = len(user_files)
        approval_count = 0
        
        for file_meta in user_files:
            try:
                filename = file_meta.get('display_name', '')
                user_id = filename.split('_')[1].replace('.json', '')
                
                file_data = canvas_api.get_file(request.assignmentId, user_id)
                current_status = file_data.get("currentStatus", "SUCCESS")
                
                if current_status == "SUCCESS":
                    approval_count += 1
                    
            except Exception as e:
                continue
        
        print(f"[DEBUG] Final result: approvals={approval_count}, total={total_count}\n\n")
        return {
            "approvals": approval_count,
            "total": total_count
        }

    except Exception as e:
        return {
            "approvals": 0,
            "total": 0,
            "error": f"Could not retrieve approval statistics: {str(e)}"
        }