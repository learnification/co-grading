from typing import Dict, List, Optional
from pydantic import BaseModel, Field
from .canvas import Assignment, Course, Submission
from .user_settings import CustomSettings


# Define RequestGradingDto
class RequestGradingDto(BaseModel):
    course: Course
    assignment: Assignment
    submissions: List[Submission]
    settings: CustomSettings
    document_id: Optional[str] = Field(None, alias="documentId")


class GradingFeedback(BaseModel):
    submission_id: int
    score: float
    feedback: str


GradingFeedbackResponse = Dict[int, GradingFeedback]

class CriterionInstruction(BaseModel):
    """Single criterion with its AI grading instruction"""
    criterion: str = Field(description="The name of the rubric criterion")
    instruction: str = Field(description="Actionable instruction for the next AI to follow for this criterion")

class EnhancedRubricResponse(BaseModel):
    """Response from LLM containing all criterion instructions"""
    details: List[CriterionInstruction] = Field(
        description="List of criterion instructions for AI grading"
    )

class CriterionInstructionIDs(BaseModel):
    id: str = Field(description="ID of the rubric criterion")
    criterion: str = Field(description="The name of the rubric criterion")
    instruction: str = Field(description="Actionable instruction for the next AI to follow for this criterion")

class RequestRubricEditDto(BaseModel):
    assignment: Assignment
    guideline: List[CriterionInstructionIDs]