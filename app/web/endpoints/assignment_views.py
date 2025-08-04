from app.web.db.models.evaluation import AutogradeThresholdRequest, AutogradeToggleRequest, AutogradeCheckRequest, ThresholdCheckRequest
from urllib.parse import urlparse
from celery.result import AsyncResult
from app.celery import celery_app
from fastapi import APIRouter, Header, HTTPException
from app.web.db.models import RequestGradingDto, GenerateGuidelineRequest, UpdateGuidelineRequest
from app.web.tasks import schedule_evaluation
from app.web.utils import logger, CanvasAPI
from typing import Optional
from pydantic import SecretStr
from app.autograding.agents.rubric_agent import create_rubric_guideline

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


@router.post("/toggle-autograde")
async def toggle_autograde(
    request: AutogradeToggleRequest,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
    x_canvas_base_url: Optional[str] = Header("canvas.sfu.ca", alias="X-Canvas-Base-Url"),
):
    """
    Toggles autograde enabled status for an assignment.
    
    Checks for assignmentId_autograde_enabled.json file in the assignment folder.
    If file doesn't exist, creates it with enabled=False.
    If file exists, toggles the current enabled value.
    
    Args:
    - assignmentId: Canvas assignment ID
    - courseId: Canvas course ID  
    - graderName: Name of the grader toggling the setting
    
    Returns:
    - Success message with current enabled status
    """
    try:
        domain = urlparse(x_canvas_base_url).netloc

        canvas_api = CanvasAPI(
            api_token=x_canvas_token,
            domain=domain,
            course_id=request.courseId
        )
        
        try:
            existing_data = canvas_api.get_file(request.assignmentId, "autograde_enabled")
            current_enabled = existing_data.get("enabled", False)      # If doesn't catch error at this point, file exists
            new_enabled = not current_enabled
            
            # Update the file
            updated_data = {
                "set-by": request.graderName,
                "enabled": new_enabled
            }
            
            canvas_api.upload_file(updated_data, request.assignmentId, "autograde_enabled", overwrite=True)
            
            return {
                "message": f"Autograde {'enabled' if new_enabled else 'disabled'} successfully",
                "enabled": new_enabled
            }
            
        except Exception as e:
            # File doesn't exist, create it with enabled=False
            new_data = {
                "set-by": request.graderName,
                "enabled": False
            }
            
            canvas_api.upload_file(new_data, request.assignmentId, "autograde_enabled", overwrite=True)
            
            return {
                "message": "Autograde settings file created and disabled",
                "enabled": False
            }
            
    except Exception as e:
        logger.error(f"Error toggling autograde: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error toggling autograde: {str(e)}")

@router.post("/set-threshold")
async def set_threshold(
    request: AutogradeThresholdRequest,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
    x_canvas_base_url: Optional[str] = Header("canvas.sfu.ca", alias="X-Canvas-Base-Url"),
):
    """
    Sets autograde threshold for a course.
    
    Creates or updates autograde_threshold.json file in the development folder (course-wide).
    Always overwrites the existing file with new threshold value and grader information.
    
    Args:
    - courseId: Canvas course ID
    - graderName: Name of the grader setting the threshold
    - threshold: Threshold value to set
    
    Returns:
    - Success message with threshold value
    """
    try:
        domain = urlparse(x_canvas_base_url).netloc

        canvas_api = CanvasAPI(
            api_token=x_canvas_token,
            domain=domain,
            course_id=request.courseId
        )
        

        
        # Create/update threshold file (course-wide)
        threshold_data = {
            "set-by": request.graderName,
            "threshold": request.threshold
        }
        
        canvas_api.upload_root(threshold_data, "autograde_threshold", overwrite=True)
        
        return {
            "message": f"Threshold set to {request.threshold} successfully",
            "threshold": request.threshold
        }
        
    except Exception as e:
        logger.error(f"Error setting threshold: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error setting threshold: {str(e)}")


@router.post("/get-autograde-setting")
async def get_autograde_setting(
    request: AutogradeCheckRequest,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
    x_canvas_base_url: Optional[str] = Header("canvas.sfu.ca", alias="X-Canvas-Base-Url"),
):
    """
    Retrieves autograde setting for a specific assignment.
    
    Finds and returns the assignmentId_autograde_enabled.json file as JSON.
    
    Args:
    - assignmentId: Canvas assignment ID
    - courseId: Canvas course ID
    
    Returns:
    - JSON content of the autograde settings file
    """
    try:
        import time
        start_time = time.time()
        
        domain = urlparse(x_canvas_base_url).netloc
        print(f"[DEBUG] get-autograde-setting: Domain parsed in {time.time() - start_time:.3f}s")

        canvas_api = CanvasAPI(
            api_token=x_canvas_token,
            domain=domain,
            course_id=request.courseId
        )
        print(f"[DEBUG] get-autograde-setting: CanvasAPI created in {time.time() - start_time:.3f}s")
        
        # Get the autograde settings file
        autograde_data = canvas_api.get_file(request.assignmentId, "autograde_enabled")
        print(f"[DEBUG] get-autograde-setting: File retrieved in {time.time() - start_time:.3f}s")
        
        return autograde_data
        
    except Exception as e:
        logger.error(f"Error getting autograde setting: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error getting autograde setting: {str(e)}")


@router.post("/get-threshold")
async def get_threshold(
    request: ThresholdCheckRequest,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
    x_canvas_base_url: Optional[str] = Header("canvas.sfu.ca", alias="X-Canvas-Base-Url"),
):
    """
    Retrieves autograde threshold for the course.
    
    Finds and returns the autograde_threshold.json file as JSON.
    
    Args:
    - courseId: Canvas course ID
    
    Returns:
    - JSON content of the threshold file
    """
    try:
        import time
        start_time = time.time()
        
        domain = urlparse(x_canvas_base_url).netloc
        print(f"[DEBUG] get-threshold: Domain parsed in {time.time() - start_time:.3f}s")

        canvas_api = CanvasAPI(
            api_token=x_canvas_token,
            domain=domain,
            course_id=request.courseId
        )
        print(f"[DEBUG] get-threshold: CanvasAPI created in {time.time() - start_time:.3f}s")
        
        # Get the threshold file (course-wide)
        threshold_data = canvas_api.get_root_file("autograde_threshold")
        print(f"[DEBUG] get-threshold: File retrieved in {time.time() - start_time:.3f}s")
        
        return threshold_data
        
    except Exception as e:
        logger.error(f"Error getting threshold: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error getting threshold: {str(e)}")