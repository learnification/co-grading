import os
from fastapi.testclient import TestClient
from app.web import app
import requests
import pytest
from typing import Dict

client = TestClient(app=app)

HEADERS = {
    "Authorization": f"Bearer {os.environ.get('API_TOKEN')}",
    "Content-Type": "application/json",
}

URL_COURSE = f"https://{os.environ.get('BASE_URL')}/api/v1/courses/{os.environ.get('COURSE_ID')}/?include[]=needs_grading_count"
URL_ASSIGNMENTS = f"https://{os.environ.get('BASE_URL')}/api/v1/courses/{os.environ.get('COURSE_ID')}/assignments/{os.environ.get('ASSIGNMENT_ID')}"
URL_SUBMISSIONS = f"https://{os.environ.get('BASE_URL')}/api/v1/courses/{os.environ.get('COURSE_ID')}/assignments/{os.environ.get('ASSIGNMENT_ID')}/submissions"

@pytest.fixture(scope="session")
def canvas_payload() -> Dict:
    """
    Fetch canvas data from external API for tests.
    Note: For faster and more reliable tests,
    consider caching or mocking this data.
    """
    return {
        "course": requests.get(URL_COURSE, headers=HEADERS).json(),
        "assignment": requests.get(URL_ASSIGNMENTS, headers=HEADERS).json(),
        "submissions": requests.get(URL_SUBMISSIONS, headers=HEADERS).json(),
        "settings": {
            "strictness": "moderate",
            "tone": "constructive",
            "length": "medium",
            "custom_feedback_prompt": "",
        },
    }

def test_get_evaluation_components():
    print(f"REDIS_URI: {os.environ.get('REDIS_URI')}")
    print(f"DB_URI: {os.environ.get('DB_URI')}")
    print(f"DEBUG: {os.environ.get('DEBUG')}")
    print(f"BASE_URL: {os.environ.get('BASE_URL')}")
    assert 1 == 1