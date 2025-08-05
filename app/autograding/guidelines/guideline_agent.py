from dotenv import load_dotenv
from typing import List, Dict
from pydantic import SecretStr
from app.web.db.models import Assignment, RubricCriterion, EnhancedRubricResponse
from app.autograding.llms import build_llm_for_task
from app.web.utils import logger

load_dotenv()


def create_rubric_guideline(assignment: Assignment, openai_key: SecretStr) -> List[Dict]:
    """
    Workflow for enhancing a rubric with AI-generated sub-rules.
    This should be run once per assignment.
    """

    llm_name = 'gpt-4.1-mini-2025-04-14'

    llm = build_llm_for_task(llm_name, openai_key, streaming=False).with_structured_output(EnhancedRubricResponse)

    criteria_list = assignment.rubric
    assignment_description = assignment.description
    rubric_text = chr(10).join(
        f"{criterion.description} ({criterion.points} pts): {criterion.long_description or '[No description]'}\n" +
        "\n".join(f"  - {r.description} ({r.points} pts): {r.long_description or '[No description]'}" for r in criterion.ratings)
        for criterion in criteria_list
    )

    prompt = f"""You are an expert in educational assessment and AI-powered grading. Your task is to create clear, actionable instructions for another AI system that will analyze student submissions for a specific assignment.

For each criterion in the grading rubric, provide a single, concise instruction that tells the AI:

    - What specific content, errors, or issues to look for in the student submission text relevant to this criterion.
    - What exact text or phrases to highlight as evidence of a violation or deficiency related to the criterion.

Do NOT include any instructions about assigning scores or marks. Focus solely on identifying and highlighting rubric violations or missing elements.

    Here is the rubric:
    {rubric_text}

Return instructions for each criterion listed above.
    """
    try:
        response = llm.invoke(prompt)
        return _map_to_frontend_format(response, assignment.rubric)
        
    except Exception as e:
        print(f"Error generating rubric guidelines: {e}")
        return [
            {
                "id": criterion.id,
                "criterion": criterion.description,
                "instruction": "Error generating instructions."
            }
            for criterion in assignment.rubric
        ]
    
def _map_to_frontend_format(
    llm_response: EnhancedRubricResponse, 
    original_rubric: List[RubricCriterion]
) -> List[Dict]:
    """Map LLM response to frontend-ready format with IDs"""
    
    instruction_map = {
        item.criterion: item.instruction 
        for item in llm_response.details
    }
    
    result = []
    for criterion in original_rubric:
        instruction = instruction_map.get(
            criterion.description, 
            "No specific AI guidance available for this criterion"
        )
        
        result.append({
            "id": criterion.id,
            "criterion": criterion.description,
            "instruction": instruction
        })
    
    return result