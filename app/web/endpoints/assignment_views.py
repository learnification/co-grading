from celery.result import AsyncResult
from app.celery import celery_app
from fastapi import APIRouter, HTTPException, Header
from pydantic import SecretStr
from app.web.db.models import RequestGradingDto, Assignment, RequestRubricEditDto
from app.web.tasks import schedule_evaluation
from app.web.utils import logger, CanvasAPI
import requests
from app.autograding.agents import create_rubric_guideline

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

# Passing in Assignment obj (contains description + rubric, all we need)
# Should we clean this up: only pass assignment + course id
# handle getting canvas info on backend?

@router.post("/enhance_rubric", response_model=dict)
def generate_enhanced_rubric(request: Assignment, x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token")):
    request_data = request.model_dump(by_alias=True)
    assignment_id = request_data['id']
    course_id = request_data['course_id']
    try:
        logger.info(f"assignment: {request}")
        canvas_api = CanvasAPI(x_canvas_token, 'canvas.sfu.ca', course_id)
        result = create_rubric_guideline(request)
        canvas_api.upload_rubric(result, assignment_id)
        return {"generated guideline": result}
    except Exception as e:
        logger.error(f"Error in generate_enhanced_rubric: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
    
@router.put("/update_guideline", response_model=dict)
def update_generated_guideline(request: RequestRubricEditDto, x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token")):

    request_data = request.model_dump(by_alias=True)
    assignment_id = request_data['assignment']['id']
    course_id = request_data['assignment']['course_id']
    guideline = request_data['guideline']
    try:
        canvas_api = CanvasAPI(x_canvas_token, 'canvas.sfu.ca', course_id)
        updated = canvas_api.upload_rubric(guideline, assignment_id)
        return {"updated guideline": updated}
    except Exception as e:
        logger.error(f"Error in update_generated_guideline: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
    
@router.get("/guidelines/{course_id}/{assignment_id}", response_model=dict)
def get_guideline(course_id: int, assignment_id: int, x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token")):
    """
    Retrieve the rubric/guideline for a specific assignment from Canvas.
    """
    try:
        logger.info(f"Received request to get guideline for course_id: {course_id}, assignment_id: {assignment_id}")
        canvas_api = CanvasAPI(x_canvas_token, 'canvas.sfu.ca', course_id)
        guideline = canvas_api.get_rubric(assignment_id)
        return {"guideline": guideline}
    except Exception as e:
        logger.error(f"Error in get_guideline: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
