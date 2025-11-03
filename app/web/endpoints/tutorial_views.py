from app.web.db.models.evaluation import CreateTutorialAssignmentRequest, TutorialCheckRequest
from fastapi import APIRouter, Header, HTTPException
from app.web.utils import logger, CanvasAPI
from app.web.utils.tutorial import create_tutorial_assignment as create_tutorial_assignment_service
from typing import Optional
from pydantic import SecretStr
import time
router = APIRouter()


@router.post("/create-tutorial-assignment", response_model=dict)
async def create_tutorial_assignment(
    request: CreateTutorialAssignmentRequest,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
    x_canvas_base_url: Optional[str] = Header("canvas.sfu.ca", alias="X-Canvas-Base-Url"),
):
    """
    Creates a Tutorial Assignment and restricts visibility to the Test Student.
    """
    try:
        canvas_api = CanvasAPI(
            api_token=x_canvas_token,
            domain=x_canvas_base_url,
            course_id=request.courseId
        )

        tutorialId = create_tutorial_assignment_service(
            canvas_api=canvas_api,
        )

        tutorial_data = {
            "tutorialId": tutorialId
        }
        
        canvas_api.upload_root(tutorial_data, "tutorial")

        return {
            "courseId": request.courseId,
            "tutorialId": tutorialId,
        }
        
    except Exception as e:
        logger.error(f"Error creating tutorial assignment: {str(e)}", exc_info=True)
        raise HTTPException(
            status_code=500,
            detail=f"Error creating tutorial assignment: {str(e)}"
        )

@router.post("/get-tutorial")
async def get_tutorial_id(
    request: TutorialCheckRequest,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
    x_canvas_base_url: Optional[str] = Header("canvas.sfu.ca", alias="X-Canvas-Base-Url"),
):
    """
    Retrieves tutorial id for the course
    
    Args:
    - courseId: Canvas course ID
    
    Returns:
    - JSON content of the tutorial file
    """
    start = time.time()
    try:

        canvas_api = CanvasAPI(
            api_token=x_canvas_token,
            domain=x_canvas_base_url,
            course_id=request.courseId
        )
        
        # Get the threshold file (course-wide)
        tutorial_data = canvas_api.get_root_file("tutorial")
        end = time.time()
        print(f"took {end-start:.2f}s")
        return tutorial_data
        
    except Exception as e:
        logger.error(f"Error getting tutorial file: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error getting tutorial file: {str(e)}")