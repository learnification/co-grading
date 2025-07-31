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
        self.base_url = f"https://{domain}/api/v1/courses/{course_id}"


    # --- COMMENTED OUT - ORIGINAL RUBRIC FUNCTIONS (FALLBACK) ---
    # def upload_rubric(self, rubric_data: Dict[str, Any], assignment_id: int) -> Dict[str, Any]:
    #     """Uploads a rubric JSON to the designated course folder in Canvas."""
    #     filename = f"{assignment_id}_rubric_guideline.json"
    #     json_bytes = json.dumps(rubric_data, indent=2).encode('utf-8')

    #     upload_details = self._announce_rubric_upload(filename, len(json_bytes))
        
    #     upload_response = self._execute_upload_to_url(
    #         upload_details['upload_url'],
    #         upload_details['upload_params'],
    #         filename,
    #         json_bytes
    #     )
        
    #     return self._confirm_upload(upload_response)

    # def get_rubric(self, assignment_id: int) -> Dict[str, Any]:
    #     """Retrieves a rubric for a specific assignment using the Canvas search API."""
    #     search_term = f"{assignment_id}_rubric_guideline.json"
    #     # Use the search_term parameter to find the file directly
    #     search_results = self._request('get', f"/files?search_term={search_term}")

    #     if not search_results:
    #         raise HTTPException(status_code=404, detail=f"Rubric file for assignment {assignment_id} not found.")

    #     # Assuming the first result is the correct one
    #     file_metadata = search_results[0]
    #     download_url = file_metadata.get("url")

    #     if not download_url:
    #         raise HTTPException(status_code=500, detail="Rubric file found but download URL is missing.")

    #     response = requests.get(download_url)
    #     response.raise_for_status()
    #     return response.json()

    # def _announce_rubric_upload(self, filename: str, size: int) -> Dict[str, Any]:
    #     """Phase 1: Announce the file upload to Canvas."""
    #     folder = self.get_or_create_folder('development')
        
    #     payload = {
    #         'name': filename,
    #         'size': size,
    #         'content_type': 'application/json',
    #         'parent_folder_id': folder['id'],
    #         'published': False
    #     }
        
    #     return self._request('post', '/files', data=payload)

    # --- NEW GENERIC FILE MANAGEMENT FUNCTIONS ---
    
    def upload_file(self, file_data: Dict[str, Any], assignment_id: int, filename: str, overwrite: bool = True) -> Dict[str, Any]:
        """
        Uploads a JSON file to the assignment-specific folder in Canvas.
        
        File structure: development/assignmentID/filename.json
        
        Logic:
        - If overwrite=True: Deletes existing file before uploading new data (used for same grading session)
        - If overwrite=False: Merges with existing file by appending new iteration (used for different grading sessions)
        
        Args:
            file_data: The JSON data to upload
            assignment_id: The assignment ID for folder organization
            filename: The name of the file (without .json extension)
            overwrite: If True, deletes existing file; if False, merges with existing
        """
        # Handle different upload strategies based on overwrite flag
        if overwrite:
            # OVERWRITE: Delete existing file first, then upload new data
            try:
                existing_file = self.get_file(assignment_id, filename)
                # If we can read the file, we need to find and delete it
                search_term = f"{filename}.json"
                search_results = self._request('get', f"/files?search_term={search_term}")
                
                for file_meta in search_results:
                    # Check if this is the file in our assignment folder
                    if f"/{assignment_id}/" in file_meta.get('folder_path', '') or f"{assignment_id}_" in file_meta.get('display_name', ''):
                        file_id = file_meta.get('id')
                        if file_id:
                            self._request('delete', f"/files/{file_id}")
                            break
                            
            except Exception as delete_error:
                pass  # Silently handle delete errors
        else:
            # APPEND: Merge with existing data automatically (for new iterations)
            try:
                existing_data = self.get_file(assignment_id, filename)
                # Append new iteration to existing history
                if 'history' in existing_data and 'history' in file_data:
                    # Get the highest iteration number from existing data
                    max_iteration = max([entry.get('iteration', 0) for entry in existing_data['history']], default=0)
                    
                    # Set iteration number for new entry
                    for new_entry in file_data['history']:
                        new_entry['iteration'] = max_iteration + 1
                    
                    # Append to existing history
                    existing_data['history'].extend(file_data['history'])
                    existing_data['currentStatus'] = file_data.get('currentStatus', existing_data.get('currentStatus'))
                    file_data = existing_data
                    
                    # After appending, we still need to delete the old file to avoid duplicates
                    search_term = f"{filename}.json"
                    search_results = self._request('get', f"/files?search_term={search_term}")
                    
                    for file_meta in search_results:
                        if f"/{assignment_id}/" in file_meta.get('folder_path', '') or f"{assignment_id}_" in file_meta.get('display_name', ''):
                            file_id = file_meta.get('id')
                            if file_id:
                                self._request('delete', f"/files/{file_id}")
                                break
                                
            except HTTPException as e:
                # File doesn't exist, proceed with new file creation
                pass
        
        filename_with_ext = f"{filename}.json"
        json_bytes = json.dumps(file_data, indent=2).encode('utf-8')

        upload_details = self._announce_file_upload(filename_with_ext, len(json_bytes), assignment_id)
        
        upload_response = self._execute_upload_to_url(
            upload_details['upload_url'],
            upload_details['upload_params'],
            filename_with_ext,
            json_bytes
        )
        
        return self._confirm_upload(upload_response)

    def get_file(self, assignment_id: int, filename: str) -> Dict[str, Any]:
        """
        Retrieves a JSON file from the assignment-specific folder.
        
        Args:
            assignment_id: The assignment ID
            filename: The name of the file (without .json extension)
        """
        search_term = f"{filename}.json"
        # Search within the assignment folder structure
        search_results = self._request('get', f"/files?search_term={search_term}")

        if not search_results:
            raise HTTPException(status_code=404, detail=f"File {filename}.json for assignment {assignment_id} not found.")

        # Filter results to find the one in the correct assignment folder
        target_file = None
        for file_meta in search_results:
            # Check if file is in the correct assignment folder path
            if f"/{assignment_id}/" in file_meta.get('folder_path', '') or f"{assignment_id}_" in file_meta.get('display_name', ''):
                target_file = file_meta
                break
        
        if not target_file:
            # Fallback to first result if folder path matching fails
            target_file = search_results[0]

        download_url = target_file.get("url")
        if not download_url:
            raise HTTPException(status_code=500, detail="File found but download URL is missing.")

        response = requests.get(download_url)
        response.raise_for_status()
        return response.json()

    def list_files_in_assignment_folder(self, assignment_id: int) -> List[Dict[str, Any]]:
        """
        Lists all files in the assignment-specific folder using search API.
        
        Args:
            assignment_id: The assignment ID
            
        Returns:
            List of file metadata dictionaries
        """
        # Get the assignment folder first
        assignment_folder = self.get_or_create_assignment_folder(assignment_id)
        
        # Try to list files directly from the assignment folder
        try:
            files = self._request('get', f"/folders/{assignment_folder['id']}/files")
            print(f"[DEBUG] Direct folder listing returned {len(files)} files\n\n")
            return files
        except Exception as e:
            print(f"[DEBUG] Direct folder listing failed: {e}\n\n")
            
            # Fallback: Use search API with folder-specific search
            # Search for files in the specific assignment folder using folder_id
            search_results = self._request('get', f"/files?search_term=.json&folder_id={assignment_folder['id']}")
            
            # FALLBACK CODE (COMMENTED OUT) - works but checks each JSON file one by one and checks its folder, would be bad to scale up when we have a bunch of assignments and 100+ students (files) in each
            # # Fallback: Use search API and filter by folder_id
            # search_results = self._request('get', f"/files?search_term=.json")
            # 
            # # Filter results to find files in the correct assignment folder
            # assignment_files = []
            # for file_meta in search_results:
            #     folder_id = file_meta.get('folder_id')
            #     filename = file_meta.get('display_name', '')
            #     
            #     # Check if folder that file is in, is the same folder of the assignment we want
            #     if folder_id == assignment_folder['id']:
            #         assignment_files.append(file_meta)
            # 
            # return assignment_files
            
            return search_results

    def get_or_create_assignment_folder(self, assignment_id: int) -> Dict[str, Any]:
        """
        Creates nested folder structure: development/assignmentID/
        
        Args:
            assignment_id: The assignment ID for the folder name
        """
        
        # First ensure development folder exists
        dev_folder = self.get_or_create_folder('development')
        
        # Check if assignment folder already exists within development
        assignment_folder_name = str(assignment_id)
        assignment_folder = self.get_folder_by_name_in_parent(assignment_folder_name, dev_folder['id'])
        
        if assignment_folder:
            return assignment_folder
        
        # Create assignment folder within development folder
        new_folder = self.create_folder_in_parent(assignment_folder_name, dev_folder['id'])
        return new_folder

    def get_folder_by_name_in_parent(self, folder_name: str, parent_folder_id: int) -> Optional[Dict[str, Any]]:
        """Find a folder by name within a specific parent folder."""
        
        # Try getting subfolders using different approaches
        try:
            # Approach 1: Try the subfolders endpoint
            url_path = f"/folders/{parent_folder_id}/folders"
            subfolders = self._request('get', url_path)
            
            for folder in subfolders:
                if folder.get('name') == folder_name:
                    return folder
            
            return None
            
        except requests.exceptions.HTTPError as e:
            if e.response.status_code == 404:
                # Approach 2: Try getting all folders and filter by parent
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
                # Other HTTP errors should still be raised
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

    def _announce_file_upload(self, filename: str, size: int, assignment_id: int) -> Dict[str, Any]:
        """Phase 1: Announce the file upload to Canvas in the assignment-specific folder."""
        assignment_folder = self.get_or_create_assignment_folder(assignment_id)
        
        payload = {
            'name': filename,
            'size': size,
            'content_type': 'application/json',
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

    def _get_headers(self) -> Dict[str, str]:
        """Returns the default authorization headers."""
        return {
            "Authorization": f"Bearer {self.api_token.get_secret_value()}"
        }
        
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
