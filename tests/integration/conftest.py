import os
import sys
from pathlib import Path
import redis
import pytest
from fastapi.testclient import TestClient
from app.web import app
import requests


@pytest.fixture
def test_client():
    """Create FastAPI test client."""
    return TestClient(app=app)


@pytest.fixture(autouse=True)
def flush_redis():
    """Automatically flush Redis before each test."""
    redis_uri = os.getenv("REDIS_URI")
    print(f"redis_uri: {redis_uri}")
    if redis_uri:
        client = redis.Redis.from_url(redis_uri)
        client.flushdb()
        yield
        client.flushdb()
    else:
        yield


@pytest.fixture(scope="session")
def base_grading_request():
    """Base grading request without submissions."""
    return {
        "course": {
            "id": 1,
            "name": "Sandbox",
            "account_id": 9,
            "uuid": "uhwfeuiOIHib698bIBibyv",
            "course_code": "Sandbox",
            "created_at": "2023-02-21T22:59:13Z",
            "enrollments": [{"type": "teacher", "user_id": 271699, "enrollment_state": "active"}],
        },
        "assignment": {
            "id": 986784,
            "name": "Test assignment",
            "description": "Test description",
            "course_id": 1,
            "created_at": "2024-06-20T21:45:48Z",
            "updated_at": "2025-05-20T20:26:52Z",
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
                    "long_description": "",
                    "points": 10,
                    "criterion_use_range": False,
                    "ratings": [
                        {"id": "blank", "description": "Full Marks", "long_description": "", "points": 10},
                        {"id": "_5987", "description": "Partial", "long_description": "", "points": 6},
                        {"id": "blank_2", "description": "No Marks", "long_description": "", "points": 0},
                    ],
                },
                {
                    "id": "84367_3098",
                    "description": "Spellings",
                    "long_description": "",
                    "points": 5,
                    "criterion_use_range": False,
                    "ratings": [
                        {
                            "id": "84367_9573",
                            "description": "Full Marks",
                            "long_description": "No Spelling Errors",
                            "points": 5,
                        },
                        {"id": "84367_3991", "description": "Partial", "long_description": "Few Spelling Errors", "points": 3},
                        {
                            "id": "84367_2501",
                            "description": "No Marks",
                            "long_description": "Several Spelling Errors",
                            "points": 0,
                        },
                    ],
                },
            ],
            "has_submitted_submissions": True,
        },
        "settings": {"strictness": "moderate", "tone": "constructive", "length": "medium", "customFeedbackPrompt": ""},
    }


@pytest.fixture(scope="session")
def pdf_submission():
    """A submission with a PDF attachment."""
    return {
        "id": 57658105,
        "body": "",
        "url": None,
        "grade": None,
        "score": None,
        "submitted_at": "2025-06-13T22:03:30Z",
        "assignment_id": 986784,
        "user_id": 388778,
        "submission_type": "online_upload",
        "workflow_state": "submitted",
        "grade_matches_current_submission": True,
        "graded_at": None,
        "grader_id": None,
        "attempt": 1,
        "cached_due_date": None,
        "excused": None,
        "late_policy_status": None,
        "points_deducted": None,
        "grading_period_id": None,
        "extra_attempts": None,
        "posted_at": None,
        "redo_request": False,
        "custom_grade_status_id": None,
        "sticker": None,
        "late": False,
        "missing": False,
        "seconds_late": 0,
        "entered_grade": None,
        "entered_score": None,
        "preview_url": "https://canvas.sfu.ca/courses/76521/assignments/986784/submissions/388778?preview=1&version=1",
        "attachments": [
            {
                "id": 26355942,
                "uuid": "JjmlcfGnnhJwhw67DYEh2xLAOPzxiKjduSjONbQw",
                "folder_id": 3195266,
                "display_name": "PDF_Assignment (9).pdf",
                "filename": "1748024421_275__PDF_Assignment.pdf",
                "upload_status": "success",
                "content-type": "application/pdf",
                "url": "https://canvas.sfu.ca/files/26355942/download?download_frd=1&verifier=JjmlcfGnnhJwhw67DYEh2xLAOPzxiKjduSjONbQw",
                "size": 27356,
                "created_at": "2025-06-13T22:03:29Z",
                "updated_at": "2025-06-13T22:03:30Z",
                "unlock_at": None,
                "locked": None,
                "hidden": None,
                "lock_at": None,
                "hidden_for_user": False,
                "thumbnail_url": None,
                "modified_at": "2025-06-13T22:03:29Z",
                "mime_class": "pdf",
                "media_entry_id": None,
                "category": "uncategorized",
                "locked_for_user": False,
                "preview_url": None,
            }
        ],
        "proxy_submitter": "Anon Student",
        "proxy_submitter_id": 271699,
    }


@pytest.fixture(scope="session")
def text_submission():
    """A submission with a text file attachment."""
    return {
        "id": 51344183,
        "body": "",
        "url": None,
        "grade": None,
        "score": None,
        "submitted_at": "2025-06-19T18:18:23Z",
        "assignment_id": 986784,
        "user_id": 389291,
        "submission_type": "online_upload",
        "workflow_state": "submitted",
        "grade_matches_current_submission": True,
        "graded_at": "2024-09-13T03:13:23Z",
        "grader_id": 388777,
        "attempt": 7,
        "cached_due_date": None,
        "excused": False,
        "late_policy_status": None,
        "points_deducted": None,
        "grading_period_id": None,
        "extra_attempts": None,
        "posted_at": "2024-09-13T03:12:45Z",
        "redo_request": False,
        "custom_grade_status_id": None,
        "sticker": None,
        "late": False,
        "missing": False,
        "seconds_late": 0,
        "entered_grade": None,
        "entered_score": None,
        "preview_url": "https://canvas.sfu.ca/courses/76521/assignments/986784/submissions/389291?preview=1&version=11",
        "attachments": [
            {
                "id": 26392218,
                "uuid": "SXq8KwN7nxG6e8X2HXUhiUVGBpKy9Zbil9sRAnSW",
                "folder_id": 2870685,
                "display_name": "Type_text-1.txt",
                "filename": "1750357102_746__Type_text.txt",
                "upload_status": "success",
                "content-type": "text/plain",
                "url": "https://canvas.sfu.ca/files/26392218/download?download_frd=1&verifier=SXq8KwN7nxG6e8X2HXUhiUVGBpKy9Zbil9sRAnSW",
                "size": 965,
                "created_at": "2025-06-19T18:18:22Z",
                "updated_at": "2025-06-19T18:18:23Z",
                "unlock_at": None,
                "locked": False,
                "hidden": False,
                "lock_at": None,
                "hidden_for_user": False,
                "thumbnail_url": None,
                "modified_at": "2025-06-19T18:18:22Z",
                "mime_class": "text",
                "media_entry_id": None,
                "category": "uncategorized",
                "locked_for_user": False,
                "preview_url": None,
            }
        ],
        "proxy_submitter": "Anon Student",
        "proxy_submitter_id": 271699,
    }


@pytest.fixture(scope="session")
def single_submission_request(base_grading_request, pdf_submission):
    """Grading request with a single PDF submission."""
    request = base_grading_request.copy()
    request["submissions"] = [pdf_submission]
    return request


@pytest.fixture(scope="session")
def multiple_submissions_request(base_grading_request, pdf_submission, text_submission):
    """Grading request with multiple submissions (PDF and text)."""
    request = base_grading_request.copy()
    request["submissions"] = [pdf_submission, text_submission]
    return request

def check_rate_limit():
    """Call your API or check status to see if you're rate limited."""
    test_type = os.getenv("TEST_LLM_TYPE", "local")
    if test_type != 'local':
        api_key = os.getenv("OPENROUTER_API_KEY")
        response = requests.get(
            url="https://openrouter.ai/api/v1/key",
            headers={"Authorization": f"Bearer {api_key}"}
            )
        if response.status_code != 200:
                print(f"❌ Failed to check API key status: {response.status_code}")
                sys.exit(1)
        data = response.json()
        if data.get("default_user", {}).get("credits", 0) <= 0:
            print("❌ Rate limit hit: No credits remaining.")
            sys.exit(1)
        print(f"✅ API credit check passed — Credits remaining: {data['default_user']['credits']}")
@pytest.fixture(scope="session", autouse=True)
def api_credit_guard():
    """Check API credit before running tests."""
    check_rate_limit()