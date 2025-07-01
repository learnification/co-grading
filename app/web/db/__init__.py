from typing import Annotated
from fastapi import Depends
from app.web.config import config
from sqlmodel import Session, SQLModel, create_engine
from sqlalchemy.orm import sessionmaker


connect_args = {"check_same_thread": False}
engine = create_engine(config.DB_URI, connect_args=connect_args)

SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session


SessionDep = Annotated[Session, Depends(get_session)]
