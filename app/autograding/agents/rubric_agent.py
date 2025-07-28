from dotenv import load_dotenv
from typing import TypedDict, List, Dict
from langgraph.graph import StateGraph, END
from langchain_openai import ChatOpenAI
from langgraph.prebuilt import create_react_agent
from app.web.db.models import Assignment, RubricCriterion, EnhancedRubricResponse
import json

load_dotenv()


def create_rubric_guideline(assignment: Assignment) -> List[Dict]:
    """
    Workflow for enhancing a rubric with AI-generated sub-rules.
    This should be run once per assignment.
    """

    llm = ChatOpenAI(model="gpt-4.1-mini-2025-04-14", temperature=0).with_structured_output(EnhancedRubricResponse)
    criteria_list = assignment.rubric
    assignment_description = assignment.description

    prompt = f"""
    You are an expert in educational assessment and AI-powered grading. Your task is to create a clear, actionable instruction for another AI system that will analyze student submissions for a specific assignment.

    For each criterion in the grading rubric, provide a single, concise instruction for the next AI. This instruction should tell the AI:
      - What to look for in the text that is relevant to this criterion
      - What to highlight in the student submission
      - How to explain the relevance of the highlight to the TA

    The instruction should be specific, actionable, and easy for an AI to follow. It should help the AI highlight relevant text and provide useful feedback to the TA.

    Here is the assignment description:
    {assignment_description}

    Here is the rubric:
    {chr(10).join(
        f"{criterion.description} ({criterion.points} pts): {criterion.long_description or '[No description]'}\n" +
        "\n".join(f"  - {r.description} ({r.points} pts): {r.long_description or '[No description]'}" for r in criterion.ratings)
        for criterion in criteria_list
    )}

    Return instructions for each criterion listed above.
    """

    print("--- Enhancing Rubric ---")
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
    
    # Create lookup map from LLM response
    instruction_map = {
        item.criterion: item.instruction 
        for item in llm_response.details
    }
    
    # Map back to original rubric with IDs
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