from celery.result import AsyncResult
from app.celery import celery_app
from fastapi import APIRouter
from app.web.db.models import RequestGradingDto, ExcerptFeedbackRequest
from app.web.tasks import schedule_evaluation
from app.web.utils import logger
from app.autograding.agents.grading_agent import build_simple_evaluation # Ensure this import is present
from fastapi.responses import PlainTextResponse

router = APIRouter()


@router.post("/generate", response_model=dict)
def generate_grading_feedback(request: RequestGradingDto):
    """
    Enqueue a grading and feedback generation task.
    Returns a task_id to track the task status and retrieve results.
    """
    logger.info(f"Received grading request for assignment {request}")
    request_data = request.model_dump(by_alias=True)
    # Enqueue the Celery task
    task = schedule_evaluation.delay(request_data)
    return {"task_id": task.id}

@router.post("/excerpt_feedback", response_model=str)
def generate_excerpt_feedback(request: ExcerptFeedbackRequest):
    logger.info(f'Received excerpt: {request.highlighted_text}')
    
    # Call build_simple_evaluation to get the feedback
    feedback_response = build_simple_evaluation(request)
    return PlainTextResponse(content=feedback_response)
'''
    if request.rubric_criteria:
        # Extract descriptions or IDs for readable output
        criterion_names = [criterion.description or criterion.id for criterion in request.rubric_criteria]
        logger.info(f'Rubric criteria received: {criterion_names}')
        return f"Generated Feedback for following excerpt: '{request.highlighted_text}' aligned with criteria: {', '.join(criterion_names)}\n\nLLM Response: {feedback_response}"
    else:
        return f"Generated Feedback for following excerpt: '{request.highlighted_text}'\n\nLLM Response: {feedback_response}"
'''

@router.get("/status/{task_id}", response_model=dict)
def get_task_status(task_id: str):
    """
    Retrieve the status of a Celery task.
    """
    task_result = AsyncResult(task_id, app=celery_app)
    response = {
        "task_id": task_id,
        "status": task_result.status if task_result.status != "RETRY" else "STARTED",
        "result": task_result.result if task_result.status == "SUCCESS" else None,
        "traceback": ("Failed to generate feedback." if task_result.status == "FAILURE" else None),
    }
    return response
