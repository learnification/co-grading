from pathlib import Path
from typing import Optional, Tuple
from fastapi import HTTPException
from app.web.utils.canvas import CanvasAPI
from app.web.utils import logger
from pydantic import SecretStr
from app.autograding.guidelines import generate_and_upload_guideline
from app.web.db.models import Assignment


ASSIGNMENT_NAME = "Cograding Sandbox"
ASSIGNMENT_DESCRIPTION = "Question: In the context of Chrome extension development, what is a Content Script, and how does it differ from a Background Script?"
ASSIGNMENT_POINTS_POSSIBLE = 15
RUBRIC_TITLE = "Cograding Sandbox Rubric"
SUBMISSION_FILENAME = "tutorial.pdf"

_PROJECT_ROOT = Path(__file__).resolve().parents[3]
TUTORIAL_SUBMISSION_FILE_PATH = _PROJECT_ROOT / "resources" / SUBMISSION_FILENAME

CRITERIA = [
    {"description": "Correctness", "points": 10},
    {"description": "Spellings", "points": 5},
]

RATING_FULL_MARKS = "Full Marks"
RATING_PARTIAL_MARKS = "Partial Marks"
RATING_NO_MARKS = "No Marks"


def create_tutorial_assignment(
    canvas_api: CanvasAPI,
    openai_key: Optional[SecretStr] = None,
    base_url: Optional[str] = None,
    canvas_token: Optional[SecretStr] = None
) -> Tuple[int, dict]:
    """
    Create a complete tutorial assignment in Canvas for testing the cograding tool.
    
    This creates:
    1. An assignment in the given Canvas course
    2. A rubric with criteria
    3. A submission from the test student (if file exists)
    4. Grades the submission with full marks on rubric (if file exists)
    5. Generates guidelines automatically in background (if OpenAI key provided)
    
    Args:
        canvas_api: Initialized CanvasAPI instance
        openai_key: Optional OpenAI API key for generating guidelines
        base_url: Optional Canvas base URL (required if openai_key is provided)
        canvas_token: Optional Canvas API token (required if openai_key is provided)
        
    Returns:
        Tuple of (assignment_id, background_data):
        - assignment_id: The created assignment ID
        - background_data: Dict containing data needed for background tasks
        
    Raises:
        HTTPException: If assignment already exists or creation fails
    """
    assignments = canvas_api.list_assignments(search_term=ASSIGNMENT_NAME)
    if any(assignment.get('name') == ASSIGNMENT_NAME for assignment in assignments):
        raise HTTPException(
            status_code=400,
            detail=f"Assignment '{ASSIGNMENT_NAME}' already exists"
        )

    test_student = canvas_api.get_test_student()
    test_student_id = test_student.get('id')
    if not test_student_id:
        raise HTTPException(
            status_code=404,
            detail="Test student not found or missing ID"
        )

    assignment = canvas_api.create_assignment(
        name=ASSIGNMENT_NAME,
        description=ASSIGNMENT_DESCRIPTION,
        points_possible=ASSIGNMENT_POINTS_POSSIBLE,
        student_ids=[test_student_id],
    )
    assignment_id = assignment['id']

    canvas_criteria = [
        {
            'description': criterion['description'],
            'points': criterion['points'],
            'ratings': [
                {'description': RATING_FULL_MARKS, 'points': criterion['points']},
                {'description': RATING_PARTIAL_MARKS, 'points': round(criterion['points'] / 2, 2)},
                {'description': RATING_NO_MARKS, 'points': 0},
            ],
        }
        for criterion in CRITERIA
    ]
    
    rubric = canvas_api.create_rubric(
        title=RUBRIC_TITLE,
        assignment_id=assignment_id,
        criteria=canvas_criteria,
    )

    rubric_data = rubric.get('rubric', {}).get('data', [])

    assignment_dict = assignment.copy()
    assignment_dict['course_id'] = canvas_api.course_id
    assignment_dict['rubric'] = rubric_data
    
    if TUTORIAL_SUBMISSION_FILE_PATH.exists():
        with open(TUTORIAL_SUBMISSION_FILE_PATH, "rb") as f:
            file_bytes = f.read()
        
        upload_result = canvas_api.upload_submission_file(
            assignment_id=assignment_id,
            user_id=test_student_id,
            filename=SUBMISSION_FILENAME,
            file_bytes=file_bytes,
        )
        
        canvas_api.submit_assignment(
            assignment_id=assignment_id,
            file_id=upload_result['id'],
            user_id=test_student_id,
        )
        
        rubric_assessment = {
            criterion['id']: {'points': criterion['points']}
            for criterion in rubric_data
            if criterion.get('id')
        }
        
        canvas_api.grade_submission(
            assignment_id=assignment_id,
            user_id=test_student_id,
            posted_grade=str(ASSIGNMENT_POINTS_POSSIBLE),
            rubric_assessment=rubric_assessment
        )
    
    # Return data needed for background task (guidelines only)
    background_data = {
        'assignment_id': assignment_id,
        'assignment_dict': assignment_dict if (openai_key and base_url and canvas_token) else None,
    }
    
    return assignment_id, background_data


def generate_guidelines_background(
    assignment_dict: dict,
    assignment_id: int,
    base_url: str,
    canvas_token: SecretStr,
    openai_key: SecretStr
) -> None:
    """Background task to generate guidelines asynchronously."""
    try:
        assignment_model = Assignment.model_validate(assignment_dict)
        toggles = {criterion.id: True for criterion in assignment_model.rubric}
        
        generate_and_upload_guideline(
            assignment=assignment_model,
            toggles=toggles,
            base_url=base_url,
            canvas_token=canvas_token,
            openai_key=openai_key
        )
    except Exception as e:
        logger.error(
            f"Failed to generate guidelines for assignment {assignment_id}: {str(e)}",
            exc_info=True
        )



def tutorial_assignment_enabled(canvas_api: CanvasAPI, assignment_id: int) -> bool:
    try:
        canvas_api.get_assignment(assignment_id)
        return True
    except Exception:
        return False