from fastapi import APIRouter, Header, BackgroundTasks, Query, HTTPException
from fastapi.responses import Response
from pydantic import SecretStr
from typing import Optional, List
import asyncio
from app.web.utils import logger
import time
from app.web.db.models.evaluation import AIFeedback, AIFeedbackStatus, BatchLLMFeedbackRequest, TimingDataRequest, AuditRetrievalRequest, ApprovalRetrievalRequest
from app.web.utils.canvas import CanvasAPI
from app.autograding.feedback_audit import process_criterion_async, validate_batch_request, store_audit_data, store_timing_data, generate_grading_timing_report, convert_timing_report_to_csv

router = APIRouter()

@router.post("/llm-feedback-batch", response_model=List[AIFeedback])
async def get_llm_feedback_batch(
    request: BatchLLMFeedbackRequest,
    background_tasks: BackgroundTasks,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
    x_canvas_base_url: str = Header(..., alias="X-Canvas-Base-Url"),
    x_user_openai_key: Optional[SecretStr] = Header(None, alias="X-User-OpenAI-Key")
):
    """Process multiple rubric criteria in parallel for faster feedback generation"""
    
    request_invalid = validate_batch_request(request)
    if request_invalid:
        return request_invalid
    
    try:
        llm_name = 'gpt-5-mini' if x_user_openai_key else 'llama3.2'
        
        logger.info(f"Auditing {len(request.criteria)} criteria in parallel")
        start = time.time()
        
        tasks = [
            process_criterion_async(
                criterion, 
                request.criteriaAssessments.get(criterion.id), 
                llm_name, 
                x_user_openai_key
            )
            for criterion in request.criteria
        ]
        
        results = await asyncio.gather(*tasks)
        
        background_tasks.add_task(
            store_audit_data,
            request,
            results, 
            x_canvas_token,
            x_canvas_base_url
        )
        
        end = time.time()
        logger.info(f"Auditing took {(end-start):.3f}s (Storage happening in background)")
        
        return results
        
    except Exception as e:
        logger.error(f"Error in auditing feedback: {e}")
        return [AIFeedback(
            feedback="Error auditing feedback. Check logs.",
            status=AIFeedbackStatus.FAILURE
        ) for _ in request.criteria]


@router.post("/store-timing")
async def store_timing(
    request: TimingDataRequest,
    background_tasks: BackgroundTasks,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
    x_canvas_base_url: str = Header(..., alias="X-Canvas-Base-Url"),
):
    """Store timing data only (when audit feature is disabled)"""
    
    try:
        background_tasks.add_task(
            store_timing_data,
            request,
            x_canvas_token,
            x_canvas_base_url
        )
        
        return {
            "message": "Timing data storage scheduled successfully",
            "status": "SUCCESS"
        }
        
    except Exception as e:
        logger.error(f"Error scheduling timing data storage: {e}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to schedule timing data storage: {str(e)}"
        )


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
    try:
        canvas_api = CanvasAPI(
            api_token=x_canvas_token,
            domain=x_canvas_base_url,
            course_id=request.courseId
        )

        audit_data = canvas_api.get_file(request.assignmentId, str(request.userId))

        current_status = audit_data.get("currentStatus", "SUCCESS")

        history = audit_data.get("history", [])
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
        
        return result

    except Exception as e:
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
    import re
    
    try:
        canvas_api = CanvasAPI(
            api_token=x_canvas_token,
            domain=x_canvas_base_url,
            course_id=request.courseId
        )

        files = canvas_api.list_files_in_assignment_folder(request.assignmentId)  # Just gets names i.e. metadata
        
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


@router.get("/grading-timing-report/{course_id}")
async def get_grading_timing_report(
    course_id: int,
    format: str = Query("json", description="Output format: 'json' or 'csv'"),
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
    x_canvas_base_url: Optional[str] = Header("canvas.sfu.ca", alias="X-Canvas-Base-Url"),
):
    """
    Retrieves grading timing data for all submissions across all assignments in a course
    
    Args:
        course_id: Canvas course ID
        format: Output format - 'json' (default) or 'csv' for CSV download
    """
    try:
        canvas_api = CanvasAPI(
            api_token=x_canvas_token,
            domain=x_canvas_base_url,
            course_id=course_id
        )
        
        result = generate_grading_timing_report(canvas_api, course_id)
        
        if format.lower() == "csv":
            return convert_timing_report_to_csv(result, course_id)
        
        return result
    
    except Exception as e:
        logger.error(f"Error generating grading timing report: {e}")
        raise HTTPException(
            status_code=500,
            detail=f"Could not generate grading timing report: {str(e)}"
        )