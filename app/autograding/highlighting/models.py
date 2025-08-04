from pydantic import BaseModel, Field
from typing import List

class HighlightSpan(BaseModel):
    """Individual text that violates a criterion"""

    violating_text: str = Field(
        description="CRITICAL: Copy the EXACT text from the submission that violates the criterion. DO NOT correct, modify, or create text that doesn't exist. Must be character-for-character identical to what appears in the submission."
    )
    context: str = Field(
        description="The sentence or phrase containing the violation, with 10-20 words of surrounding context, copied exactly as it appears in the submission"
    )
    explanation: str = Field(description="Why this text violates the criterion")
    confidence: float = Field(description="Confidence score 0.0-1.0")


class CriterionHighlights(BaseModel):
    """Complete highlighting results for a single criterion"""
    
    criterion_name: str = Field(..., description="Name of the criterion")
    
    highlights: List[HighlightSpan] = Field(
        default_factory=list,
        description="All text spans that violate this criterion"
    )
    
    @property
    def total_violations(self) -> int:
        """Return the total number of violations (highlights)"""
        return len(self.highlights)