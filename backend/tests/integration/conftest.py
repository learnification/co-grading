import pytest
import os
import tempfile
import shutil
from dotenv import load_dotenv
from fastapi.testclient import TestClient
import time

# Load test environment variables BEFORE importing app modules
load_dotenv('.env.test', override=True)

# Now import app modules that will use the test environment
from app.web import app
from app.celery import celery_app

@pytest.fixture
def test_client():
    """Create FastAPI test client."""
    return TestClient(app=app)

@pytest.fixture
def mock_ai_services(mocker):
    """Mock only external AI services, not internal components."""
    mock_build_eval = mocker.patch('app.autograding.agents.grading_agent.build_evaluation')
    mock_gen_guideline = mocker.patch('app.autograding.evaluation.generate_guideline')
    
    # Mock AI responses
    mock_gen_guideline.return_value = "Mock grading guideline for integration test"
    
    # Create a proper GradingFeedback mock that matches the actual model
    from app.web.db.models import GradingFeedback
    mock_feedback = GradingFeedback(
        submission_id=51344183,  # From the test submission
        score=85.0,
        feedback="Good work! Here are some suggestions for improvement..."
    )
    mock_build_eval.return_value = mock_feedback
    
    return {
        'build_evaluation': mock_build_eval,
        'generate_guideline': mock_gen_guideline
    }

@pytest.fixture
def temp_downloads_dir():
    """Create temporary downloads directory for file operations."""
    temp_dir = tempfile.mkdtemp()
    original_downloads = os.environ.get('DOWNLOADS_DIR', 'downloads')
    
    # Temporarily change downloads directory
    os.environ['DOWNLOADS_DIR'] = temp_dir
    
    yield temp_dir
    
    # Cleanup
    shutil.rmtree(temp_dir)
    os.environ['DOWNLOADS_DIR'] = original_downloads

@pytest.fixture
def realistic_grading_request():
    """Realistic grading request that matches real Canvas API structure."""
    return {
        "course": {
            "id": 1,
            "name": "Introduction to Computer Science",
            "account_id": 9,
            "uuid": "uhwfeuiOIHib698bIBibyv",
            "course_code": "CS101",
            "created_at": "2023-02-21T22:59:13Z",
            "enrollments": [
                {
                    "type": "teacher",
                    "user_id": 271699,
                    "enrollment_state": "active"
                }
            ]
        },
        "assignment": {
            "id": 986784,
            "name": "Programming Assignment 1: Hello World",
            "description": "<p>Write a simple program that prints 'Hello, World!' to the console.</p>",
            "course_id": 1,
            "created_at": "2024-06-20T21:45:48Z",
            "updated_at": "2025-05-20T20:26:52Z",
            "due_at": "2024-06-25T23:59:00Z",
            "html_url": "https://canvas.sfu.ca/courses/1/assignments/986784",
            "points_possible": 15.0,
            "grading_type": "points",
            "submissions_download_url": "https://canvas.sfu.ca/courses/1/assignments/986784/submissions?zip=1",
            "assignment_group_id": 203919,
            "submission_types": ["online_upload"],
            "rubric": [
                {
                    "id": "_9749",
                    "description": "Correctness",
                    "long_description": "Does the program compile and run correctly?",
                    "points": 10,
                    "criterion_use_range": False,
                    "ratings": [
                        {"id": "blank", "description": "Full Marks", "long_description": "Program works perfectly", "points": 10},
                        {"id": "_5987", "description": "Partial", "long_description": "Program has minor issues", "points": 6},
                        {"id": "blank_2", "description": "No Marks", "long_description": "Program does not work", "points": 0}
                    ]
                },
                {
                    "id": "84367_3098",
                    "description": "Code Quality",
                    "long_description": "Is the code well-structured and readable?",
                    "points": 5,
                    "criterion_use_range": False,
                    "ratings": [
                        {"id": "84367_9573", "description": "Full Marks", "long_description": "Excellent code quality", "points": 5},
                        {"id": "84367_3991", "description": "Partial", "long_description": "Good code quality", "points": 3},
                        {"id": "84367_2501", "description": "No Marks", "long_description": "Poor code quality", "points": 0}
                    ]
                }
            ],
            "has_submitted_submissions": True
        },
        "submissions": [
            {
                "id": 51344183,
                "assignment_id": 986784,
                "user_id": 389291,
                "workflow_state": "submitted",
                "grade_matches_current_submission": True,
                "late": False,
                "missing": False,
                "preview_url": "https://canvas.sfu.ca/courses/1/assignments/986784/submissions/51344183",
                "submission_type": "online_upload",
                "attachments": [
                    {
                        "id": 12345,
                        "uuid": "abc123-def456-ghi789",
                        "folder_id": 1,
                        "filename": "hello_world.py",
                        "display_name": "hello_world.py",
                        "content_type": "text/x-python",
                        "size": 1024,
                        "upload_status": "success",
                        "url": "https://canvas.sfu.ca/files/12345/download",
                        "created_at": "2024-06-20T21:45:48Z",
                        "updated_at": "2024-06-20T21:45:48Z",
                        "modified_at": "2024-06-20T21:45:48Z",
                        "mime_class": "code"
                    }
                ]
            }
        ],
        "settings": {
            "strictness": "moderate",
            "tone": "constructive",
            "length": "medium",
            "customFeedbackPrompt": ""
        }
    }
