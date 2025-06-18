from app.web.endpoints.score_views import list_scores, update_score
from fastapi.exceptions import HTTPException
import pytest
from app.web import app
from fastapi.testclient import TestClient

client = TestClient(app=app)

@pytest.fixture
def mock_get_evaluation_components(mocker):
    """
    Mock get_evaluation_components to return a predefined mock object during tests
    """
    mock_components = mocker.Mock(llm="llama3.2", document_id=None, id="test-id")
    return mocker.patch(
        "app.web.endpoints.score_views.get_evaluation_components", 
        return_value=mock_components
    )

def test_update_score_valid(mock_get_evaluation_components, mocker):
    """Test updating a score with a valid value."""
    mock_score_evaluation = mocker.patch(
        "app.web.endpoints.score_views.score_evaluation"
    )


    result = update_score(evaluation_id="test-id", score=1)
    assert result == {"message": "Score updated"}
    
    mock_score_evaluation.assert_called_once_with(1, "llama3.2")

def test_update_score_invalid_above_range(mock_get_evaluation_components):
    """Test score above valid range raises HTTPException."""
    with pytest.raises(HTTPException) as exc_info:
        update_score(evaluation_id="test-id", score=2)
    
    assert exc_info.value.status_code == 400
    assert exc_info.value.detail == "Score must be a float between -1 and 1"

def test_update_score_invalid_below_range(mock_get_evaluation_components):
    """Test score below valid range raises HTTPException."""
    with pytest.raises(HTTPException) as exc_info:
        update_score(evaluation_id="test-id", score=-2)
    
    assert exc_info.value.status_code == 400
    assert exc_info.value.detail == "Score must be a float between -1 and 1"

def test_list_scores(mocker):
    """Test listing scores returns the mocked scores dictionary."""
    mock_scores = {
        'llm': {
            "llama3.2": 0.0540540540540541
        }
    }
    mocker.patch("app.web.endpoints.score_views.get_scores", return_value=mock_scores)

    response = list_scores()

    assert response == mock_scores

def test_list_scores_empty(mocker):
    """Test list_scores returns empty dict when no scores exist."""
    mocker.patch("app.web.endpoints.score_views.get_scores", return_value={})
    
    response = list_scores()
    assert response == {}
