from typing import Dict, List, Optional, Tuple
from langchain_core.prompts import PromptTemplate
from langchain_ollama import ChatOllama
from app.autograding.llms import llm_map
from app.autograding.models import GradingArgs
from app.web.api import get_evaluation_components
from app.web.db.models import Assignment
from app.web.utils import logger
import re


def generate_queries(
    grading_args: GradingArgs,
    llm_name: str,
    *,
    k: int = 5,
) -> List[str]:
    """
    Generates a list of search queries based on the assignment description to deepen the teacher's knowledge.

    Args:
        grading_args (GradingArgs): The grading arguments containing the assignment details.
        llm_name (str): The name of the LLM to use for generating queries.
        k (int): The number of search queries to generate.

    Returns:
        Queries: A list of search queries to deepen the teacher's knowledge.
    """
    prompt_template = """
    Role:
    You are a teacher preparing to create a grading guideline for an assignment. 
    To ensure you fully understand the assignment and can grade it effectively, 
    you need to generate a list of specific search queries to deepen your knowledge of the assignment's content.

    Assignment Description:
    ```
    {assignment_name}
    {assignment_description}
    ```

    Instructions:
    1. Carefully Read the Assignment:
        - Thoroughly review the assignment description provided above.

    2. Identify Areas for Further Research:
        - Note any topics, concepts, terms, or objectives within the assignment that you are not completely familiar with or would like more information about.

    3. Generate Search Queries:
        - For each area identified, create a specific and relevant search query that will help you find the necessary information.
        - Ensure each query is:
            - Specific: Focused on a particular aspect or detail.
            - Relevant: Directly related to the assignment content.

    4. Prepare Your Output:
        - List 5 search queries in a numbered format.
        - Do not include any additional text, explanations, or commentary—only the list of queries.

    - Present your search queries as a numbered list and related to the assignment content.
    If the assignment is not clear, just return empty list.
    Output Example:
    1. Effective strategies for teaching Shakespeare to high school students
    2. Latest research on climate change impacts on coastal cities
    3. Advanced data analysis techniques using Python
    """

    try:
        prompt = PromptTemplate.from_template(prompt_template)
        formatted_prompt = prompt.format(
            assignment_name=grading_args.assignment.name,
            assignment_description=grading_args.assignment.description,
        )
        llm = llm_map[llm_name](streaming=False)
        queries = llm.invoke(formatted_prompt).content
        re_queries = re.findall(r"\d+\.\s(.+)", queries)
        return re_queries
    except Exception as e:
        logger.error(f"Error generating search queries: {e}")
        return []


def build_instruction(
    assignment: Assignment,
    llm: ChatOllama,
    retrieved_documents: List[str] = [],
) -> str:
    """
    Constructs the instruction message for the grading LLM based on the assignment details.

    Args:
        assignment (Assignment): The assignment details.

    Returns:
        str: The constructed instruction message.
    """

    input_text = f"""
        Use Chain of Thought reasoning to create a detailed guideline for grading the assignment. 
        Ensure your reasoning and guideline are clear\n\n.
        Assignment: ```{assignment.name}```\n"
        Description: ```{assignment.description}```"
        The maximum total score for this assignment is {assignment.points_possible}

        Below are the key points to consider when grading the assignment:
        {retrieved_documents}
    """

    response = llm.invoke(input_text)
    instruction = response.content.strip()

    content = f"""
        You are a expert teacher and is going to grade a student's assignment.
        Use the following guideline to grade the student's assignment.
        Provide overall feedback and a score for the assignment.
        {instruction}"""

    return content


def generate_instruction(
    grading_args: GradingArgs,
    retrieved_documents: Optional[List[Tuple[str, str]]],
    llm_name: str,
) -> str:
    input_text = f"""
        Use Chain of Thought reasoning to create a detailed guideline for grading the assignment. 
        Ensure your reasoning and guideline are clear\n\n.
        State the key points to consider when grading the assignment.
        Do not include any introductory or concluding sentences.
        Assignment: ```{grading_args.assignment.name}```\n"
        Description: ```{grading_args.assignment.description}```"
        The maximum score for this assignment is {grading_args.assignment.max_points}
        I repeat, the maximum score for this assignment is {grading_args.assignment.max_points}
    """

    if grading_args.assignment.rubric:
        input_text += f"""\n
        This is the Rubric for the assignment, You must Follow the rubric to create guideline.
        Rubric: {grading_args.assignment.rubric}"""

    if retrieved_documents:
        input_text += (
            "\n\nBelow are the key points to consider when grading the assignment:\n"
        )
        for query, doc in retrieved_documents:
            input_text += f"\n\nQuery: {query}\nAdvice: {doc}"

    llm = llm_map[llm_name](streaming=False)
    response = llm.invoke(input_text).content.strip()
    return response
