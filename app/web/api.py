from app.web.db import SessionLocal
from app.web.db.models.components import Component


def get_evaluation_components(task_id: str) -> Component:
    with SessionLocal() as session:
        component = session.get(Component, task_id)
        return component


def set_evaluation_components(task_id: str, llm: str):
    with SessionLocal() as session:
        component = session.get(Component, task_id)
        if component:
            # Update the llm field
            component.llm = llm
        else:
            # Create a new component with llm if it doesn't exist
            component = Component(id=task_id, llm=llm)
            session.add(component)
        session.commit()
        session.refresh(component)
        return component


def add_document_to_component(task_id: str, document_id: str) -> Component:
    with SessionLocal() as session:
        component = session.get(Component, task_id)
        if component:
            # Update the document_id field
            component.document_id = document_id
        else:
            # Create a new component with document_id
            component = Component(id=task_id, document_id=document_id)
            session.add(component)
        session.commit()
        session.refresh(component)
        return component
