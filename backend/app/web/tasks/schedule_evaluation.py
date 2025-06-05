from typing import Dict, List, Tuple
from app.autograding.agents.grading_agent import build_evaluation
from app.autograding.evaluation import generate_guideline
from app.autograding.models import GradingArgs
from app.web.db.models.canvas import Submission
from app.web.db.models.user_settings import CustomSettings
from app.web.utils.logger import logger
from app.celery import celery_app
from app.web.db.models import RequestGradingDto
from app.web.api import add_document_to_component, get_evaluation_components


@celery_app.task(bind=True, max_retries=3, default_retry_delay=60)
def schedule_evaluation(self, request_data: dict):
    try:
        request = RequestGradingDto.model_validate(request_data)
        grading_args = GradingArgs(
            task_id=self.request.id,
            assignment={
                "name": request.assignment.name,
                "description": request.assignment.description,
                "max_points": request.assignment.points_possible,
                # "rubric": request.assignment.rubric,
            },
        )

        if request.document_id:
            add_document_to_component(self.request.id, request.document_id)
            grading_args.pdf_path = (
                "downloads/resources/" + request.document_id + ".pdf"
            )
        guideline = generate_guideline(grading_args)
        llm_name = get_evaluation_components(self.request.id).llm
        feedbacks = {}
        for submission in request.submissions:
            feedback = build_evaluation(
                instruction=guideline,
                submission=submission,
                llm_name=llm_name,
                custom_settings=request.settings,
            )

            feedbacks[submission.user_id] = feedback.model_dump()

        return feedbacks
    except Exception as e:
        logger.error(f"Error scheduling evaluations with aggregation: {e}")
        raise self.retry(exc=e)


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
