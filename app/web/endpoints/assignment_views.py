from celery.result import AsyncResult
from app.celery import celery_app
from fastapi import APIRouter, Header, HTTPException
from app.web.db.models import RequestGradingDto
from app.web.tasks import schedule_evaluation
from app.web.utils import logger, CanvasAPI
from typing import Optional
from app.autograding.agents import create_rubric_guideline
from typing import Optional


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
        "traceback": (
            "Failed to generate feedback." if task_result.status == "FAILURE" else None
        ),
    }
    return response


@router.post("/generate_guideline", response_model=dict)
def generate_guideline(
    request: GenerateGuidelineRequest,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
    x_user_openai_key: Optional[SecretStr] = Header(None, alias="X-User-OpenAI-Key")
):
    request_data = request.model_dump(by_alias=True)
    assignment_id = request_data["assignment"]["id"]
    course_id = request_data["assignment"]["course_id"]
    try:
        logger.info(f"assignment: {request.assignment}")
        canvas_api = CanvasAPI(x_canvas_token, request.baseURL, course_id)
        result = create_rubric_guideline(request.assignment, x_user_openai_key)
        canvas_api.upload_rubric(result, assignment_id)
        return {"generated_guideline": result}
    except Exception as e:
        logger.error(f"Error in generate_guideline: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@router.put("/update_guideline", response_model=dict)
def update_generated_guideline(
    request: UpdateGuidelineRequest,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
):
    request_data = request.model_dump(by_alias=True)
    assignment_id = request_data["assignment"]["id"]
    course_id = request_data["assignment"]["course_id"]
    guideline = request_data["guideline"]
    try:
        canvas_api = CanvasAPI(x_canvas_token, request.baseURL, course_id)
        updated = canvas_api.upload_rubric(guideline, assignment_id)
        return {"updated_guideline": updated}
    except Exception as e:
        logger.error(f"Error in update_generated_guideline: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@router.get(
    "/guidelines/{course_id}/{assignment_id}", response_model=dict
)
def get_guideline(
    course_id: int,
    assignment_id: int,
    base_url: str,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
):
    """
    Retrieve the rubric/guideline for a specific assignment from Canvas.
    """
    try:
        logger.info(
            f"Received request to get guideline for course_id: {course_id}, assignment_id: {assignment_id}"
        )
        canvas_api = CanvasAPI(
            x_canvas_token, base_url, course_id
        )
        guideline = canvas_api.get_rubric(assignment_id)
        return {"guideline": guideline}
    except Exception as e:
        logger.error(f"Error in get_guideline: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
