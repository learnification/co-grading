from app.autograding.agents.grading_agent import build_evaluation
from app.autograding.evaluation import generate_guideline
from app.autograding.models import GradingArgs
from app.web.db.models import RequestGradingDto
from app.web.api import add_document_to_component, get_evaluation_components


def generate_feedback(request: RequestGradingDto, task_id: str) -> dict:
    """
    Function for processing grading requests.
    Generates a grading guideline, uses guideline to build feedback, and returns
    to Celery Task.
    """

    grading_args = GradingArgs(
        task_id=task_id,
        assignment={
            "name": request.assignment.name,
            "description": request.assignment.description,
            "max_points": request.assignment.points_possible,
            "rubric": request.assignment.rubric,
        },
    )

    if request.document_id:
        add_document_to_component(task_id, request.document_id)
        grading_args.pdf_path = f"downloads/resources/{request.document_id}.pdf"

    guideline = generate_guideline(grading_args)
    llm_name = get_evaluation_components(task_id).llm
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
