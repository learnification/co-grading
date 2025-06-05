from app.autograding.processors import ProcessorFactory
from app.web.db.models import Submission, GradingFeedback, CustomSettings
from app.web.utils.logger import logger
from langchain_ollama import ChatOllama


def build_evaluation(
    instruction: str,
    submission: Submission,
    llm_name: str,
    custom_settings: CustomSettings,
    *,
    retries: int = 3,
    max_score: float = None,
) -> GradingFeedback:
    """
    Grades a submission using the provided instruction and settings.

    Args:
        instruction (str): The grading instruction.
        submission (Submission): The student's submission.
        llm_name (str): The name of the LLM to use.
        custom_settings (CustomSettings): The custom settings for grading.

    Returns:
        GradingFeedback: The generated grading feedback.
    """
    llm = ChatOllama(model=llm_name).with_structured_output(GradingFeedback)

    # Build the instruction content
    instruction_content = f"""
    You are an expert teacher who will grade a student's assignment.
    Use the following instruction to grade the student's assignment:
    ```{instruction}```

    Grade the assignment with a strictness level of {custom_settings.strictness}.
    Provide feedback with a tone of {custom_settings.tone} and a length of {custom_settings.length}.
    """
    try:

        if custom_settings.custom_feedback_prompt:
            instruction_content += f"""
            You should follow the below instruction.
            {custom_settings.custom_feedback_prompt}"""

        instruction_prompt = {"role": "system", "content": instruction_content}

        processor = ProcessorFactory.get_processor(submission.submission_type)
        content = processor.process(submission)

        user_prompt = {
            "role": "user",
            "content": f"Submission ID {submission.id}\n{content}",
        }

        messages = [instruction_prompt, user_prompt]

        response: GradingFeedback = llm.invoke(messages)

        if max_score is not None and response.score > max_score:
            raise ValueError(
                f"Score {response.score} exceeds the maximum score of {max_score}"
            )

        response.submission_id = submission.id
        return response
    except Exception as e:
        if retries <= 0:
            feedback = GradingFeedback(
                submission_id=submission.id,
                feedback="",
                score=0,
            )
            logger.error(f"Error grading submission ID {submission.id}: {e}")
            return feedback

        return build_evaluation(
            instruction=instruction,
            submission=submission,
            llm_name=llm_name,
            custom_settings=custom_settings,
            retries=retries - 1,
        )
