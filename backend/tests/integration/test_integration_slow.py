import pytest
import time
from fastapi.testclient import TestClient
from app.web import app
from app.celery import celery_app


def create_grading_task(client, request_data):
    """Create a grading task and return the task ID."""
    response = client.post("/api/v1/grading/generate", json=request_data)
    assert response.status_code == 200, f"Expected 200, got {response.status_code}"
    
    result = response.json()
    assert "task_id" in result, "Response should contain task_id"
    assert result["task_id"] is not None, "task_id should not be None"
    assert len(result["task_id"]) > 0, "task_id should not be empty"
    
    task_id = result["task_id"]
    print(f"✅ Task created with ID: {task_id}")
    return task_id


def verify_task_status_endpoint(client, task_id):
    """Verify that the task status endpoint works correctly."""
    status_response = client.get(f"/api/v1/grading/status/{task_id}")
    assert status_response.status_code == 200, f"Status endpoint failed with {status_response.status_code}"
    
    status_result = status_response.json()
    assert "task_id" in status_result, "Status response should contain task_id"
    assert "status" in status_result, "Status response should contain status"
    assert status_result["task_id"] == task_id, "Task ID should match"
    
    return status_result


def wait_for_task_completion(client, task_id, max_wait=120):
    """Wait for task completion and return the final status result."""
    start_time = time.time()
    
    for i in range(max_wait):
        response = client.get(f"/api/v1/grading/status/{task_id}")
        assert response.status_code == 200, f"Status check failed on iteration {i}"
        
        status_result = response.json()
        current_status = status_result["status"]
        
        print(f"Iteration {i+1}: Task status = {current_status}")
        
        if current_status == "SUCCESS":
            elapsed_time = time.time() - start_time
            print(f"✅ Task completed successfully in {elapsed_time:.1f}s")
            return status_result
            
        elif current_status == "FAILURE":
            elapsed_time = time.time() - start_time
            error_msg = status_result.get("traceback", "Unknown error")
            print(f"❌ Task failed after {elapsed_time:.1f}s: {error_msg}")
            assert False, f"Task failed: {error_msg}"
            
        elif current_status in ["PENDING", "STARTED", "RETRY"]:
            if i == max_wait - 1:
                elapsed_time = time.time() - start_time
                print(f"Task did not complete within {max_wait}s. Final status: {current_status}")
                assert False, f"Task did not complete within {max_wait}s. Final status: {current_status}"
            time.sleep(2)  # Longer polling interval for real LLM
            
        else:
            print(f"Unexpected status: {current_status}")
            assert False, f"Unexpected task status: {current_status}"


def verify_success_result(status_result):
    """Verify the structure of a successful task result."""
    assert "result" in status_result, "Success response should contain result"
    assert status_result["result"] is not None, "Result should not be None"
    assert "traceback" not in status_result or status_result["traceback"] is None, "Success should not have traceback"
    
    # Additional verification of result structure (if it's a dict)
    if isinstance(status_result["result"], dict):
        print(f"📊 Result keys: {list(status_result['result'].keys())}")


def verify_components_stored(task_id):
    """Verify that components are properly stored in the database."""
    from app.web.api import get_evaluation_components
    components = get_evaluation_components(task_id)
    assert components is not None, "Components should be stored in database"
    assert components.llm is not None, "LLM should be stored in database"
    assert len(components.llm) > 0, "LLM name should not be empty"



def verify_task_persistence(client, task_id):
    """Verify that completed tasks can be retrieved multiple times."""
    for attempt in range(3):
        verify_response = client.get(f"/api/v1/grading/status/{task_id}")
        assert verify_response.status_code == 200, f"Task retrieval failed on attempt {attempt + 1}"
        
        verify_result = verify_response.json()
        assert verify_result["task_id"] == task_id, f"Task ID mismatch on attempt {attempt + 1}"
        assert verify_result["status"] == "SUCCESS", f"Task should remain SUCCESS on attempt {attempt + 1}"
        
        print(f"Task persistence verified (attempt {attempt + 1})")


def verify_error_handling(client):
    """Test error handling with invalid task ID."""
    invalid_response = client.get("/api/v1/grading/status/invalid-task-id-12345")
    assert invalid_response.status_code == 200, "Invalid task ID should return 200 (not 404)"
    
    invalid_result = invalid_response.json()
    assert invalid_result["task_id"] == "invalid-task-id-12345", "Should return the requested task ID"
    assert invalid_result["status"] in ["PENDING", "NOT_FOUND"], "Invalid task should have appropriate status"
    
    print("Error handling for invalid task ID verified")


def verify_score_submission(client, task_id):
    """Verify that scores can be submitted and retrieved for a completed evaluation."""
    # Submit a score for the completed evaluation
    score_response = client.post("/api/v1/scores", json={
        "evaluation_id": task_id,
        "score": 1
    })
    assert score_response.status_code == 200, "Score submission failed"
    assert score_response.json()["message"] == "Score updated"
    print(f"Score submitted successfully for evaluation {task_id}")
    
    # Verify score retrieval
    scores_response = client.get("/api/v1/scores")
    assert scores_response.status_code == 200, "Score retrieval failed"
    scores = scores_response.json()
    assert isinstance(scores, dict), "Scores should be a dictionary"
    print(f"Scores retrieved successfully: {scores}")


def test_real_single_submission(single_submission_request):
    """Test that a grading request creates and completes a Celery task successfully with real LLM."""
    with TestClient(app=app) as client:
        # Create the grading task
        task_id = create_grading_task(client, single_submission_request)
        
        # Verify task status endpoint works
        verify_task_status_endpoint(client, task_id)
        
        # Wait for task completion
        status_result = wait_for_task_completion(client, task_id)
        
        # Verify success result structure
        verify_success_result(status_result)
        
        # Verify components were stored
        verify_components_stored(task_id)
        
        # Verify task persistence
        verify_task_persistence(client, task_id)
        
        # Test error handling
        verify_error_handling(client)
        
        # Test score submission and retrieval
        verify_score_submission(client, task_id)


def test_real_multiple_submissions(multiple_submissions_request):
    """Test that a grading request (with multiple submissions) creates and completes a Celery task successfully with real LLM."""
    with TestClient(app=app) as client:
        # Create the grading task
        task_id = create_grading_task(client, multiple_submissions_request)

        # Verify task status endpoint works
        verify_task_status_endpoint(client, task_id)
        
        # Wait for task completion
        status_result = wait_for_task_completion(client, task_id)

        # Verify success result structure
        verify_success_result(status_result)
        
        # Verify components were stored
        verify_components_stored(task_id)
        
        #  Verify task persistence
        verify_task_persistence(client, task_id)
        
        # Test error handling
        verify_error_handling(client)
        
        
def test_celery_connectivity():
    """Test that Celery is properly configured."""
    assert celery_app.conf.broker_url is not None, "Celery broker URL should be configured"
    assert celery_app.conf.result_backend is not None, "Celery result backend should be configured"
    print("Celery connectivity check passed")