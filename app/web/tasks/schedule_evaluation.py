from typing import Dict, List, Tuple
from app.autograding.agents.grading_agent import build_evaluation
from app.web.db.models.canvas import Submission
from app.web.db.models.user_settings import CustomSettings
from app.web.utils.logger import logger
from app.celery import celery_app
from app.web.db.models import RequestGradingDto
from app.autograding.grading_handler import generate_feedback
from openai import RateLimitError

@celery_app.task(bind=True, max_retries=3, default_retry_delay=60)
def schedule_evaluation(self, request_data: dict):
    try:
        request = RequestGradingDto.model_validate(request_data)
        feedbacks = generate_feedback(request, self.request.id)
        return feedbacks
    except Exception as e:
        logger.error(f"An error occurred in schedule_evaluation: {e}")
        # Fail immediately on a rate limit error, otherwise retry.
        if isinstance(e, RateLimitError):
            raise
        raise self.retry(exc=e)  # Retry for all other exceptions


@celery_app.task(bind=True, max_retries=3, default_retry_delay=60)
def process_submission(
    self,
    instruction: Dict[str, str],
    submission: Submission,
    llm_name: str,
    custom_settings: CustomSettings,
):
    try:
        _submission = Submission(**submission)
        _custom_settings = CustomSettings(**custom_settings)

        feedback = build_evaluation(
            instruction=instruction,
            submission=_submission,
            llm_name=llm_name,
            custom_settings=_custom_settings,
        )

        return (_submission.user_id, feedback.model_dump())
    except Exception as e:
        logger.error(f"Error processing submission {submission.id}: {e}")
        raise self.retry(exc=e)


@celery_app.task(bind=True, max_retries=3, default_retry_delay=60)
def merge_feedbacks(self, results: List[Tuple[int, Dict]]) -> Dict[int, Dict]:
    try:
        merged_feedback = {}
        for user_id, feedback in results:
            merged_feedback[user_id] = feedback

        return merged_feedback

    except Exception as e:
        logger.error(f"Error merging feedbacks: {e}")
        raise self.retry(exc=e)