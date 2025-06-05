from typing import Optional
from sqlmodel import SQLModel, Field


class Component(SQLModel, table=True):
    id: str = Field(default=None, primary_key=True, index=True)
    llm: Optional[str] = Field(default=None)
    document_id: Optional[str] = Field(default=None)
