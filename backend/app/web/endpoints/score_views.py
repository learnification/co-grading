from fastapi import APIRouter, Body, HTTPException
from app.autograding import score_evaluation, get_scores
from app.web.api import get_evaluation_components

router = APIRouter()


@router.post("")
def update_score(evaluation_id: str = Body(...), score: int = Body(...)):
    if score not in [0, 1]:
        raise HTTPException(
            status_code=400, detail="Score must be 0 or 1"
        )

    components = get_evaluation_components(evaluation_id)
    score_evaluation(score, components.llm)

    return {"message": "Score updated"}


@router.get("")
def list_scores():
    scores = get_scores()

    return scores
