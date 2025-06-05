from typing import List, Optional
from pydantic import BaseModel, Field, RootModel


class Assignment(BaseModel):
    name: str = Field(..., description="Name of the assignment")
    description: str = Field(..., description="Description of the assignment")
    rubric: Optional[str] = Field(None, description="Rubric for the assignment")
    max_points: float = Field(..., description="Maximum points for the assignment")


class GradingArgs(BaseModel):
    task_id: str
    assignment: Assignment
    pdf_path: Optional[str] = Field(
        None, description="Path to the PDF file that user uploaded"
    )


class Queries(RootModel):
    root: List[str] = Field(
        ...,
        description="List of search queries",
        example=["machine learning", "python pydantic"],
    )

    def __iter__(self):
        return iter(self.root)

    def __getitem__(self, item):
        return self.root[item]
