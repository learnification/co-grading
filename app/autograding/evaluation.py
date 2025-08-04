from app.autograding.agents.instruction_agent import (
    generate_instruction,
    generate_queries,
)
from app.autograding.components import select_component
from app.autograding.llms import select_llm_map
from app.autograding.models import GradingArgs
from app.autograding.vector_stores.retriever import search_knowledge_base


def generate_guideline(grading_args: GradingArgs):
    """
    Generate grading guidelines for the given assignment.

    Args:
        grading_args (GradingArgs): The grading arguments containing assignment details and OpenAI token.

    Returns:
        str: The generated grading guideline.
    """
    use_map = select_llm_map(grading_args.openai_token)
    llm_name = select_component("llm", use_map, grading_args)
    
    q_a_pairs = None
    if grading_args.pdf_path:
        # RAG if pdf is provided
        queries = generate_queries(grading_args, llm_name)
        q_a_pairs = search_knowledge_base(queries, grading_args, llm_name)
    
    response = generate_instruction(grading_args, q_a_pairs, llm_name)
    return response
