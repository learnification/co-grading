import requests
from typing import Optional, Dict, Any, List
import json
from io import BytesIO
from fastapi import HTTPException
from pydantic import SecretStr
from app.web.utils.logger import logger

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
                logger.debug(f"Could not get grader name: {grader_error}")
        
        return grader_name

    def get_folders(self) -> List[Dict[str, Any]]:
        """Retrieves all folders in the course."""
        return self._request('get', '/folders')

    def get_folder_by_name(self, folder_name: str = 'development') -> Optional[Dict[str, Any]]:
        """

        Returns the last folder in the path hierarchy (the requested folder)
        """
        try:
            folders = self._request('get', f'/folders/by_path/{folder_name}')
            return folders[-1] if folders else None
        except Exception:
            return None

    def create_folder(self, folder_name: str = 'development', parent_folder_name: str = 'course files/') -> Dict[str, Any]:
        """Creates a folder in the course."""
        data = {
            'name': folder_name,
            'parent_folder_path': parent_folder_name, 
            'locked': True
        }
        return self._request('post', '/folders', data=data)

    def get_test_student(self) -> Dict[str, Any]:
        """
        Gets the test student for the current course.
        
        Returns:
            Dictionary containing test student information with 'id' key
        """
        return self._request('get', '/student_view_student')

    def submit_assignment(self, assignment_id: int, file_id: int, user_id: Optional[int] = None) -> Dict[str, Any]:
        """
        Submits an assignment on behalf of the current user (or a specific user if user_id is provided)
        using previously uploaded file ID.
        """
        endpoint = f"/assignments/{assignment_id}/submissions"

        data: Dict[str, Any] = {
            'submission[submission_type]': 'online_upload',
        }

        data[f'submission[file_ids][]'] = int(file_id)

        # Optional submit on behalf of user
        if user_id is not None:
            data['submission[user_id]'] = int(user_id)

        return self._request('post', endpoint, data=data)

    def list_assignments(self, search_term: Optional[str] = None) -> List[Dict[str, Any]]:
        """
        Lists assignments in the current course using Canvas API.
        
        Args:
            search_term: Optional partial title to filter assignments. Only assignments
                        with titles containing this term will be returned.
        
        Returns:
            List of assignment dictionaries
        """
        endpoint = '/assignments?include[]=overrides'
        if search_term:
            endpoint += f'&search_term={search_term}'
        return self._request('get', endpoint)
    
    def get_assignment(self, assignment_id: int) -> Dict[str, Any]:
        """
        Retrieves an assignment by ID, including rubric information.
            
        Returns:
            Dictionary containing the assignment data including rubric
        """
        return self._request('get', f'/assignments/{assignment_id}?include[]=rubric')
    
    def create_assignment(
        self,
        name: str,
        description: str,
        points_possible: float,
        student_ids: List[int],
        submission_types: List[str] = None,
        allowed_extensions: List[str] = None,
        allowed_attempts: int = -1,
        published: bool = True,
        grading_type: str = 'points',
    ) -> Dict[str, Any]:
        """
        Creates an assignment with student-specific overrides.
        
        Args:
            name: Assignment name
            description: Assignment description
            points_possible: Total points for the assignment
            student_ids: List of student IDs to restrict visibility to
            submission_types: List of allowed submission types (default: ['online_upload'])
            allowed_extensions: List of allowed file extensions (default: ['pdf'])
            allowed_attempts: Number of allowed attempts (-1 for unlimited)
            published: Whether to publish the assignment immediately
            grading_type: Type of grading (default: 'points')
            
        Returns:
            Dictionary containing the created assignment data
        """
        if submission_types is None:
            submission_types = ['online_upload']
        if allowed_extensions is None:
            allowed_extensions = ['pdf']
            
        payload = {
            'assignment[name]': name,
            'assignment[description]': description,
            'assignment[points_possible]': points_possible,
            'assignment[grading_type]': grading_type,
            'assignment[submission_types][]': submission_types,
            'assignment[allowed_extensions][]': allowed_extensions,
            'assignment[allowed_attempts]': allowed_attempts,
            'assignment[published]': published,
            'assignment[only_visible_to_overrides]': True,
            'assignment[assignment_overrides][0][student_ids][]': student_ids,
        }
        return self._request('post', '/assignments', data=payload)

    def create_rubric(
        self,
        title: str,
        assignment_id: int,
        criteria: List[Dict[str, Any]],
        free_form_criterion_comments: bool = False,
        use_for_grading: bool = True,
    ) -> Dict[str, Any]:
        """
        Creates a rubric with criteria and associates it to an assignment.
        
        Args:
            title: Rubric title
            assignment_id: ID of the assignment to associate the rubric with
            criteria: List of criterion dictionaries, each containing:
                - description: str
                - points: float
                - long_description: Optional[str]
                - ratings: List[Dict] with 'description' and 'points' keys
            free_form_criterion_comments: Whether to allow free-form comments
            use_for_grading: Whether to use the rubric for grading
            
        Returns:
            Dictionary containing the created rubric and rubric_association data
        """
        payload = {
            'rubric[title]': title,
            'rubric[free_form_criterion_comments]': free_form_criterion_comments,
            'rubric_association[association_id]': assignment_id,
            'rubric_association[association_type]': 'Assignment',
            'rubric_association[use_for_grading]': use_for_grading,
            'rubric_association[purpose]': 'grading',
        }
        
        # Add criteria to payload using Canvas API format
        for idx, criterion in enumerate(criteria):
            base_key = f"rubric[criteria][{idx}]"
            payload[f"{base_key}[description]"] = criterion['description']
            payload[f"{base_key}[points]"] = criterion['points']
            payload[f"{base_key}[criterion_use_range]"] = False
            
            if 'long_description' in criterion and criterion['long_description']:
                payload[f"{base_key}[long_description]"] = criterion['long_description']
            
            # Add ratings if provided
            if 'ratings' in criterion:
                for rating_idx, rating in enumerate(criterion['ratings']):
                    payload[f"{base_key}[ratings][{rating_idx}][description]"] = rating['description']
                    payload[f"{base_key}[ratings][{rating_idx}][points]"] = rating['points']
        
        return self._request('post', '/rubrics', data=payload)

    def upload_submission_file(self, assignment_id: int, user_id: int, filename: str, file_bytes: bytes, content_type: str = 'application/pdf') -> Dict[str, Any]:
        """
        Upload a file to a user's submission context for an assignment (on behalf of the student).
        Returns the confirmed attachment JSON including the new file id.

        Flow: announce → upload to upload_url → confirm
        """
        size = len(file_bytes)
        # Phase 1: Announce upload in submission context
        announce_endpoint = f"/assignments/{assignment_id}/submissions/{user_id}/files"
        payload = {
            'name': filename,
            'size': size,
            'content_type': content_type,
        }
        announce = self._request('post', announce_endpoint, data=payload)

        # Phase 2: Upload bytes to provided upload_url
        upload_resp = self._execute_upload_to_url(
            announce['upload_url'],
            announce['upload_params'],
            filename,
            file_bytes,
            content_type
        )

        # Phase 3: Confirm and return attachment metadata (contains file id)
        confirmed = self._confirm_upload(upload_resp)
        return confirmed

    def grade_submission(
        self,
        assignment_id: int,
        user_id: int,
        posted_grade: Optional[str] = None,
        rubric_assessment: Optional[Dict[str, Dict[str, Any]]] = None
    ) -> Dict[str, Any]:
        """
        Grade a student submission
        
        Args:
            assignment_id: The assignment ID
            user_id: The user ID of the student
            posted_grade: The grade to assign
            rubric_assessment: Dictionary mapping criterion IDs to assessment data
            
        Returns:
            Dictionary containing the updated submission data
        """
        endpoint = f"/assignments/{assignment_id}/submissions/{user_id}"
        
        payload: Dict[str, Any] = {}
        
        if posted_grade:
            payload['submission[posted_grade]'] = posted_grade
        
        if rubric_assessment:
            for criterion_id, assessment in rubric_assessment.items():
                if 'points' in assessment:
                    payload[f'rubric_assessment[{criterion_id}][points]'] = assessment['points']
                if 'rating_id' in assessment:
                    payload[f'rubric_assessment[{criterion_id}][rating_id]'] = assessment['rating_id']
                if 'comments' in assessment:
                    payload[f'rubric_assessment[{criterion_id}][comments]'] = assessment['comments']
        
        return self._request('put', endpoint, data=payload)

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
        if 'Location' in response.headers:
            url = f"{self.domain}/api/v1"
            confirm_url = response.headers['Location'].replace(url, '')
            return self._request('get', confirm_url)
        else:
            try:
                return response.json()
            except json.JSONDecodeError:
                return {'status': 'Upload completed but no confirmation URL found.'}
