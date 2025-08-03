import requests
from typing import Optional, Dict, Any, List
import json
import re
from io import BytesIO
from fastapi import HTTPException
from pydantic import SecretStr
from fastapi import HTTPException
from pydantic import SecretStr

# Global cache for file metadata (5 minute TTL)
_file_cache = {}
_cache_ttl = 300  # 5 minutes
_cache_timestamps = {}

class CanvasAPI:
    def __init__(self, api_token: SecretStr, domain: str, course_id: int):
        self.api_token = api_token
        self.domain = domain
        self.course_id = course_id
        self.base_url = f"https://{domain}/api/v1/courses/{course_id}"

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
        print(f"[DEBUG] Uploading file: {appended_filename}")
        
        
        if overwrite: 
            try:
                print(f"[DEBUG] Overwrite mode - checking for existing file")

                search_term = appended_filename
                search_results = self._request('get', f"/files?search_term={search_term}")
                print(f"[DEBUG] Found {len(search_results)} files to potentially delete")
                
                for file_meta in search_results:
                    if f"/{assignment_id}/" in file_meta.get('folder_path', '') or appended_filename in file_meta.get('display_name', ''):
                        file_id = file_meta.get('id')
                        if file_id:
                            print(f"[DEBUG] Deleting file ID: {file_id}")
                            self._global_request('delete', f"/files/{file_id}")  # Need to use global req for files endpoint ~ bizarre, but how it works for files and folders
                            print(f"[DEBUG] File deleted successfully")
                            break
                            
            except Exception as delete_error:
                print(f"[DEBUG] Delete error (continuing): {delete_error}")
                pass 
        else:                  # Append logic, only for audit files
            try:
                existing_data = self.get_file(assignment_id, filename)

                if 'history' in existing_data and 'history' in file_data:   
                    max_iteration = max([entry.get('iteration', 0) for entry in existing_data['history']], default=0)  # Highest (most recent) iteration number
                    
                    for new_entry in file_data['history']:
                        new_entry['iteration'] = max_iteration + 1
                    
                    existing_data['history'].extend(file_data['history'])
                    existing_data['currentStatus'] = file_data.get('currentStatus', existing_data.get('currentStatus'))
                    file_data = existing_data
                    
                    # After appending, we still need to delete the old file to avoid duplicates, since Canvas allows for them
                    search_term = appended_filename
                    search_results = self._request('get', f"/files?search_term={search_term}")
                    
                    for file_meta in search_results:
                        if f"/{assignment_id}/" in file_meta.get('folder_path', '') or appended_filename in file_meta.get('display_name', ''):
                            file_id = file_meta.get('id')
                            if file_id:
                                print(f"[DEBUG] Deleting old file ID: {file_id} after append")
                                self._global_request('delete', f"/files/{file_id}")
                                print(f"[DEBUG] Old file deleted successfully")
                                break
                else:
                    print(f"[DEBUG] Non-audit file")
                                
            except HTTPException as e:
                pass
        
        json_bytes = json.dumps(file_data, indent=2).encode('utf-8')

        upload_details = self._announce_file_upload(appended_filename, len(json_bytes), assignment_id)
        
        upload_response = self._execute_upload_to_url(
            upload_details['upload_url'],
            upload_details['upload_params'],
            appended_filename,
            json_bytes
        )
        
        # Invalidate cache for this file
        cache_key = f"{assignment_id}_{filename}"
        if cache_key in _file_cache:
            del _file_cache[cache_key]
            if cache_key in _cache_timestamps:
                del _cache_timestamps[cache_key]
            print(f"[DEBUG] Invalidated cache for: {cache_key}")
        
        return self._confirm_upload(upload_response)

    def upload_root(self, file_data: Dict[str, Any], filename: str, overwrite: bool = True) -> Dict[str, Any]:
        """
        Uploads a JSON file to the development root folder in Canvas.
        
        File structure: development/filename.json (course-wide files)
        
        Args:
            file_data: The JSON data to upload
            filename: The name of the file (without .json extension)
            overwrite: If True, deletes existing file; if False, creates new file
        """
        appended_filename = f"{filename}.json"
        print(f"[DEBUG] Uploading root file: {appended_filename}")
        
        # Handle overwrite logic
        if overwrite:
            try:
                print(f"[DEBUG] Overwrite mode - checking for existing root file")
                search_term = appended_filename
                search_results = self._request('get', f"/files?search_term={search_term}")
                print(f"[DEBUG] Found {len(search_results)} files to potentially delete")
                
                for file_meta in search_results:
                    # Check if file is in the development folder
                    if "/development/" in file_meta.get('folder_path', '') and appended_filename in file_meta.get('display_name', ''):
                        file_id = file_meta.get('id')
                        if file_id:
                            print(f"[DEBUG] Deleting root file ID: {file_id}")
                            self._global_request('delete', f"/files/{file_id}")
                            print(f"[DEBUG] Root file deleted successfully")
                            break
                            
            except Exception as delete_error:
                print(f"[DEBUG] Delete error (continuing): {delete_error}")
                pass
        
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
        
        # Invalidate cache for this file
        cache_key = f"root_{filename}"
        if cache_key in _file_cache:
            del _file_cache[cache_key]
            if cache_key in _cache_timestamps:
                del _cache_timestamps[cache_key]
            print(f"[DEBUG] Invalidated cache for: {cache_key}")
        
        return self._confirm_upload(upload_response)

    def _get_cached_file(self, cache_key: str) -> Optional[Dict[str, Any]]:
        """Get file from cache if not expired."""
        import time
        current_time = time.time()
        
        if cache_key in _file_cache:
            if current_time - _cache_timestamps.get(cache_key, 0) < _cache_ttl:
                print(f"[DEBUG] Cache hit for: {cache_key}")
                return _file_cache[cache_key]
            else:
                # Cache expired, remove it
                del _file_cache[cache_key]
                if cache_key in _cache_timestamps:
                    del _cache_timestamps[cache_key]
        
        return None

    def _cache_file(self, cache_key: str, file_data: Dict[str, Any]) -> None:
        """Cache file data with timestamp."""
        import time
        _file_cache[cache_key] = file_data
        _cache_timestamps[cache_key] = time.time()
        print(f"[DEBUG] Cached file: {cache_key}")

    def clear_cache(self) -> None:
        """Clear all cached files."""
        global _file_cache, _cache_timestamps
        _file_cache.clear()
        _cache_timestamps.clear()
        print(f"[DEBUG] Cache cleared")

    def get_file(self, assignment_id: int, filename: str) -> Dict[str, Any]:
        """
        Retrieves a JSON file from the assignment-specific folder.
        
        Args:
            assignment_id: The assignment ID
            filename: The name of the file (without .json extension)
        """
        cache_key = f"{assignment_id}_{filename}"
        
        # Check cache first
        cached_data = self._get_cached_file(cache_key)
        if cached_data:
            return cached_data
        
        appendedFilename = f"{assignment_id}_{filename}.json"
        search_term = appendedFilename
        print(f"[DEBUG] Searching for file: {search_term}")
        
        search_results = self._request('get', f"/files?search_term={search_term}")
        print(f"[DEBUG] Search returned {len(search_results)} results")

        if not search_results:
            raise HTTPException(status_code=404, detail=f"File {appendedFilename} for assignment {assignment_id} and {filename} not found.")

        # Since we have unique filenames, just take the first result
        target_file = search_results[0]
        print(f"[DEBUG] Using file: {target_file.get('display_name', 'unknown')} (ID: {target_file.get('id', 'unknown')})")

        download_url = target_file.get("url")
        if not download_url:
            raise HTTPException(status_code=500, detail="File found but download URL is missing.")

        print(f"[DEBUG] Downloading from: {download_url}")
        response = requests.get(download_url)
        response.raise_for_status()
        file_data = response.json()
        
        # Cache the result
        self._cache_file(cache_key, file_data)
        
        return file_data

    def get_root_file(self, filename: str) -> Dict[str, Any]:
        """
        Retrieves a JSON file from the development root folder.
        
        Args:
            filename: The name of the file (without .json extension)
        """
        cache_key = f"root_{filename}"
        
        # Check cache first
        cached_data = self._get_cached_file(cache_key)
        if cached_data:
            return cached_data
        
        appended_filename = f"{filename}.json"
        search_term = appended_filename
        print(f"[DEBUG] Searching for root file: {search_term}")
        
        search_results = self._request('get', f"/files?search_term={search_term}")
        print(f"[DEBUG] Search returned {len(search_results)} results")

        if not search_results:
            raise HTTPException(status_code=404, detail=f"Root file {appended_filename} not found.")

        # Since there's only one threshold file per course, just use the first matching file
        if len(search_results) == 1 and appended_filename in search_results[0].get('display_name', ''):
            target_file = search_results[0]
            print(f"[DEBUG] Found exactly one matching file: {target_file.get('display_name', 'unknown')}")
        else:
            print(f"[DEBUG] No matching file found. Available files:")
            for file_meta in search_results:
                print(f"[DEBUG] - {file_meta.get('display_name', 'unknown')}")
            raise HTTPException(status_code=404, detail=f"Root file {appended_filename} not found.")

        print(f"[DEBUG] Using root file: {target_file.get('display_name', 'unknown')} (ID: {target_file.get('id', 'unknown')})")

        download_url = target_file.get("url")
        if not download_url:
            raise HTTPException(status_code=500, detail="Root file found but download URL is missing.")

        print(f"[DEBUG] Downloading from: {download_url}")
        response = requests.get(download_url)
        response.raise_for_status()
        file_data = response.json()
        
        # Cache the result
        self._cache_file(cache_key, file_data)
        
        return file_data

    def list_files_in_assignment_folder(self, assignment_id: int) -> List[Dict[str, Any]]:
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
            files = self._global_request('get', f"/folders/{assignment_folder['id']}/files")
            print(f"[DEBUG] Direct folder listing returned {len(files)} files\n\n")
            return files
        except Exception as e:
            print(f"[DEBUG] Direct folder listing failed: {e}\n\n")
            search_results = self._request('get', f"/files?search_term=.json&folder_id={assignment_folder['id']}")
            
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
                    print(f"[DEBUG] way 1 works")
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

    def _global_request(self, method: str, endpoint: str, **kwargs) -> Any:
        """
        Makes a request to a global Canvas API endpoint (not course-specific).
        Handles URL construction, headers, and error checking.
        """
        url = f"https://canvas.sfu.ca/api/v1{endpoint}"
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
