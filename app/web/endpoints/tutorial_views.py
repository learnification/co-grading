from app.web.db.models.evaluation import CreateTutorialAssignmentRequest
from fastapi import APIRouter, Header, HTTPException
from app.web.utils import logger, CanvasAPI
from app.web.utils.tutorial import create_tutorial_assignment as create_tutorial_assignment_service
from typing import Optional
from pydantic import SecretStr

router = APIRouter()


@router.post("/create-tutorial-assignment", response_model=dict)
async def create_tutorial_assignment(
    request: CreateTutorialAssignmentRequest,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
    x_canvas_base_url: Optional[str] = Header("https://canvas.sfu.ca", alias="X-Canvas-Base-Url"),
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

        rubric = create_tutorial_assignment_service(
            canvas_api=canvas_api,
        )

        return {
            "courseId": request.courseId,
            "rubric": rubric,
        }
        
    except Exception as e:
        logger.error(f"Error creating tutorial assignment: {str(e)}", exc_info=True)
        raise HTTPException(
            status_code=500,
            detail=f"Error creating tutorial assignment: {str(e)}"
        )
