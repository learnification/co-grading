from dotenv import load_dotenv
from typing import List, Dict
from pydantic import SecretStr
from app.web.db.models import Assignment
from app.autograding.guidelines.models import GeneratedGuideline
from app.autograding.llms import build_llm_for_task
from app.web.utils import logger

load_dotenv()


def create_rubric_guideline(assignment: Assignment, toggles: Dict[str, bool], openai_key: SecretStr) -> List[Dict]:
    """
    Workflow for enhancing a rubric with AI-generated sub-rules.
    This should be run once per assignment.
    """
    llm_name = 'gpt-5-mini'

    llm = build_llm_for_task(llm_name, openai_key, streaming=False).with_structured_output(GeneratedGuideline)

    criteria_list = assignment.rubric
    assignment_description = assignment.description
    rubric_text = chr(10).join(
            f"{criterion.description}: {criterion.long_description or '[No description]'}\n" +
            "\n".join(f"  - {r.description} ({r.points} pts): {r.long_description or '[No description]'}" for r in criterion.ratings)
            for criterion in criteria_list
        )

    prompt = f"""
You are an expert in educational assessment and AI-powered grading. Your task is to create a clear, actionable instruction for another AI system that will analyze student submissions for a specific assignment.

For each criterion in the grading rubric, provide a single, concise instruction for the next AI. This instruction should tell the AI:
    - What to look for in the text that is relevant to this criterion
    - What to highlight in the student submission

The instruction should be specific, actionable, and easy for an AI to follow. It should help the AI highlight relevant text for the TA.

IMPORTANT: 
- Focus on highlighting content instructions, and instructions only
- Highlight ONLY the problematic or relevant text, not correct text
- Keep instructions simple and focused on what to highlight
- Do NOT suggest highlighting for correct sections
- Do NOT add analysis instructions like "assess quality" or "note frequency"
- Do NOT include specific instances or examples (e.g., do NOT write "for example, claims that..." or "such as..." or any example statements)
- Write general instructions only - describe what types of content to highlight, not specific example cases

CRITICAL: MAIN AIM IS FOCUSED CLARITY FOR THE INSTRUCTIONS. MAKE IT CONCISE, KEEP UNDER 40 WORDS UNLESS ABSOLUTELY NECESSARY

Here is the assignment description:
{assignment_description}

Here is the rubric:
{rubric_text}

Return instructions for each criterion listed above.
    """
    try:
        response = llm.invoke(prompt)
        return _map_to_frontend_format(response, assignment, toggles)
        
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
    llm_response: GeneratedGuideline, 
    assignment: Assignment,
    toggles: Dict[str, bool]
) -> List[Dict]:
    """Map LLM response to frontend-ready format with IDs"""
    
    instruction_map = {
        item.criterion: item.instruction 
        for item in llm_response.details
    }
    
    result = []
    for criterion in assignment.rubric:
        instruction = instruction_map.get(
            criterion.description, 
            "No specific AI guidance available for this criterion"
        )
        
        result.append({
            "id": criterion.id,
            "criterion": criterion.description,
            "instruction": instruction,
            "enabled": toggles.get(criterion.id,True)
        })
    
    return result