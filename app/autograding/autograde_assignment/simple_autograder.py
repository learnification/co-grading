from typing import Dict
from app.autograding.llms import build_llm_for_task
from app.autograding.processors import ProcessorFactory
from app.web.db.models import AutogradeDto, SimpleFeedback
import asyncio


CRITERION_PROMPT = """
You are an expert academic grader.

Your task is to evaluate the student's submission **only** for the specified criterion.

---
Criterion Name:
{criterion_name}

Grading Rubric:
{rubric_text}

Student Submission:
{submission_text}
---

Follow these rules when grading:
1. Consider only the specified criterion — ignore other aspects of the work.
2. Use the rubric exactly as written to determine the score.
3. Provide feedback that is concise, factual, and directly tied to the rubric.
4. Do not give scores outside the allowed range.

Return your response in this exact format:

{{
  "feedback": "Short, clear explanation of why the score was awarded.",
  "score": integer
}}

Do not include anything outside this object.

Grade the assignment with a strictness level of {custom_settings.strictness.value}.
Provide feedback with a tone of {custom_settings.tone.value} and a length of {custom_settings.length.value}.
"""


async def grade_criterion(llm, criterion_id: str, criterion_name: str, 
                         rubric_text: str, submission_text: str, settings) -> tuple:
    """Grade a single criterion using the LLM"""
    prompt = CRITERION_PROMPT.format(
        criterion_name=criterion_name,
        rubric_text=rubric_text,
        submission_text=submission_text,
        custom_settings=settings
    )
    print(f"DEBUG: {prompt}")
    
    grader = llm.with_structured_output(SimpleFeedback)
    result = await grader.ainvoke(prompt)
    
    return criterion_id, {
        "feedback": result.feedback,
        "score": result.score,
        "criterion": criterion_name
    }


async def autograde_submission(llm, submission_text: str, rubrics: Dict, settings) -> Dict:
    """Grade all criteria for a submission concurrently"""
    tasks = [
        grade_criterion(llm, crit_id, rubric_data['name'], 
                       rubric_data['rubric_text'], submission_text, settings)
        for crit_id, rubric_data in rubrics.items()
    ]
    
    results = await asyncio.gather(*tasks)
    return {crit_id: feedback for crit_id, feedback in results}


def _prepare_rubrics(assignment) -> Dict:
    """Prepare rubric data for grading"""
    rubrics = {}
    for criterion in assignment.rubric:
        rubric_text = "\n".join([
            f"{criterion.description}: {criterion.long_description or '[No description]'}\n" +
            "\n".join(f"  - {r.description} ({r.points} pts): {r.long_description or '[No description]'}"
                    for r in criterion.ratings)
        ])
        rubrics[criterion.id] = {
            "rubric_text": rubric_text,
            "name": criterion.description
        }
    return rubrics


async def autograde(request: AutogradeDto, openai_key: str = None) -> Dict:
    """Main function to autograde a submission"""

    processor = ProcessorFactory.get_processor(request.submission.submission_type)
    content = processor.process(request.submission)
    
    llm_name = 'gpt-4.1-mini-2025-04-14' if openai_key else 'llama3.2'
        
    llm = build_llm_for_task(llm_name, openai_key, streaming=False)
    
    rubrics = _prepare_rubrics(request.assignment)
    
    results = await autograde_submission(llm, content, rubrics, request.settings)
    
    return {"grades": results} 