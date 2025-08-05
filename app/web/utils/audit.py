from datetime import datetime, timezone, timedelta
from typing import Dict, Any, Optional, Tuple


def get_grader_name(canvas_api, grader_id: str) -> str:
    """
    Get grader name from Canvas user API using grader ID.
    
    Args:
        canvas_api: CanvasAPI instance
        grader_id: The grader ID to look up
        
    Returns:
        str: Grader name or "Unknown Grader" as fallback
    """
    grader_name = "Unknown Grader"  # fallback

    if grader_id != "unknown_grader":
        try:
            grader_data = canvas_api._global_request('get', f"/users/{grader_id}")
            grader_name = grader_data.get("name", "Unknown Grader")
        except Exception as grader_error:
            print(f"[DEBUG] Could not get grader name: {grader_error}")
            pass
    
    return grader_name


def should_append_to_latest(existing_audit_data: Dict[str, Any], grader_id: str, vancouver_time: datetime) -> bool:
    """
    Check if we should append to the latest iteration based on grader and timing.
    
    Args:
        existing_audit_data: Existing audit data from Canvas
        grader_id: Current grader ID
        vancouver_time: Current Vancouver timestamp
        
    Returns:
        bool: True if should append to latest iteration, False otherwise
    """
    should_append_to_latest = False
    
    if existing_audit_data.get("history"):
        latest_iteration = max(existing_audit_data["history"], key=lambda x: x.get("iteration", 0))
        latest_grader_id = latest_iteration.get("graderId")
        latest_timestamp = latest_iteration.get("timestamp")
        
        if latest_grader_id == str(grader_id) and latest_timestamp:
            try:
                latest_time = datetime.fromisoformat(latest_timestamp)
                time_diff = (vancouver_time - latest_time).total_seconds()
                
                if time_diff <= 15:  # Within 15 seconds
                    should_append_to_latest = True
            except Exception as time_error:
                print(f"[DEBUG] Could not parse timestamps: {time_error}\n\n")
    
    return should_append_to_latest


def determine_audit_data_and_overwrite(
    existing_audit_data: Optional[Dict[str, Any]],
    should_append_to_latest: bool,
    audit_criterion: Dict[str, Any],
    audit_entry: Dict[str, Any],
    ai_feedback_data: Any
) -> Tuple[Dict[str, Any], bool]:
    """
    Determine the audit data structure and whether to overwrite based on append logic.
    
    Args:
        existing_audit_data: Existing audit data from Canvas (can be None)
        should_append_to_latest: Whether to append to latest iteration
        audit_criterion: Current criterion data
        audit_entry: Current audit entry
        ai_feedback_data: AI feedback data
        
    Returns:
        Tuple[Dict[str, Any], bool]: (user_audit_data, should_overwrite)
    """
    if should_append_to_latest and existing_audit_data:
        # Append to existing iteration
        latest_iteration = max(existing_audit_data["history"], key=lambda x: x.get("iteration", 0))
        latest_iteration["criteria"].append(audit_criterion)
        
        criteria_statuses = [c["status"] for c in latest_iteration["criteria"]]
        if "FAILURE" in criteria_statuses:
            latest_iteration["overallStatus"] = "FAILURE"
            existing_audit_data["currentStatus"] = "FAILURE"
        else:
            latest_iteration["overallStatus"] = "SUCCESS"
            existing_audit_data["currentStatus"] = "SUCCESS"
        
        user_audit_data = existing_audit_data
        should_overwrite = True  # We manually merged to add new criterion, so overwrite entire file
    else:
        # Let Canvas upload_file handle the iteration numbering and appending
        user_audit_data = {
            "currentStatus": ai_feedback_data.status,
            "history": [audit_entry]  # Single new iteration
        }
        should_overwrite = False  # Let Canvas handle appending new iteration
    
    return user_audit_data, should_overwrite
