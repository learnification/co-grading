from typing import List
from pydantic import BaseModel, Field

class CriterionInstruction(BaseModel):
    """Single criterion with its AI grading instruction"""
    criterion: str = Field(description="The name of the rubric criterion")
    instruction: str = Field(description="Actionable instruction for the next AI to follow for this criterion")

class GeneratedGuideline(BaseModel):
    """Response from LLM containing all criterion instructions"""
    details: List[CriterionInstruction] = Field(
        description="List of criterion instructions for AI grading"
    )