import pytest
from pytest_mock import MockerFixture
from app.web.tasks.schedule_evaluation import schedule_evaluation
from pydantic import ValidationError
from celery.exceptions import Retry

@pytest.fixture
def mock_generate_feedback(mocker):
    return mocker.patch('app.web.tasks.schedule_evaluation.generate_feedback')

@pytest.fixture  
def mock_validate(mocker):
    return mocker.patch('app.web.tasks.schedule_evaluation.RequestGradingDto.model_validate')

def test_success(mocker, mock_generate_feedback, mock_validate):    
    """Test successful feedback generation and task result."""
    mock_request = mocker.Mock()
    mock_validate.return_value = mock_request
    expected_feedbacks = {
        388778: {
            'submission_id': 57658105, 
            'score': 8.0, 
            'feedback': 'Good understanding with minor omissions.'
        }, 
        389291: {
            'submission_id': 51344183, 
            'score': 9.0, 
            'feedback': 'Clear definition with accurate distinctions.'
        }
    }
    mock_generate_feedback.return_value = expected_feedbacks
    
    request_data = {"task_id": "123", "criteria": "test"}
    result = schedule_evaluation(request_data)
    
    mock_validate.assert_called_once_with(request_data)
    task_id = schedule_evaluation.request.id
    mock_generate_feedback.assert_called_once_with(mock_request,task_id)
    assert result == expected_feedbacks


def test_failure_retries(mocker, mock_generate_feedback, mock_validate):
    """Test task retries on failure during feedback generation."""
    mock_retry = mocker.patch.object(schedule_evaluation, 'retry')
    
    mock_request = mocker.Mock()
    mock_validate.return_value = mock_request
    
    validation_error = ValueError("Invalid request data")
    mock_generate_feedback.side_effect = validation_error
    mock_retry.side_effect = Retry()
    
    request_data = {"task_id": "123", "criteria": "test"}
    
    with pytest.raises(Retry):
        schedule_evaluation(request_data)
        
    mock_retry.assert_called_once_with(exc=validation_error)