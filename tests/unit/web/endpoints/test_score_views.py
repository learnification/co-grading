import pytest
from fastapi.testclient import TestClient
from app.web import app

client = TestClient(app=app)


@pytest.fixture
def mock_get_evaluation_components(mocker):
    """
    Mock get_evaluation_components to return a predefined mock object during tests
    """
    mock_components = mocker.Mock(llm="llama3.2", document_id=None, id="test-id")
    return mocker.patch("app.web.endpoints.score_views.get_evaluation_components", return_value=mock_components)


@pytest.mark.parametrize("valid_score", [0, 1])
def test_update_score_valid(mock_get_evaluation_components, mocker, valid_score):
    """Test updating a score with valid values."""
    mock_score_evaluation = mocker.patch("app.web.endpoints.score_views.score_evaluation")

    response = client.post("/api/v1/scores", json={"evaluation_id": "test-id", "score": valid_score})
    assert response.json() == {"message": "Score updated"}
    assert response.status_code == 200

    mock_get_evaluation_components.assert_called_once_with("test-id")
    mock_score_evaluation.assert_called_once_with(valid_score, "llama3.2")


@pytest.mark.parametrize("invalid_score", [-10, -2, 2, 10])
def test_update_score_invalid_range_int(invalid_score):
    """Test integer scores outside valid range."""
    response = client.post("/api/v1/scores", json={"evaluation_id": "test-id", "score": invalid_score})

    assert response.status_code == 400
    assert response.json()["detail"] == "Score must be 0 or 1"


@pytest.mark.parametrize("invalid_score", [-1.1, 1.1])
def test_update_score_invalid_type_float(invalid_score):
    """Test float scores get type validation error."""
    response = client.post("/api/v1/scores", json={"evaluation_id": "test-id", "score": invalid_score})

    assert response.status_code == 422


def test_list_scores(mocker):
    """Test listing scores returns the mocked scores dictionary."""
    mock_scores = {"llm": {"llama3.2": 0.054}}
    mocker.patch("app.web.endpoints.score_views.get_scores", return_value=mock_scores)

    response = client.get("/api/v1/scores")

    assert response.status_code == 200
    assert response.json() == mock_scores


def test_list_scores_empty(mocker):
    """Test list_scores returns empty dict when no scores exist."""
    mock_scores = {}
    mocker.patch("app.web.endpoints.score_views.get_scores", return_value=mock_scores)

    response = client.get("/api/v1/scores")

    assert response.status_code == 200
    assert response.json() == mock_scores
