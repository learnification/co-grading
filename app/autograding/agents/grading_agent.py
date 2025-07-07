from app.autograding.processors import ProcessorFactory
from app.web.db.models import Submission, GradingFeedback, CustomSettings, ExcerptFeedbackRequest
from app.web.utils.logger import logger
from app.autograding.llms import llm_map

def build_simple_evaluation(
    instructions: ExcerptFeedbackRequest,
    llm_name = 'llama3.2:3b-instruct-fp16'
) -> str:
    
    llm_builder = llm_map[llm_name]
    llm = llm_builder(streaming=False)

    # More specific and structured system prompt for Llama 3.2
    system_instructions = (
        "You are an expert teaching assistant providing targeted feedback on student writing. "
        "Your task is to analyze the highlighted text and provide specific, actionable feedback.\n\n"
        "CRITICAL FORMATTING RULES:\n"
        "Write in plain text only. Do not use any markdown, bullets (*), dashes (-), or special formatting. "
        "Do not use section headers like 'Analysis' or 'Targeted Feedback'. "
        "Write in flowing sentences and paragraphs only.\n\n"
        "FEEDBACK APPROACH:\n"
        "Start immediately with your observations. Quote exact phrases from the text when identifying issues. "
        "For each problem, state what should be changed and provide the corrected version. "
        "Be direct and specific. Focus only on the highlighted text excerpt."
    )

    # Build user content with clearer structure
    user_content = f"STUDENT TEXT TO ANALYZE:\n{instructions.highlighted_text}\n\n"
    
    if instructions.rubric_criteria:
        # Create more specific rubric guidance
        criteria_text = []
        for criterion in instructions.rubric_criteria:
            criteria_text.append(f"- {criterion.description or criterion.id}")
        
        user_content += (
            "EVALUATION CRITERIA:\n"
            "Focus your feedback exclusively on: " + ", ".join(criteria_text) + "\n\n"
            "Identify specific issues related to these criteria and explain what should be corrected."
        )
    else:
        user_content += (
            "TASK:\n"
            "Provide general feedback on the quality, clarity, and effectiveness of this text. "
            "Focus on content, organization, clarity, and writing mechanics. "
            "The text may not be fleshed out, or missing context, and thats okay, this is an excerpt, remember that."
        )

    messages = [
        {"role": "system", "content": system_instructions},
        {"role": "user", "content": user_content}
    ]
    
    response = llm.invoke(messages)
    logger.info(f"MESSAGE TO LLM: {messages}\n\nRESPONSE: {response.content}")
    return response.content

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
    llm_builder = llm_map[llm_name]
    llm = llm_builder(streaming=False).with_structured_output(GradingFeedback)

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
            raise ValueError(f"Score {response.score} exceeds the maximum score of {max_score}")

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
