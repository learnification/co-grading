from cmd import PROMPT
from typing import Dict
from app.autograding.llms import build_llm_for_task
from app.autograding.processors import ProcessorFactory
from app.web.db.models import AutogradeDto, SimpleFeedback
from langchain_core.messages import SystemMessage, HumanMessage
import asyncio


CRITERION_PROMPT = """
You are an expert academic grader providing formal, objective feedback about a student's submission.

WRITING STYLE:
- Write in THIRD-PERSON about the submission (e.g., "The submission contains...", "The work demonstrates...") - avoid first-person ("I", "we") and second-person ("you", "your")
- Use formal, academic language appropriate for undergraduate feedback - vocabulary should sound natural in verbal explanation (avoid overly complicated and convoluted words)
- Write objectively as a third-party evaluator ABOUT the submission, not TO the student

FORBIDDEN (DO NOT DO THE FOLLOWING UNDER ANY CIRCUMSTANCES):
- Meta-commentary about scoring ("scored accordingly", "receives X points", "justifies the score", "I marked this as...")
- Language describing the grading task rather than the submission ("Calling grader helper", "Preparing to evaluate", "Internal:", "<Criterion> evaluation:" ,"<Criterion> review:" )
- Prefixes, headers, labels, or categorization before feedback (e.g., "<Criterion> evaluation:", "<Criterion> review:", <Criterion> assessment:, "<Criterion> assessment placeholder:", "Evaluation:", "Review:", "Assessment:, or any related headers")
- Directive/active voice that sounds like recommendations or suggestions (e.g., "suggesting need for...", "indicating a need for...") - instead, describe what the submission contains/demonstrates naturally
- Mentioning issues from other criteria - evaluate ONLY the specified criterion
- Any language that explains or justifies the scoring process
END OF FORBIDDEN LIST

CRITICAL: If the generated feedback begins with ANY prefix, header, label, or categorization followed by a colon (e.g., "Internal:", "<Criterion> evaluation:", "<Criterion> review:", "<Criterion> assessment:", "Evaluation:", "Review:", "Assessment:"), the feedback MUST be scrapped and regenerated as a regular paragraph starting directly with content about the submission (e.g., "The submission contains..." or "The work demonstrates..."). BY NO MEANS SHOULD THERE BE A HEADER with prefixes like 'Internal:', '<Criterion> evaluation/review/assessment' - the feedback must start immediately with descriptive content about the submission.

STRUCTURE & CONTENT:
- Write as a SINGLE COHESIVE, FLOWING PARAGRAPH with smooth transitions (e.g., "however", "although") when moving between positive and negative aspects
- For POSITIVE aspects: High-level summary, not exhaustive examples
- For NEGATIVE aspects: Focus on most significant counterexamples/mistakes, grouping related errors (e.g., "multiple spelling errors such as X, Y, Z")
- Describe the submission's quality, not the scoring process

CONCISENESS:
- Aim for approximately 50 words (break only if absolutely necessary for coherence)
- Prioritize most important points directly related to the criterion
- Use efficient, precise language - every word must add value
- Plan content before writing to fit the length
"""

CRITERION_HUMAN_PROMPT = """
Evaluate ONLY the specified criterion below. Do NOT evaluate or mention any other aspects.

---
Criterion Name: {criterion_name}
Grading Rubric: {rubric_text}
Student Submission: {submission_text}
---

Instructions:
- Use the rubric exactly as written to determine the score
- Write as a single cohesive, flowing paragraph in third-person - START DIRECTLY with content about the submission (e.g., "The submission contains...", "The work demonstrates...")
- Write in descriptive, declarative statements about what the submission contains/demonstrates - avoid directive/active voice that sounds like recommendations (e.g., avoid "suggesting need for...", "indicating a need for...")
- CRITICAL: Do NOT use prefixes, headers, labels, or categorization before the feedback (e.g., no "<Criterion> evaluation:", "<Criterion> review:", "<Criterion> assessment:", "Internal:", "Evaluation:", "Review:", "Assessment:"). If the feedback begins with any prefix/header followed by a colon, it MUST be scrapped and regenerated as a regular paragraph starting directly with content about the submission. BY NO MEANS SHOULD THERE BE A HEADER.
- Aim for approximately 50 words - prioritize completeness and clarity
- For positive aspects: High-level summary, not exhaustive examples
- For negative aspects: Most significant counterexamples/mistakes only, grouping related ones
- Use smooth transitions (e.g., "however", "although") when connecting positive and negative aspects
- Do NOT mention scoring, points, or justify the score - describe the submission's quality only
- Ensure score is within the allowed range

Response Format (JSON):
{{
  "feedback": "Concise third-person, formal feedback (aim for approximately 50 words or less). START DIRECTLY with content about the submission - do NOT use prefixes, headers, labels, or categorization (e.g., no '<Criterion> evaluation:', '<Criterion> review:', '<Criterion> assessment:', 'Internal:', 'Evaluation:', 'Review:', 'Assessment:'). If the feedback begins with any prefix/header followed by a colon, it MUST be scrapped and regenerated. Begin with phrases like 'The submission contains...' or 'The work demonstrates...'. BY NO MEANS SHOULD THERE BE A HEADER. Before writing, consider what needs to be communicated and plan how to express it concisely. Prioritize the most important points only. For positive aspects, provide high-level summary in one sentence (can be very brief if criterion is fully met). For negative aspects, focus on the most significant counterexamples only (group related ones). Do NOT mention scoring, points, or justify the score. Eliminate redundancy. Do not pad with unnecessary words, but do not cut off mid-thought.",
  "score": integer
}}

Do not include anything outside this object.

Grade the assignment with a strictness level of {custom_settings.strictness.value}.
Provide feedback with a tone of {custom_settings.tone.value} and a length of {custom_settings.length.value}.
"""


async def grade_criterion(llm, criterion_id: str, criterion_name: str, 
                         rubric_text: str, submission_text: str, settings) -> tuple:
    """Grade a single criterion using the LLM"""
    human_prompt = CRITERION_HUMAN_PROMPT.format(
        criterion_name=criterion_name,
        rubric_text=rubric_text,
        submission_text=submission_text,
        custom_settings=settings
    )
    
    grader = llm.with_structured_output(SimpleFeedback)
    messages = [
        SystemMessage(content=CRITERION_PROMPT),
        HumanMessage(content=human_prompt)
    ]
    result = await grader.ainvoke(messages)
    
    
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
    
    llm_name = 'gpt-5-mini' if openai_key else 'llama3.2'
        
    llm = build_llm_for_task(llm_name, openai_key, streaming=False)
    
    rubrics = _prepare_rubrics(request.assignment)
    
    results = await autograde_submission(llm, content, rubrics, request.settings)
    
    return {"grades": results} 