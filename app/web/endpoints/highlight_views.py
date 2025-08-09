import tempfile
from fastapi import APIRouter, Header, HTTPException, BackgroundTasks
from fastapi.responses import FileResponse
from app.web.db.models import GenerateGuidelineRequest, UpdateGuidelineRequest, HighlightViolationsRequest
from app.web.utils import logger, CanvasAPI
from pydantic import SecretStr
from pathlib import Path
from app.autograding.guidelines import generate_and_upload_guideline, update_guideline_in_canvas, retrieve_guideline_from_canvas
from app.autograding.highlighting.submission_highlighting import highlight_document_violations_async, upload_highlighted_pdfs_async
router = APIRouter()

@router.post("/generate_guideline", response_model=dict)
def generate_guideline(
    request: GenerateGuidelineRequest,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
    x_user_openai_key: SecretStr = Header(..., alias="X-User-OpenAI-Key")
):
    try:
        return generate_and_upload_guideline(
            assignment=request.assignment,
            toggles=request.toggles,
            base_url=request.baseURL,
            canvas_token=x_canvas_token,
            openai_key=x_user_openai_key
        )
    except Exception as e:
        logger.error(f"Error in generate_guideline: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to generate guideline")


@router.put("/update_guideline", response_model=dict)
def update_generated_guideline(
    request: UpdateGuidelineRequest,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token"),
):
    try:
        request_dumped = request.model_dump(by_alias=True)
        return update_guideline_in_canvas(
            assignment=request.assignment,
            guideline=request_dumped['guideline'],
            base_url=request.baseURL,
            canvas_token=x_canvas_token
        )
    except Exception as e:
        logger.error(f"Error in update_generated_guideline: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to update guideline")


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
        return retrieve_guideline_from_canvas(
            course_id=course_id,
            assignment_id=assignment_id,
            base_url=base_url,
            canvas_token=x_canvas_token
        )
    except FileNotFoundError:
        logger.info(f"No guidelines file found for assignment {assignment_id}, returning empty guidelines")
        return {"guidelines": {}}
    except Exception as e:
        logger.error(f"Error in get_guideline: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to retrieve guideline")


@router.post("/highlight_violations", response_model=dict)
async def highlight_violations(
    request: HighlightViolationsRequest,
    x_user_openai_key: SecretStr = Header(..., alias="X-User-OpenAI-Key"),
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token")
):
    try:
        canvas_api = CanvasAPI(api_token=x_canvas_token, domain=request.baseURL, course_id=request.course_id)

        all_highlights = await highlight_document_violations_async(
            submission=request.submission,
            guideline=request.guideline,
            openai_key=x_user_openai_key,
            canvas_api=canvas_api
        )
        
        await upload_highlighted_pdfs_async(canvas_api, all_highlights)
        
        clean_results = []
        for result in all_highlights:
            clean_result = {
                "criterion_name": result["criterion_name"],
                "criterion_id": result["criterion_id"],
                "violations_found": result["violations_found"],
                "highlights_added": result["highlights_added"]
            }
            clean_results.append(clean_result)
        
        return {"results": clean_results}
    except Exception as e:
        logger.error(f"Error in highlight_violations: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to highlight violations")


@router.get("/get_highlighted_pdf/{course_id}/{assignment_id}/{criterion_id}/{user_id}")
def get_highlighted_pdf(
    course_id: int, 
    assignment_id: int, 
    criterion_id: str,
    user_id: int,
    base_url: str,
    background_tasks: BackgroundTasks,
    x_canvas_token: SecretStr = Header(..., alias="X-Canvas-Token")
):
    try:
        canvas_api = CanvasAPI(x_canvas_token, base_url, course_id)
        
        file_id = canvas_api.get_highlighted_pdf_file_id(assignment_id, criterion_id, user_id)
        logger.info(f"file_id: {file_id}")
        if not file_id:
            raise HTTPException(
                status_code=404, 
                detail=f"Highlighted PDF for criterion '{criterion_id}' not found in Canvas"
            )
        
        pdf_bytes = canvas_api.download_canvas_file_bytes(file_id)
        
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_file:
            temp_file.write(pdf_bytes)
            temp_path = temp_file.name
        
        background_tasks.add_task(Path(temp_path).unlink)
        
        return FileResponse(
            path=temp_path,
            media_type="application/pdf",
            filename=f"{assignment_id}_{criterion_id}_{user_id}_highlighted.pdf"
        )
        
    except Exception as e:
        logger.error(f"Error in get_highlighted_pdf: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to retrieve highlighted PDF")