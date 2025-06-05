from app.autograding.llms import llm_map
from app.autograding.agents import build_instruction as BI
from app.autograding.models import GradingArgs
from app.autograding.score import random_component
from app.web.api import get_evaluation_components, set_evaluation_components
from app.web.utils.logger import logger
from app.web.db.models import Assignment


def initialize_llm(assignment: Assignment) -> str:
    llm_name = random_component("llm", llm_map)
    logger.info(f"Processing assignment {assignment.id}, using LLM: {llm_name}")
    return llm_name


def build_instruction(assignment: Assignment, llm_name: str) -> str:
    llm = llm_map[llm_name](streaming=False)
    instruction = BI(assignment, llm)
    return instruction


def select_component(
    component_type: str,
    component_map: dict,
    grading_args: GradingArgs,
) -> tuple[str, callable]:
    components = get_evaluation_components(grading_args.task_id)

    if components and getattr(components, component_type):
        name = getattr(components, component_type)
    else:
        name = random_component(component_type, component_map)
        set_evaluation_components(grading_args.task_id, name)

    builder = component_map[name]
    return name, builder(grading_args)
