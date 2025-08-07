from typing import Optional, List, Union
from pydantic import SecretStr
import asyncio
from fastapi import HTTPException
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

def store_audit_data(request, results, x_canvas_token, x_canvas_base_url):
    try:

        course_id = request.extra.get("courseId", request.assignment.course_id)
        assignment_id = request.extra.get("assignmentId", request.assignment.id)  
        user_id = request.extra.get("userId")
        
        canvas_api = CanvasAPI(
            api_token=x_canvas_token,
            domain=x_canvas_base_url,
            course_id=course_id
        )
        
        submission_data = canvas_api._request('get', f"/assignments/{assignment_id}/submissions/{user_id}")
        grader_id = submission_data.get("grader_id", "unknown_grader")  
        grader_name = canvas_api.get_grader_name(grader_id)  
        
        # Generate timestamp
        vancouver_tz = timezone(timedelta(hours=-7))
        current_timestamp = datetime.now(vancouver_tz).isoformat()
        
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

        audit_data = {
            "currentStatus": batch_overall_status,
            "history": [{
                "iteration": 1,  # upload_file will fix this
                "graderId": str(grader_id),
                "graderName": grader_name,
                "timestamp": current_timestamp,
                "overallStatus": batch_overall_status,
                "criteria": audit_criteria
            }]
        }
        
        upload_result = canvas_api.upload_file(
            audit_data, assignment_id, str(user_id), overwrite=False
        )
        
        logger.info(f"Background: Successfully stored batch audit data for {len(audit_criteria)} criteria")
        
    except Exception as upload_error:
        logger.error(f"Background: Failed to upload batch audit data: {upload_error}") 