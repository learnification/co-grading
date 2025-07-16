from fastapi import APIRouter
from pydantic import BaseModel
from openai import OpenAI
import json

from app.web.db.models.evaluation import AIFeedback, AIFeedbackStatus, LLMFeedbackRequest
from app.autograding.feedback_prompts import generate_llm_feedback_messages

router = APIRouter()

@router.post("/llm-feedback", response_model=AIFeedback)
async def get_llm_feedback(request: LLMFeedbackRequest):
    # Hardcoded OpenAI API key and model for now
    OPENAI_API_KEY = "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"  # <<< REPLACE WITH YOUR ACTUAL KEY
    OPENAI_MODEL_NAME = "gpt-4.1-mini-2025-04-14" # Or "gpt-3.5-turbo", etc.

    # Check for missing comments or points
    if not request.rubricAssessment or (not request.rubricAssessment.comments and request.rubricAssessment.points is None):
        return AIFeedback(
            feedback="Feedback not possible: Both comments and awarded points are missing or empty.",
            status=AIFeedbackStatus.FAILURE
        )
    if not request.rubricAssessment.comments:
        return AIFeedback(
            feedback="Feedback not possible: Comments are missing or empty.",
            status=AIFeedbackStatus.FAILURE
        )
    if request.rubricAssessment.points is None:
        return AIFeedback(
            feedback="Feedback not possible: Awarded points are missing.",
            status=AIFeedbackStatus.FAILURE
        )

    client = OpenAI(api_key=OPENAI_API_KEY)
    print(f"request: {request}")
    messages = generate_llm_feedback_messages(request.rubricCriterion, request.rubricAssessment, request.assignment)
    print(f"msg: {messages}")

    try:
        response = client.chat.completions.create(
            model=OPENAI_MODEL_NAME,
            messages=messages,
            response_format={"type": "json_object"}
        )
        # Assuming the response content is a JSON string
        ai_feedback_data = json.loads(response.choices[0].message.content)
        return AIFeedback(**ai_feedback_data)
    except Exception as e:
        print(f"Error invoking OpenAI LLM or parsing response: {e}")
        return AIFeedback(feedback="Error generating AI feedback.", status=AIFeedbackStatus.FAILURE)