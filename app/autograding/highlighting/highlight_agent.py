from pydantic import SecretStr
from typing import Optional
from app.autograding.llms import build_llm_for_task
from app.web.db.models import CriterionInstructionIDs
from app.autograding.highlighting.models import CriterionHighlights

def find_criterion_violations(
        submission_text: str,
        criterion: CriterionInstructionIDs,
        openai_key: SecretStr
    ) -> CriterionHighlights:
        """
        Find submission violations for a specific criterion using LLM.
        
        Args:
            submission_text: The student's submission
            criterion: The specific rubric criterion to check against, and the criterion instruction
            openai_key: Optional OpenAI API key (uses llama model if None)
            
        Returns:
            CriterionHighlights containing violations found
        """
        
        llm_name = 'gpt-4.1-mini-2025-04-14'
        llm = build_llm_for_task(llm_name, openai_key, streaming=False)
        
        extractor = llm.with_structured_output(CriterionHighlights)
        
        prompt = f"""You are a precise text analyzer specialized in detecting violations of a single criterion in a student's submission.

CRITERION TO CHECK:
Criterion Name: {criterion.criterion}
Criterion Instruction: {criterion.instruction}

TASK:
- Identify ALL text spans in the submission that violate this criterion.
- Also give a few words before/after the violation for context.

SUBMISSION TO ANALYZE:
{submission_text}""".strip()

        result = extractor.invoke(prompt)
        return result
        