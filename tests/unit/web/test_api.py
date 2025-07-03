import pytest
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool
from sqlmodel import SQLModel, create_engine

import app.web.api as api_module
import app.web.db as db_module
from app.web.api import (
    add_document_to_component,
    get_evaluation_components,
    set_evaluation_components,
)

# Create Test SQL Engine
TEST_DATABASE_URL = "sqlite:///:memory:"
test_engine = create_engine(
    TEST_DATABASE_URL,
    connect_args={"check_same_thread": False},
    poolclass=StaticPool,
)
TestSessionLocal = sessionmaker(bind=test_engine, autoflush=False, autocommit=False)


@pytest.fixture(autouse=True)
def setup_test_db(monkeypatch):
    """
    Setup an in-memory SQLite database for testing, monkey-patch SessionLocal
    to use this test database, and clean up tables after each test.
    - Avoids mocking the database and instead uses a real database engine in a controlled environment.
    """

    SQLModel.metadata.create_all(test_engine)

    monkeypatch.setattr(db_module, "SessionLocal", TestSessionLocal)
    monkeypatch.setattr(api_module, "SessionLocal", TestSessionLocal)

    yield

    SQLModel.metadata.drop_all(test_engine)


def test_get_evaluation_components():
    """Verify fetching existing and missing evaluation components."""
    set_evaluation_components("123", "llama3")
    result_true = get_evaluation_components("123")

    assert result_true.id == "123"
    assert result_true.llm == "llama3"

    result_false = get_evaluation_components("missing_task")
    assert result_false is None


def test_set_evaluation_components():
    """Test creation, update, and validation of evaluation components."""
    # Create new component
    result = set_evaluation_components(task_id="1", llm="llama3")
    assert result.id == "1"
    assert result.document_id is None
    assert result.llm == "llama3"

    # Update component llm
    result = set_evaluation_components(task_id="1", llm="llama2")
    assert result.id == "1"
    assert result.llm == "llama2"
    assert result.llm != "llama3"
    assert result.document_id is None

    # create new component, with no llm
    result = set_evaluation_components(task_id="2", llm=None)
    assert result.id == "2"
    assert result.llm is None
    assert result.document_id is None

    # update llm
    result = set_evaluation_components(task_id="2", llm="llamaX")
    assert result.llm == "llamaX"
    assert result.document_id is None


def test_add_document_to_component():
    """Test adding or updating document_id for evaluation components."""
    result = add_document_to_component("3", "51344183")
    assert result.id == "3"
    assert result.document_id == "51344183"
    assert result.llm is None

    # Update Blank document
    set_evaluation_components(task_id="2", llm="llama3")
    result = add_document_to_component("2", "123")

    assert result.id == "2"
    assert result.document_id == "123"
    assert result.llm == "llama3"

    result = add_document_to_component("4", None)
    assert result.id == "4"
    assert result.document_id is None
    assert result.llm is None
