from typing import Dict, List, Optional
from pydantic import BaseModel, Field
from .canvas import Assignment, Course, Submission, RubricCriterion
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


class ExcerptFeedbackRequest(BaseModel):
    highlighted_text: str
    rubric_criteria: Optional[List[RubricCriterion]] = None
