from typing import Dict
from app.autograding.agents.instruction_agent import (
    generate_instruction,
    generate_queries,
)
from app.autograding.components import select_component
from app.autograding.llms import llm_map
from app.autograding.agents import build_evaluation, build_instruction
from app.autograding.models import GradingArgs
from app.autograding.score import random_component
from app.autograding.vector_stores.retriever import search_knowledge_base
from app.web.api import set_evaluation_components
from app.web.db.models import Assignment, Submission, GradingFeedback
from app.web.db.models.canvas import Course
from app.web.db.models.user_settings import CustomSettings
from app.web.utils import logger


def handle_evaluation(
    task_id: str,
    course: Course,
    assignment: Assignment,
    submissions: list[Submission],
    custom_settings: CustomSettings,
) -> Dict[str, GradingFeedback]:
    """
    Orchestrates the grading process by generating guidelines and grading submissions.

    Args:
        assignment (Assignment): The assignment details.
        submissions (list): A list of Submission objects.
        llm_name (str): The name of the LLM to use.
        custom_settings (CustomSettings): The custom settings for grading.

    Returns:
        Dict: A dictionary of user_id to GradingFeedback objects.
    """
    llm_name = random_component("llm", llm_map)
    logger.info(f"Processing assignment {assignment.id}, using LLM: {llm_name}")
    set_evaluation_components(task_id, llm_name)
    llm = llm_map[llm_name](streaming=False)
    try:
        instruction = build_instruction(assignment, llm)

        grading_feedbacks = {}
        for submission in submissions:
            feedback = build_evaluation(
                instruction=instruction,
                submission=submission,
                llm_name=llm_name,
                custom_settings=custom_settings,
                max_score=assignment.points_possible,
            )
            grading_feedbacks[submission.user_id] = feedback

        return grading_feedbacks
    except Exception as e:
        logger.error(f"Error in processing submissions: {e}")
        raise RuntimeError("Failed to process submissions.") from e


def generate_guideline(grading_args: GradingArgs):
    """
    Generate grading guidelines for the given assignment.

    Args:
        assignment (Assignment): The assignment details.

    Returns:
        str: The generated grading guideline.
    """
    llm_name, llm = select_component("llm", llm_map, grading_args)
    q_a_pairs = None
    if grading_args.pdf_path:
        # RAG if pdf is provided
        queries = generate_queries(grading_args, llm_name)
        q_a_pairs = search_knowledge_base(queries, grading_args, llm_name)
    response = generate_instruction(grading_args, q_a_pairs, llm_name)
    return response
