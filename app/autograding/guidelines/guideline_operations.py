from typing import Dict, Any, List
from pydantic import SecretStr
from app.web.utils import logger, CanvasAPI
from app.autograding.guidelines.guideline_agent import create_rubric_guideline
from app.web.db.models import Assignment


def generate_and_upload_guideline(
    assignment: Assignment,
    base_url: str,
    canvas_token: SecretStr,
    openai_key: SecretStr
) -> List[Dict]:
    """
    Generate a new guideline using AI and upload it to Canvas.
    
    Args:
        assignment: Assignment object with id and course_id
        base_url: Canvas base URL
        canvas_token: Canvas API token
        openai_key: Optional OpenAI API key
        
    Returns:
        Dictionary with the generated guideline
    """
    assignment_id = assignment.id
    course_id = assignment.course_id
    
    logger.info(f"Generating guideline for assignment: {assignment}")
    
    # Initialize Canvas API
    canvas_api = CanvasAPI(canvas_token, base_url, course_id)
    
    # Generate guideline using AI
    result = create_rubric_guideline(assignment, openai_key)
    
    # Upload to Canvas
    canvas_api.upload_file(result, assignment_id, 'rubric_guideline')
    
    return {"generated_guideline": result}


def update_guideline_in_canvas(
    assignment: Assignment,
    guideline: List[Dict[str, Any]],
    base_url: str,
    canvas_token: SecretStr
) -> Dict[str, Any]:
    """
    Update an existing guideline in Canvas.
    
    Args:
        assignment: Assignment object with id and course_id
        guideline: The guideline data to upload
        base_url: Canvas base URL
        canvas_token: Canvas API token
        
    Returns:
        Dictionary with the updated guideline
    """
    assignment_id = assignment.id
    course_id = assignment.course_id
    logger.info(f"Updating guideline for assignment: {assignment_id}")
    
    canvas_api = CanvasAPI(canvas_token, base_url, course_id)
    
    updated = canvas_api.upload_file(guideline, assignment_id, 'rubric_guideline')
    
    return {"updated_guideline": updated}


def retrieve_guideline_from_canvas(
    course_id: int,
    assignment_id: int,
    base_url: str,
    canvas_token: SecretStr
) -> Dict[str, Any]:
    """
    Retrieve a guideline/rubric from Canvas.
    
    Args:
        course_id: Canvas course ID
        assignment_id: Canvas assignment ID  
        base_url: Canvas base URL
        canvas_token: Canvas API token
        
    Returns:
        Dictionary with the guideline
    """
    logger.info(f"Retrieving guideline for course_id: {course_id}, assignment_id: {assignment_id}")
    
    canvas_api = CanvasAPI(canvas_token, base_url, course_id)
    
    guideline = canvas_api.get_file(assignment_id,'rubric_guideline')
    
    return {"guideline": guideline} 