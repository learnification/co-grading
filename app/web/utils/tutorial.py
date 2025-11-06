from pathlib import Path
from typing import Dict, Any
from fastapi import HTTPException
from app.web.utils.canvas import CanvasAPI
from app.web.utils import logger


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


def create_tutorial_assignment(canvas_api: CanvasAPI) -> Dict[str, Any]:
    """
    Create a complete tutorial assignment in Canvas for testing the cograding tool.
    
    This creates:
    1. An assignment in the given Canvas course
    2. A rubric with criteria
    3. A submission from the test student
    
    Args:
        canvas_api: Initialized CanvasAPI instance
        
    Returns:
        Dictionary containing the created rubric information
        
    Raises:
        HTTPException: If assignment already exists or creation fails
    """

    assignments = canvas_api.list_assignments()
    if any(assignment.get('name') == ASSIGNMENT_NAME for assignment in assignments):
        raise HTTPException(
            status_code=400,
            detail=f"Assignment '{ASSIGNMENT_NAME}' already exists"
        )

    try:
        test_student = canvas_api.get_test_student()
        test_student_id = test_student.get('id')
        if not test_student_id:
            raise HTTPException(
                status_code=404,
                detail="Test student not found or missing ID"
            )
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error retrieving test student: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to retrieve test student: {str(e)}"
        )
    
    logger.info(f"Creating tutorial assignment for test student {test_student_id}")

    assignment = canvas_api.create_assignment(
        name=ASSIGNMENT_NAME,
        description=ASSIGNMENT_DESCRIPTION,
        points_possible=ASSIGNMENT_POINTS_POSSIBLE,
        student_ids=[test_student_id],
    )
    assignment_id = assignment['id']
    logger.info(f"Created assignment with ID {assignment_id}")

    # Build criteria with ratings
    canvas_criteria = []
    for criterion in CRITERIA:
        full_points = criterion['points']
        partial_points = round(float(criterion['points']) / 2, 2)
        
        canvas_criteria.append({
            'description': criterion['description'],
            'points': criterion['points'],
            'ratings': [
                {'description': RATING_FULL_MARKS, 'points': full_points},
                {'description': RATING_PARTIAL_MARKS, 'points': partial_points},
                {'description': RATING_NO_MARKS, 'points': 0},
            ],
        })
    
    rubric = canvas_api.create_rubric(
        title=RUBRIC_TITLE,
        assignment_id=assignment_id,
        criteria=canvas_criteria,
    )
    logger.info(f"Created rubric with {len(CRITERIA)} criteria")

    if TUTORIAL_SUBMISSION_FILE_PATH.exists():
        logger.info(f"Uploading sample submission from {TUTORIAL_SUBMISSION_FILE_PATH}")
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
        logger.info("Sample submission uploaded and submitted successfully")
    else:
        logger.warning(f"Sample submission file not found at {TUTORIAL_SUBMISSION_FILE_PATH}, skipping submission")

    return assignment_id

def tutorial_assignment_enabled(canvas_api: CanvasAPI, assignment_id: int) -> bool:
    try:
        assignment = canvas_api.get_assignment(assignment_id)
        return True
    except:
        return False