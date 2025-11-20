from typing import Optional, List, Union, Dict, Any, Tuple
from pydantic import SecretStr
import asyncio
import re
import csv
import io
from fastapi.responses import Response
from app.web.utils import logger
from app.web.db.models.evaluation import AIFeedback, AIFeedbackStatus
from app.autograding.feedback_audit.feedback_prompts import generate_llm_feedback_messages
from app.autograding.llms import build_llm_for_task
from app.web.utils.canvas import CanvasAPI
from datetime import datetime, timezone, timedelta

def validate_batch_request(request) -> Union[None, List[AIFeedback]]:
    """Validate batch LLM feedback request criteria and assessments"""

    for criterion in request.criteria:
        assessment = request.criteriaAssessments.get(criterion.id)
        if (not assessment or not assessment.comments or assessment.points is None):
            return [AIFeedback(
                feedback=f"Feedback not possible for criterion '{criterion.description}': Required grading data is missing.",
                status=AIFeedbackStatus.FAILURE
            )]
    
    return None


def process_criterion(criterion, assessment, llm_name: str, x_user_openai_key: Optional[SecretStr]) -> AIFeedback:
    """Process a single rubric criterion with LLM"""
    logger.debug(f"Processing LLM feedback request for criterion: {criterion.id}")
    messages = generate_llm_feedback_messages(criterion, assessment)
    logger.debug(f"Generated messages for LLM: {len(messages)} messages")
    
    llm = build_llm_for_task(llm_name, x_user_openai_key, streaming=False).with_structured_output(AIFeedback)
    ai_feedback_data = llm.invoke(messages)
    logger.info(f"Generated AI feedback for criterion {criterion.description}: {ai_feedback_data.status}")
    
    return ai_feedback_data


async def process_criterion_async(criterion, assessment, llm_name: str, x_user_openai_key: Optional[SecretStr]) -> AIFeedback:
    """Async version"""
    return await asyncio.to_thread(
        process_criterion, 
        criterion, assessment, llm_name, x_user_openai_key
    ) 

def _get_grader_info_and_timestamp(canvas_api: CanvasAPI, assignment_id: int, user_id: str) -> Tuple[str, str, str]:
    """Helper function to get grader info and timestamp. Returns (grader_id, grader_name, timestamp)"""
    submission_data = canvas_api._request('get', f"/assignments/{assignment_id}/submissions/{user_id}")
    grader_id = submission_data.get("grader_id", "unknown_grader")  
    grader_name = canvas_api.get_grader_name(grader_id)
    
    # Generate timestamp
    vancouver_tz = timezone(timedelta(hours=-7))
    current_timestamp = datetime.now(vancouver_tz).isoformat()
    
    return str(grader_id), grader_name, current_timestamp

def _build_timing_entry(grader_id: str, grader_name: str, assignment_name: str, request) -> Dict[str, Any]:
    """Helper function to build a timing entry from request data"""
    return {
        "graderId": grader_id,
        "graderName": grader_name,
        "assignmentName": assignment_name,
        "gradingStartedAt": request.gradingStartedAt,
        "gradingEndedAt": request.gradingEndedAt,
        "gradingDurationSeconds": request.gradingDurationSeconds,
        "usedAutograde": request.usedAutograde,
        "usedHighlighting": request.usedHighlighting
    }

def store_timing_data(request, x_canvas_token, x_canvas_base_url):
    """Store timing data only (when audit is disabled)"""
    try:
        course_id = request.assignment.course_id
        assignment_id = request.assignment.id
        user_id = request.userId
        
        canvas_api = CanvasAPI(
            api_token=x_canvas_token,
            domain=x_canvas_base_url,
            course_id=course_id
        )
        
        grader_id, grader_name, _ = _get_grader_info_and_timestamp(
            canvas_api, assignment_id, user_id
        )
        
        timing_entry = _build_timing_entry(grader_id, grader_name, request.assignment.name, request)
        
        timing_data = {
            "timing": [timing_entry]
        }
        
        upload_result = canvas_api.upload_file(
            timing_data, assignment_id, str(user_id), overwrite=False
        )
        
        logger.info(f"Background: Successfully stored timing data")
        
    except Exception as upload_error:
        logger.error(f"Background: Failed to upload timing data: {upload_error}")

def store_audit_data(request, results, x_canvas_token, x_canvas_base_url):
    try:
        course_id = request.assignment.course_id
        assignment_id = request.assignment.id
        user_id = request.userId
        
        canvas_api = CanvasAPI(
            api_token=x_canvas_token,
            domain=x_canvas_base_url,
            course_id=course_id
        )
        
        grader_id, grader_name, current_timestamp = _get_grader_info_and_timestamp(
            canvas_api, assignment_id, user_id
        )
        
        audit_criteria = []
        for criterion, result in zip(request.criteria, results):
            assessment = request.criteriaAssessments.get(criterion.id)
            audit_criteria.append({
                "criterionId": criterion.id,
                "criterionName": criterion.description,
                "graderFeedback": assessment.comments if assessment else "",
                "score": assessment.points if assessment else 0,
                "maxPoints": criterion.points,
                "status": result.status,
                "feedback": result.feedback
            })
    
        batch_overall_status = "FAILURE" if "FAILURE" in [r.status for r in results] else "SUCCESS"

        # Build history entry with timing data
        history_entry = {
            "iteration": 1,  # upload_file will fix this
            "graderId": grader_id,
            "graderName": grader_name,
            "timestamp": current_timestamp,
            "overallStatus": batch_overall_status,
            "criteria": audit_criteria,
        }

        # Build timing entry using helper function
        timing_entry = _build_timing_entry(grader_id, grader_name, request.assignment.name, request)

        audit_data = {
            "currentStatus": batch_overall_status,
            "history": [history_entry],
            "timing": [timing_entry]
        }
        
        upload_result = canvas_api.upload_file(
            audit_data, assignment_id, str(user_id), overwrite=False
        )
        
        logger.info(f"Background: Successfully stored batch audit data for {len(audit_criteria)} criteria")
        
    except Exception as upload_error:
        logger.error(f"Background: Failed to upload batch audit data: {upload_error}")


def generate_grading_timing_report(canvas_api: CanvasAPI, course_id: int) -> Dict[str, Any]:
    """Generates grading timing report for all submissions in a course"""
    
    audit_files = [
        f for f in canvas_api.list_course_files()
        if re.match(r'^\d+_\d+\.json$', f.get('display_name', ''))
    ]
    
    timing_records = []
    for file_meta in audit_files:
        try:
            filename = file_meta.get('display_name', '')
            assignment_id, submission_id = filename.replace('.json', '').split('_')
            assignment_id = int(assignment_id)
            
            audit_data = canvas_api.get_file(assignment_id, submission_id)
            
            timing_entries = audit_data.get("timing", [])
            if not timing_entries:
                logger.error(f"No timing data found in file {filename} - skipping")
                continue
            
            for timing_entry in timing_entries:
                timing_records.append({
                    "assignmentId": assignment_id,
                    "submissionId": submission_id,
                    "graderId": timing_entry["graderId"],
                    "graderName": timing_entry["graderName"],
                    "assignmentName": timing_entry["assignmentName"],
                    "gradingStartedAt": timing_entry["gradingStartedAt"],
                    "gradingEndedAt": timing_entry["gradingEndedAt"],
                    "gradingDurationSeconds": timing_entry["gradingDurationSeconds"],
                    "usedAutograde": timing_entry["usedAutograde"],
                    "usedHighlighting": timing_entry["usedHighlighting"],
                })
        
        except Exception as e:
            logger.error(f"Could not read audit file {file_meta.get('display_name', '')}: {e}", exc_info=True)
            continue
    
    return {
        "courseId": course_id,
        "totalRecords": len(timing_records),
        "records": timing_records
    }


def convert_timing_report_to_csv(report_data: Dict[str, Any], course_id: int) -> str:
    """Converts timing report data to CSV format"""
    records = report_data.get("records", [])
    
    if not records:
        output = io.StringIO()
        writer = csv.DictWriter(output, fieldnames=[
            "assignmentId", "submissionId", "graderId", "graderName", 
            "assignmentName", "gradingStartedAt", "gradingEndedAt", 
            "gradingDurationSeconds", "usedAutograde", "usedHighlighting"
        ])
        writer.writeheader()
        return output.getvalue()
    
    output = io.StringIO()
    writer = csv.DictWriter(output, fieldnames=records[0].keys())
    writer.writeheader()
    writer.writerows(records)
    csv_content = output.getvalue()

    return Response(
                content=csv_content,
                media_type="text/csv",
                headers={
                    "Content-Disposition": f"attachment; filename=grading_timing_report_course_{course_id}.csv"
                }
            )