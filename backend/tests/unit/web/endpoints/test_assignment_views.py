from fastapi.testclient import TestClient
from app.web import app
from app.web.tasks.schedule_evaluation import schedule_evaluation
import pytest

client = TestClient(app=app)

@pytest.fixture
def valid_payload():
    return {
        "course": {
            "id": 1,
            "name": "Sandbox",
            "account_id": 9,
            "uuid": "uhwfeuiOIHib698bIBibyv",
            "course_code": "Sandbox",
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
            'rubric': [{'id': '_9749', 'description': 'Correctness', 'long_description': '', 'points': 10, 'criterion_use_range': False, 'ratings': [{'id': 'blank', 'description': 'Full Marks', 'long_description': '', 'points': 10}, {'id': '_5987', 'description': 'Partial', 'long_description': '', 'points': 6}, {'id': 'blank_2', 'description': 'No Marks', 'long_description': '', 'points': 0}]}, {'id': '84367_3098', 'description': 'Spellings', 'long_description': '', 'points': 5, 'criterion_use_range': False, 'ratings': [{'id': '84367_9573', 'description': 'Full Marks', 'long_description': 'No Spelling Errors', 'points': 5}, {'id': '84367_3991', 'description': 'Partial', 'long_description': 'Few Spelling Errors', 'points': 3}, {'id': '84367_2501', 'description': 'No Marks', 'long_description': 'Several Spelling Errors', 'points': 0}]}], 
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
                "preview_url": "",
                "submission_type": "online_upload"
            }
        ],
        "settings": {
            "strictness": "moderate",
            "tone": "constructive",
            "length": "medium",
            "customFeedbackPrompt": ""
        }
    }

def test_successful_request(mocker, valid_payload):
    """Test successful task scheduling with valid payload."""
    mock_delay = mocker.patch.object(schedule_evaluation, "delay", return_value=mocker.Mock(id="task_123"))
    response = client.post("/api/v1/grading/generate", json=valid_payload)
    assert response.status_code == 200
    assert response.json() == {"task_id": "task_123"}
    mock_delay.assert_called_once()

def test_model_dump(mocker, valid_payload):
    """Test payload transformation into the expected format."""
    mock_delay = mocker.patch.object(schedule_evaluation, "delay", return_value=mocker.Mock(id="task_123"))
    client.post("/api/v1/grading/generate", json=valid_payload)
    call_args = mock_delay.call_args[0][0]
    assert isinstance(call_args, dict)
    assert call_args["course"]["id"] == 1
    assert call_args["settings"]["strictness"] == "moderate"
    assert call_args["submissions"][0]["id"] == valid_payload["submissions"][0]["id"]

@pytest.mark.parametrize("invalid_payload", [
    {"course": {"id": 123}},
    {},
    {"course": {"id": "not_a_number"}},
    {'course': None,'assignment': None, 'submissions': None, 'settings': None}
])
def test_invalid_payload(mocker, invalid_payload):
    """Test validation errors for invalid payload structures."""
    mock_delay = mocker.patch.object(schedule_evaluation, "delay")
    
    response = client.post("/api/v1/grading/generate", json=invalid_payload)
    assert response.status_code == 422
    mock_delay.assert_not_called()

def test_invalid_content_type(mocker):
    """Test handling of invalid content type in the request."""
    mock_delay = mocker.patch.object(schedule_evaluation, "delay")
    
    response = client.post("/api/v1/grading/generate", data="not json")
    assert response.status_code == 422
    mock_delay.assert_not_called()

@pytest.mark.parametrize("missing_field", ["course", "assignment", "submissions", "settings"])
def test_missing_required_field(mocker, valid_payload, missing_field):
    """Test validation errors for missing required fields."""
    mock_delay = mocker.patch.object(schedule_evaluation, "delay")
    payload = valid_payload.copy()
    del payload[missing_field]
    response = client.post("/api/v1/grading/generate", json=payload)
    assert response.status_code == 422
    assert response.json()["detail"][0]["loc"] == ["body", missing_field]
    assert response.json()["detail"][0]["msg"] == "Field required"
    assert response.json()["detail"][0]["type"] == "missing"
    mock_delay.assert_not_called()

def test_invalid_strictness(mocker, valid_payload):
    """Test validation error for invalid strictness value."""
    mock_delay = mocker.patch.object(schedule_evaluation, "delay")
    payload = valid_payload.copy()
    payload["settings"]["strictness"] = "invalid"
    response = client.post("/api/v1/grading/generate", json=payload)
    assert response.status_code == 422
    assert response.json()["detail"][0]["loc"] == ["body", "settings", "strictness"]
    assert response.json()["detail"][0]["type"] == "enum"
    mock_delay.assert_not_called()

##### @router.get("/status/{task_id}", response_model=dict) tests

@pytest.mark.parametrize(
    "status, expected_status, expected_result, expected_traceback",
    [
        ("SUCCESS", "SUCCESS", {"score": 100}, None),
        ("PENDING", "PENDING", None, None),
        ("STARTED", "STARTED", None, None),
        ("RETRY", "STARTED", None, None),  # RETRY maps to STARTED
        ("FAILURE", "FAILURE", None, "Failed to generate feedback."),
    ],
)
def test_task_status(mocker, status, expected_status, expected_result, expected_traceback):
    """Test task status endpoint returns expected data."""
    mock_task = mocker.Mock()
    mock_task.status = status
    mock_task.result = {"score": 100} if status == "SUCCESS" else None

    mocker.patch("app.web.endpoints.assignment_views.AsyncResult", return_value=mock_task)

    response = client.get("/api/v1/grading/status/fake-task-id")
    assert response.status_code == 200

    data = response.json()
    assert data["task_id"] == "fake-task-id"
    assert data["status"] == expected_status
    assert data["result"] == expected_result
    assert data["traceback"] == expected_traceback