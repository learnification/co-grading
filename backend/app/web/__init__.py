from fastapi import FastAPI
from app.web.db import create_db_and_tables
from app.web.endpoints import assignment_views, documents_views, score_views
from fastapi.middleware.cors import CORSMiddleware


def lifespan(app: FastAPI):
    create_db_and_tables()
    yield


app = FastAPI(
    title="Canvas FeedbackAI",
    description="Backend server for Canvas FeedbackAI - a tool to assist in grading Canvas assignments",
    version="1.0.0",
    lifespan=lifespan,
)

# Include Routers
app.include_router(assignment_views.router, prefix="/api/v1/grading", tags=["grading"])
app.include_router(score_views.router, prefix="/api/v1/scores", tags=["scores"])
app.include_router(
    documents_views.router, prefix="/api/v1/documents", tags=["documents"]
)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
