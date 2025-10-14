import requests
from typing import Optional, Dict, Any, List
import json
import re
from io import BytesIO
from fastapi import HTTPException
from pydantic import SecretStr
from fastapi import HTTPException
from pydantic import SecretStr

class CanvasAPI:
    def __init__(self, api_token: SecretStr, domain: str, course_id: int):
        self.api_token = api_token
        self.domain = domain
        self.course_id = course_id
        self.base_url = f"{domain}/api/v1/courses/{course_id}"

    def upload_file(self, file_data: Dict[str, Any], assignment_id: int, filename: str, overwrite: bool = True) -> Dict[str, Any]:
        """
        Uploads a JSON file to the assignment-specific folder in Canvas.
        
        File structure: development/assignmentID/assignmentId_filename.json
        
        Logic:
        - If overwrite=True: Should be this for all non-audit files, and inter-iteration criteria merging 
        - If overwrite=False: Merges with existing file by appending new iteration (only for audit files)
        
        Args:
            file_data: The JSON data to upload
            assignment_id: The assignment ID for folder organization
            filename: The name of the file (without .json extension)
            overwrite: If True, deletes existing file; if False, merges with existing
        """
        appended_filename = f"{assignment_id}_{filename}.json"
        
        if overwrite:
            # Canvas automatically overwrites, so we just upload the new data
            pass
        else:
            # Merge with existing data
            try:
                existing_data = self.get_file(assignment_id, filename)

                if 'history' in existing_data and 'history' in file_data:   
                    max_iteration = max([entry.get('iteration', 0) for entry in existing_data['history']], default=0)  # Highest (most recent) iteration number
                    
                    for new_entry in file_data['history']:
                        new_entry['iteration'] = max_iteration + 1
                    
                    existing_data['history'].extend(file_data['history'])
                    existing_data['currentStatus'] = file_data.get('currentStatus', existing_data.get('currentStatus'))
                    file_data = existing_data
                            
            except FileNotFoundError as e:
                # File doesn't exist, which is fine - just upload the new data
                pass
        
        json_bytes = json.dumps(file_data, indent=2).encode('utf-8')

        upload_details = self._announce_file_upload(appended_filename, len(json_bytes), assignment_id)
        
        upload_response = self._execute_upload_to_url(
            upload_details['upload_url'],
            upload_details['upload_params'],
            appended_filename,
            json_bytes
        )
        
        return self._confirm_upload(upload_response)
    def upload_pdf_file(self, assignment_id: int, criterion_id: str, user_id: int, pdf_bytes: bytes) -> Dict[str, Any]:
        """Uploads a highlighted PDF file to a specific folder for the assignment in Canvas."""
        filename = f"{assignment_id}_{criterion_id}_{user_id}_highlighted.pdf"
        content_type = 'application/pdf'

        upload_details = self._announce_file_upload(filename=filename, size=len(pdf_bytes), assignment_id=assignment_id, content_type=content_type)
        upload_response = self._execute_upload_to_url(
            upload_details['upload_url'],
            upload_details['upload_params'],
            filename,
            pdf_bytes,
            content_type
        )

        return self._confirm_upload(upload_response)

    def download_canvas_file_bytes(self, file_id: int) -> bytes:
        """Downloads a file from Canvas and returns the bytes."""
        meta = self.get_file_metadata(file_id)
        download_url = meta.get("url")
        if not download_url:
            raise RuntimeError(f"Download URL not found in metadata for file_id {file_id}")
        response = requests.get(download_url)
        response.raise_for_status()
        return response.content

    def get_highlighted_pdf_file_id(self, assignment_id: int, criterion_id: str, user_id: int) -> Optional[int]:
        """Find the file ID for a highlighted PDF by searching Canvas files."""
        search_term = f"{assignment_id}_{criterion_id}_{user_id}_highlighted.pdf"
        search_results = self._request('get', f"/files?search_term={search_term}")
        
        if search_results:
            return search_results[0].get('id')
        return None

    def upload_root(self, file_data: Dict[str, Any], filename: str) -> Dict[str, Any]:
        """
        Uploads a JSON file to the development root folder in Canvas.
        
        File structure: development/filename.json (course-wide files)
        
        Args:
            file_data: The JSON data to upload
            filename: The name of the file (without .json extension)
        """
        appended_filename = f"{filename}.json"
        
        json_bytes = json.dumps(file_data, indent=2).encode('utf-8')

        # Upload to development folder
        development_folder = self.get_or_create_folder('development')
        
        payload = {
            'name': appended_filename,
            'size': len(json_bytes),
            'content_type': 'application/json',
            'parent_folder_id': development_folder['id'],
            'published': False
        }
        
        result = self._request('post', '/files', data=payload)
        
        upload_response = self._execute_upload_to_url(
            result['upload_url'],
            result['upload_params'],
            appended_filename,
            json_bytes
        )
        
        return self._confirm_upload(upload_response)

    def _search_file(self, search_term: str, folder_id: Optional[int] = None, per_page: int = 1) -> List[Dict[str, Any]]:
        """
        Generic file search method that can be reused across the codebase.
        
        Args:
            search_term: The search term to look for
            folder_id: Optional folder ID to limit search to specific folder
            per_page: Number of results to return (default 1 for single file searches)
            
        Returns:
            List of file metadata dictionaries
        """
        endpoint = f"/files?search_term={search_term}&per_page={per_page}"
        if folder_id:
            endpoint += f"&folder_id={folder_id}"
        
        return self._request('get', endpoint)

    def get_file(self, assignment_id: int, filename: str, return_id: bool = False) -> Dict[str, Any]:
        """
        Retrieves a JSON file from the assignment-specific folder.
        
        Args:
            assignment_id: The assignment ID
            filename: The name of the file (without .json extension)
            return_id: If True, returns dict with 'data' and 'file_id', otherwise returns just the data
            
        Returns:
            If return_id=True: {"data": file_data, "file_id": file_id}
            If return_id=False: just file_data - Is default arg, so existing calls still work.
        """

        appendedFilename = f"{assignment_id}_{filename}.json"
        
        search_results = self._search_file(appendedFilename)

        if not search_results:
            raise FileNotFoundError(f"File {appendedFilename} for assignment {assignment_id} and {filename} not found.")

        # Since we have unique filenames, just take the first result
        target_file = search_results[0]
        file_id = target_file.get('id')
        
        # Fallback to download URL if content not available
        download_url = target_file.get("url")
        if not download_url:
            raise HTTPException(status_code=500, detail="File found but download URL is missing.")

        response = requests.get(download_url)
        response.raise_for_status()
        file_data = response.json()
        
        if return_id:
            return {"data": file_data, "file_id": file_id}
        else:
            return file_data

    def get_root_file(self, filename: str, return_id: bool = False) -> Dict[str, Any]:
        """
        Retrieves a JSON file from the development root folder.
        
        Args:
            filename: The name of the file (without .json extension)
            return_id: If True, returns dict with 'data' and 'file_id', otherwise returns just the data
            
        Returns:
            If return_id=True: {"data": file_data, "file_id": file_id}
            If return_id=False: file_data (backward compatible)
        """
        appended_filename = f"{filename}.json"
        
        search_results = self._search_file(appended_filename)

        if not search_results:
            raise HTTPException(status_code=404, detail=f"Root file {appended_filename} not found.")

        # Since there's only one threshold file per course, just use the first matching file
        if len(search_results) == 1 and appended_filename in search_results[0].get('display_name', ''):
            target_file = search_results[0]
        else:
            raise HTTPException(status_code=404, detail=f"Root file {appended_filename} not found.")

        file_id = target_file.get('id')
        
        # Fallback to download URL if content not available
        download_url = target_file.get("url")
        if not download_url:
            raise HTTPException(status_code=500, detail="Root file found but download URL is missing.")

        response = requests.get(download_url)
        response.raise_for_status()
        file_data = response.json()
        
        if return_id:
            return {"data": file_data, "file_id": file_id}
        else:
            return file_data

    def list_files_in_assignment_folder(self, assignment_id: int, application_type='json') -> List[Dict[str, Any]]:
        """
        Lists all files in the assignment-specific folder using search API.
        Used mainly by approval counter endpoint, since it needs to check all audit files for an assignment
        
        Args:
            assignment_id: The assignment ID
            
        Returns:
            List of file metadata dictionaries
        """

        assignment_folder = self.get_or_create_assignment_folder(assignment_id)
        
        try:
            files = self._global_request('get', f"/folders/{assignment_folder['id']}/files?content_types[]=application/{application_type}&per_page=100")
            return files
        except Exception as e:
            search_results = self._search_file(".json", folder_id=assignment_folder['id'], per_page=100)
            
            return search_results

    def get_or_create_assignment_folder(self, assignment_id: int) -> Dict[str, Any]:
        """
        Creates nested folder structure: development/assignmentID/
        
        Args:
            assignment_id: The assignment ID for the folder name
        """
        
        dev_folder = self.get_or_create_folder('development')  # Ensure development folder exists
        
        assignment_folder_name = str(assignment_id)
        assignment_folder = self.get_folder_by_name_in_parent(assignment_folder_name, dev_folder['id'])         # Check if assignment folder already exists within development
        
        if assignment_folder:
            return assignment_folder
        
        new_folder = self.create_folder_in_parent(assignment_folder_name, dev_folder['id'])   # Else we create one
        return new_folder

    def get_folder_by_name_in_parent(self, folder_name: str, parent_folder_id: int) -> Optional[Dict[str, Any]]:
        """Find a folder by name within a specific parent folder."""
        
        try:
            # First we try subfolders endpoint
            url_path = f"/folders/{parent_folder_id}/folders"
            subfolders = self._request('get', url_path)
            
            for folder in subfolders:
                if folder.get('name') == folder_name:
                    return folder
            
            return None
            
        except requests.exceptions.HTTPError as e:
            if e.response.status_code == 404:
                # Then try getting all folders and filter by parents
                try:
                    all_folders = self._request('get', '/folders')
                    matching_folders = [f for f in all_folders if f.get('parent_folder_id') == parent_folder_id]
                    
                    for folder in matching_folders:
                        if folder.get('name') == folder_name:
                            return folder
                    
                    return None
                    
                except Exception as alt_e:
                    return None
            else:
                raise
        except Exception as e:
            raise

    def create_folder_in_parent(self, folder_name: str, parent_folder_id: int) -> Dict[str, Any]:
        """Create a folder within a specific parent folder."""
        data = {
            'name': folder_name,
            'parent_folder_id': parent_folder_id,
            'locked': True
        }
        return self._request('post', '/folders', data=data)

    def _announce_file_upload(self, filename: str, size: int, assignment_id: int, content_type: str = 'application/json') -> Dict[str, Any]:
        """Phase 1: Announce the file upload to Canvas in the assignment-specific folder."""
        assignment_folder = self.get_or_create_assignment_folder(assignment_id)
        
        payload = {
            'name': filename,
            'size': size,
            'content_type': content_type,
            'parent_folder_id': assignment_folder['id'],
            'published': False
        }
        
        result = self._request('post', '/files', data=payload)
        return result

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
        new_folder = self.create_folder(folder_name)
        return new_folder

    def get_file_metadata(self, file_id: int) -> Dict[str, Any]:
        """Retrieve metadata JSON for a Canvas file."""
        return self._request('get', f"/files/{file_id}")

    def get_grader_name(self, grader_id: str) -> str:
        """Get grader name from Canvas user API using grader ID"""
        grader_name = "Unknown Grader"

        if grader_id != "unknown_grader":
            try:
                grader_data = self._global_request('get', f"/users/{grader_id}")
                grader_name = grader_data.get("name", "Unknown Grader")
            except Exception as grader_error:
                print(f"[DEBUG] Could not get grader name: {grader_error}")
                pass
        
        return grader_name

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

    def _global_request(self, method: str, endpoint: str, **kwargs) -> Any:
        """
        Makes a request to a global Canvas API endpoint (not course-specific).
        Handles URL construction, headers, and error checking.
        """
        url = f"{self.domain}/api/v1{endpoint}"
        headers = kwargs.pop('headers', {})
        headers.update(self._get_headers())
        print(f'DEBUG: REQUEST: {url}')
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
            "Authorization": f"Bearer {self.api_token.get_secret_value()}"
        }
        
    def _execute_upload_to_url(self, upload_url: str, params: Dict[str, Any], filename: str, data: bytes, content_type="application/json") -> requests.Response:
        """Phase 2: Upload the file data to the URL provided by Canvas."""
        files = {'file': (filename, BytesIO(data), content_type)}
        response = requests.post(upload_url, data=params, files=files)
        response.raise_for_status()
        return response

    def _confirm_upload(self, response: requests.Response) -> Dict[str, Any]:
        """Phase 3: Confirm the upload with Canvas."""
        url = f"{self.domain}/api/v1"
        if 'Location' in response.headers:
            print(response.headers)
            print(self.base_url)
            confirm_url = response.headers['Location'].replace(url, '')
            print('confirm url', confirm_url)
            return self._request('get', confirm_url)
        else:
            try:
                return response.json()
            except json.JSONDecodeError:
                return {'status': 'Upload completed but no confirmation URL found.'}
