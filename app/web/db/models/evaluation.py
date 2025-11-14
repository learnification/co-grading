from typing import Dict, List, Optional
from pydantic import BaseModel, Field, SecretStr
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
    openai_token: Optional[SecretStr] = None

class GradingFeedback(BaseModel):
    submission_id: int
    score: float
    feedback: str

class AutogradeDto(BaseModel):
    assignment: Assignment
    submission: Submission
    settings: CustomSettings

class SimpleFeedback(BaseModel):
    feedback: str
    score: float

class SimpleFeedbackResponse(BaseModel):
    scores: List[SimpleFeedback]


GradingFeedbackResponse = Dict[int, GradingFeedback]

class BatchLLMFeedbackRequest(BaseModel):
    criteria: List[RubricCriterion]
    criteriaAssessments: Dict[str, Optional[RubricCriterionAssessment]]
    assignment: Assignment
    userId: str
    gradingStartedAt: Optional[str] = None
    gradingEndedAt: Optional[str] = None
    gradingDurationSeconds: Optional[int] = None

class AuditRetrievalRequest(BaseModel):   # For audit-retrieval
    assignmentId: int
    userId: int
    courseId: int

class ApprovalRetrievalRequest(BaseModel): # For approval-retrieval
    assignmentId: int
    courseId: int

class AutogradeToggleRequest(BaseModel):
    assignmentId: int
    courseId: int
    graderName: str

class AutogradeCheckRequest(BaseModel):
    assignmentId: int
    courseId: int

class AutogradeThresholdRequest(BaseModel):
    courseId: int
    graderName: str
    threshold: int

class ThresholdCheckRequest(BaseModel):
    courseId: int

 

class AIFeedbackStatus(str, Enum):
    SUCCESS = "SUCCESS"
    WARNING = "WARNING"
    FAILURE = "FAILURE"


class AIFeedback(BaseModel):
    status: AIFeedbackStatus
    feedback: str

class CriterionInstructionIDs(BaseModel):
    id: str = Field(description="ID of the rubric criterion")
    criterion: str = Field(description="The name of the rubric criterion")
    instruction: str = Field(description="Actionable instruction for the next AI to follow for this criterion")
    enabled: bool = Field(description="Whether or not highlighting is enabled for this criterion")

class GenerateGuidelineRequest(BaseModel):
    assignment: Assignment
    baseURL: str
    toggles: Dict[str, bool]
    
class UpdateGuidelineRequest(BaseModel):
    assignment: Assignment
    guideline: List[CriterionInstructionIDs]
    baseURL: str

class HighlightViolationsRequest(BaseModel):
    course_id: int
    submission: Submission
    baseURL: str
    guideline: List[CriterionInstructionIDs]

class RubricCriterionInput(BaseModel):
    description: str
    points: float
    long_description: Optional[str] = None

class CreateTutorialAssignmentRequest(BaseModel):
    courseId: int