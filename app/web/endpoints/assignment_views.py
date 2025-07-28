from celery.result import AsyncResult
from app.celery import celery_app
from fastapi import APIRouter, Header
from app.web.db.models import RequestGradingDto
from app.web.tasks import schedule_evaluation
from app.web.utils import logger
from typing import Optional
from pydantic import SecretStr

router = APIRouter()

@router.post("/generate", response_model=dict)
def generate_grading_feedback(
    request: RequestGradingDto, 
    x_user_openai_key: Optional[SecretStr] = Header(None, alias="X-User-OpenAI-Key")
):
    """
    Enqueue a grading and feedback generation task.
    Returns a task_id to track the task status and retrieve results.
    """
    logger.info(f"Received grading request for assignment {request}")
    request_data = request.model_dump(by_alias=True)
    
    if x_user_openai_key:
        request_data["openai_token"] = x_user_openai_key.get_secret_value()
        logger.info("OpenAI token provided, will use GPT-4.1-mini for grading")
    
    # Enqueue the Celery task
    task = schedule_evaluation.delay(request_data)
    return {"task_id": task.id}


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
