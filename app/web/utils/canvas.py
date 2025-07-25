import requests
from typing import Optional, Dict, Any, List
import json
from io import BytesIO
from fastapi import HTTPException
from pydantic import SecretStr

class CanvasAPI:
    def __init__(self, api_token: SecretStr, domain: str, course_id: int):
        self.api_token = api_token
        self.domain = domain
        self.course_id = course_id
        self.base_url = f"https://{domain}/api/v1/courses/{course_id}"


    def upload_rubric(self, rubric_data: Dict[str, Any], assignment_id: int) -> Dict[str, Any]:
        """Uploads a rubric JSON to the designated course folder in Canvas."""
        filename = f"{assignment_id}_rubric_guideline.json"
        json_bytes = json.dumps(rubric_data, indent=2).encode('utf-8')

        upload_details = self._announce_rubric_upload(filename, len(json_bytes))
        
        upload_response = self._execute_upload_to_url(
            upload_details['upload_url'],
            upload_details['upload_params'],
            filename,
            json_bytes
        )
        
        return self._confirm_upload(upload_response)

    def download_canvas_file(self, file_id: int, output_path: str = None) -> str:
        """Downloads a file from Canvas and saves it locally."""
        meta = self.get_file_metadata(file_id)
        download_url = meta.get("url")
        if not download_url:
            raise RuntimeError(f"Download URL not found in metadata for file_id {file_id}")

        if output_path is None:
            output_path = meta.get("filename", f"file_{file_id}")

        with requests.get(download_url, stream=True) as r:
            r.raise_for_status()
            with open(output_path, "wb") as f:
                for chunk in r.iter_content(chunk_size=8192):
                    if chunk:
                        f.write(chunk)
        return output_path

    def get_or_create_folder(self, folder_name: str = 'development') -> Dict[str, Any]:
        """
        Retrieves a folder by name, creating it if it doesn't exist.
        Returns the folder dictionary.
        """
        folder = self.get_folder_by_name(folder_name)
        if folder:
            return folder
        return self.create_folder(folder_name)

    def get_file_metadata(self, file_id: int) -> Dict[str, Any]:
        """Retrieve metadata JSON for a Canvas file."""
        return self._request('get', f"/files/{file_id}")

    def get_folders(self) -> List[Dict[str, Any]]:
        """Retrieves all folders in the course."""
        return self._request('get', '/folders')

    def get_folder_by_name(self, folder_name: str = 'development') -> Optional[Dict[str, Any]]:
        """Finds a folder by its name by iterating through all folders."""
        folders = self.get_folders()
        for folder in folders:
            if folder.get('name') == folder_name:
                return folder
        return None

    def create_folder(self, folder_name: str = 'development', parent_folder_name: str = 'course files/') -> Dict[str, Any]:
        """Creates a folder in the course."""
        data = {
            'name': folder_name,
            'parent_folder_path': parent_folder_name, 
            'locked': True
        }
        return self._request('post', '/folders', data=data)

    def get_rubric(self, assignment_id: int) -> Dict[str, Any]:
        """Retrieves a rubric for a specific assignment using the Canvas search API."""
        search_term = f"{assignment_id}_rubric_guideline.json"
        # Use the search_term parameter to find the file directly
        search_results = self._request('get', f"/files?search_term={search_term}")

        if not search_results:
            raise HTTPException(status_code=404, detail=f"Rubric file for assignment {assignment_id} not found.")

        # Assuming the first result is the correct one
        file_metadata = search_results[0]
        download_url = file_metadata.get("url")

        if not download_url:
            raise HTTPException(status_code=500, detail="Rubric file found but download URL is missing.")

        response = requests.get(download_url)
        response.raise_for_status()
        return response.json()

    # --- Private Helper Methods ---

    def _request(self, method: str, endpoint: str, **kwargs) -> Any:
        """
        Makes a request to a Canvas API endpoint.
        Handles URL construction, headers, and error checking.
        Ensures the Authorization header cannot be overwritten.
        """
        url = self.base_url + endpoint
        headers = kwargs.pop('headers', {})
        headers.update(self._get_headers())

        response = requests.request(method, url, headers=headers, **kwargs)
        response.raise_for_status()

        if response.status_code == 204: 
            return response
        
        try:
            return response.json()
        except json.JSONDecodeError:
            return response.text

    def _get_headers(self) -> Dict[str, str]:
        """Returns the default authorization headers."""
        return {
<<<<<<< HEAD
            "Authorization": f"Bearer {self.api_token.get_secret_value()}"
=======
            "Authorization": f"Bearer {self.api_token}"
>>>>>>> 0164ed9 (temp commit)
        }

    def _announce_rubric_upload(self, filename: str, size: int) -> Dict[str, Any]:
        """Phase 1: Announce the file upload to Canvas."""
        folder = self.get_or_create_folder('development')
        
        payload = {
            'name': filename,
            'size': size,
            'content_type': 'application/json',
            'parent_folder_id': folder['id'],
            'published': False
        }
        
        return self._request('post', '/files', data=payload)

    def _execute_upload_to_url(self, upload_url: str, params: Dict[str, Any], filename: str, data: bytes) -> requests.Response:
        """Phase 2: Upload the file data to the URL provided by Canvas."""
        files = {'file': (filename, BytesIO(data), 'application/json')}
        response = requests.post(upload_url, data=params, files=files)
        response.raise_for_status()
        return response

    def _confirm_upload(self, response: requests.Response) -> Dict[str, Any]:
        """Phase 3: Confirm the upload with Canvas."""
        if 'Location' in response.headers:
            confirm_url = response.headers['Location'].replace(self.base_url, '')
            return self._request('get', confirm_url)
        else:
            try:
                return response.json()
            except json.JSONDecodeError:
                return {'status': 'Upload completed but no confirmation URL found.'}
