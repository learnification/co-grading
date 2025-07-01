from enum import Enum
from typing import Optional

from pydantic import BaseModel, Field


class CustomSettings(BaseModel):
    class StrictnessLevel(str, Enum):
        strict = "strict"
        moderate = "moderate"
        loose = "loose"

    strictness: StrictnessLevel = Field(
        StrictnessLevel.moderate, description="Level of strictness for grading."
    )

    class FeedbackTone(str, Enum):
        formal = "formal"
        friendly = "friendly"
        constructive = "constructive"

    class FeedbackLength(str, Enum):
        short = "short"
        medium = "medium"
        detailed = "detailed"

    tone: FeedbackTone = Field(
        FeedbackTone.constructive, description="Tone of the feedback provided."
    )
    length: FeedbackLength = Field(
        FeedbackLength.medium, description="Length of the feedback."
    )
    custom_feedback_prompt: Optional[str] = Field(
        None, description="Custom prompt for generating feedback.",alias="customFeedbackPrompt"
    )
