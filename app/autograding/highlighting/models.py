from pydantic import BaseModel, Field
from typing import List, Dict

class HighlightSpan(BaseModel):
    """Individual text that violates a criterion"""

    violating_text: str
    context: str 
    #explanation: str
    #confidence: float = Field(description="Confidence score 0.0-1.0")


class CriterionHighlights(BaseModel):
    """Complete highlighting results for a single criterion"""
    
    criterion_name: str
    
    highlights: List[HighlightSpan]
    
    @property
    def total_violations(self) -> int:
        """Return the total number of violations (highlights)"""
        return len(self.highlights)