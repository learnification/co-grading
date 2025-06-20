import pytest
import os

class TestSimpleIntegration:
    """Simple integration tests using existing app infrastructure."""
    
    def test_grading_request_creates_task(self, test_client, mock_ai_services, realistic_grading_request):
        """Test that a grading request creates a Celery task."""
        
        # Submit grading request
        response = test_client.post("/api/v1/grading/generate", json=realistic_grading_request)
        
        # Verify response
        assert response.status_code == 200
        result = response.json()
        assert "task_id" in result
        assert result["task_id"] is not None
        
        # Check task status
        task_id = result["task_id"]
        status_response = test_client.get(f"/api/v1/grading/status/{task_id}")
        assert status_response.status_code == 200
        
        status_data = status_response.json()
        assert status_data["task_id"] == task_id
        assert status_data["status"] in ["PENDING", "STARTED", "SUCCESS", "FAILURE"]