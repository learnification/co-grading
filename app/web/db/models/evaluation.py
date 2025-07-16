from typing import Dict, List, Optional
from pydantic import BaseModel, Field
from .canvas import Assignment, Course, Submission, RubricCriterionAssessment, RubricCriterion
from .user_settings import CustomSettings
from enum import Enum

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

class LLMFeedbackRequest(BaseModel):
    rubricCriterion: RubricCriterion
    rubricAssessment: Optional[RubricCriterionAssessment] = None
    assignment: Assignment

class AIFeedbackStatus(str, Enum):
    SUCCESS = "SUCCESS"
    WARNING = "WARNING"
    FAILURE = "FAILURE"


class AIFeedback(BaseModel):
    status: AIFeedbackStatus
    feedback: str
