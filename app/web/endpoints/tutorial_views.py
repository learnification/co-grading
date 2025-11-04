from app.web.db.models.evaluation import CreateTutorialAssignmentRequest
from fastapi import APIRouter, Header, HTTPException
from app.web.utils import logger, CanvasAPI
from app.web.utils.tutorial import create_tutorial_assignment as create_tutorial_assignment_service, tutorial_assignment_enabled
from typing import Optional
from pydantic import SecretStr
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

@router.get("/get-tutorial/{course_id}")
async def get_tutorial_id(
    course_id: int,
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
    try:

        canvas_api = CanvasAPI(
            api_token=x_canvas_token,
            domain=x_canvas_base_url,
            course_id=course_id
        )
        assignment_exists=False
        tutorial_data = canvas_api.get_root_file("tutorial")

        if tutorial_data:
            assignment_exists = tutorial_assignment_enabled(canvas_api, tutorial_data['tutorialId'])
        if assignment_exists:
                    return tutorial_data
        else:
            # Tutorial file exists but assignment is deleted
            raise HTTPException(
                status_code=410,
                detail={
                    "message": "Tutorial assignment not found",
                    "tutorialId": tutorial_data['tutorialId'],
                    "note": "The tutorial file exists but the assignment has been deleted from Canvas"
                }
            )
    except HTTPException as e:
        raise
    except Exception as e:
        logger.error(f"Error getting tutorial file: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error getting tutorial file: {str(e)}")