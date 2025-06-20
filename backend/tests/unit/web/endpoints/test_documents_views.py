import pytest
from app.web import app
from fastapi.testclient import TestClient
import uuid

client = TestClient(app=app)

@pytest.mark.parametrize("content_type", [
    "image/jpeg",
    "text/plain", 
    "application/json",
    "application/msword",
    "video/mp4"
])
def test_various_invalid_content_types(content_type):
    """Test that various non-PDF content types are rejected."""
    response = client.post(
        '/api/v1/documents/upload',
        files={'file': ('test_file', b'fake content', content_type)}
    )
    
    assert response.status_code == 400
    assert response.json()['detail'] == 'File must be a PDF'

def test_upload_success(mocker):
    """Test successful PDF upload via endpoint."""
    # Mock the dependencies
    mock_uuid = mocker.patch('uuid.uuid4')
    mock_makedirs = mocker.patch('os.makedirs')
    mock_open = mocker.patch('builtins.open', mocker.mock_open())
    
    expected_uuid = uuid.UUID('12345678-1234-5678-9abc-123456789abc')
    mock_uuid.return_value = expected_uuid
    
    # Create test PDF file
    pdf_content = b"%PDF-1.4 fake pdf content"
    
    response = client.post(
        '/api/v1/documents/upload',
        files={'file': ('test.pdf', pdf_content, 'application/pdf')}
    )
    
    assert response.status_code == 200
    assert response.json() == {'pdf_id': str(expected_uuid)}
    
    mock_makedirs.assert_called_once_with('downloads/resources', exist_ok=True)
    mock_open.assert_called_once_with(f'downloads/resources/{expected_uuid}.pdf', 'wb')
    mock_open().write.assert_called_once_with(pdf_content)

def test_upload_missing_file():
    response = client.post('/api/v1/documents/upload', files={})
    assert response.status_code == 422
