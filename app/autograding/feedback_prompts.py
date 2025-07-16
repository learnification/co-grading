from typing import Dict, List, Optional

from typing import List, Optional
from app.web.db.models.canvas import Assignment, RubricCriterion, RubricRating
from app.web.db.models.evaluation import RubricCriterionAssessment
def generate_llm_feedback_messages(
    rubric_criterion: RubricCriterion,
    rubric_assessment: RubricCriterionAssessment,
    assignment: Assignment
) -> List[Dict[str, str]]:
    """
    Generates a prompt for the LLM to provide feedback on a human grader's assessment
    of a specific rubric criterion.
    """

    selected_rating_details = next(
        (rating for rating in rubric_criterion.ratings if rating.id == rubric_assessment.rating_id),
        None
    )

    selected_rating_description = selected_rating_details.description if selected_rating_details else "N/A"
    selected_rating_points_from_rubric = selected_rating_details.points if selected_rating_details else "N/A"

    formatted_ratings = []
    for rating in rubric_criterion.ratings:
        long_desc = f": {rating.long_description}" if rating.long_description else ""
        formatted_ratings.append(f"- {rating.description} ({rating.points} points){long_desc}")
    list_of_ratings = "\n".join(formatted_ratings)

    awarded_points_by_user = rubric_assessment.points if rubric_assessment.points is not None else selected_rating_points_from_rubric

    # Calculate percentage score for the criterion
    percentage_score = "N/A"
    score_tier = "UNKNOWN"
    if rubric_criterion.points is not None and rubric_criterion.points > 0 and awarded_points_by_user != "Not specified":
        try:
            percentage_score = (float(awarded_points_by_user) / rubric_criterion.points) * 100
            percentage_score = f"{percentage_score:.2f}%"
            
            # Determine score tier for strictness calibration
            score_value = float(awarded_points_by_user) / rubric_criterion.points
            if score_value >= 0.8:
                score_tier = "HIGH"
            elif score_value >= 0.6:
                score_tier = "MEDIUM"
            else:
                score_tier = "LOW"
        except (ValueError, TypeError):
            pass

    system_content = f"""You are an AI assistant evaluating the strength of a human grader's feedback on a student's work. Your primary goal is to determine if the feedback is actionable and provides clear justification for the assigned score/rating.

CRITICAL: Your evaluation strictness must be INVERSELY proportional to the student's score:
- HIGH SCORES (80%+): Be SIGNIFICANTLY MORE LENIENT - specific acknowledgment of what was done well is sufficient
- MEDIUM SCORES (60-79%): Be MODERATELY STRICT - require clear areas for improvement, excluding submission contents
- LOW SCORES (<60%): Be VERY STRICT - demand detailed, specific guidance for improvement

Current Score Context: {percentage_score} (Tier: {score_tier})

Instructions:
1. Analyze the human grader's comments and selected rating for this rubric criterion, calibrating your expectations based on the score tier above.

2. Assess feedback quality with score-adjusted expectations:
   **Actionability** (score-dependent requirements):
   - HIGH SCORES: Should acknowledge what was done correctly or well. Specific recognition of achievements is sufficient.
   - MEDIUM SCORES: Should identify what was done well provide a non-submission insight of what they can do to improve for next time (excluding submission examples).
   - LOW SCORES: MUST provide detailed, concrete steps for improvement. Vague feedback is unacceptable.
   
   **Justification** (score-dependent requirements):
   - HIGH SCORES: Should connect the feedback to specific aspects of the work that earned the high score. Brief but specific is acceptable.
   - MEDIUM SCORES: Should explain why points were deducted and what would earn full points.
   - LOW SCORES: MUST clearly explain deficiencies and connect them to rubric criteria.

3. Provide constructive feedback to the human grader, keeping score-appropriate expectations in mind.

4. Assign overall status with SCORE-PROPORTIONAL STRICTNESS:
   - 'SUCCESS': 
     * HIGH SCORES: Specifically acknowledges what was done correctly or identifies particular strengths. Brief but targeted feedback is sufficient.
     * MEDIUM SCORES: Clear feedback with improvement guidance / actionable insights (non submission examples) and good justification
     * LOW SCORES: Detailed, actionable improvement plan with strong justification
   - 'WARNING':
     * HIGH SCORES: Only generic praise without any specificity ("Good job", "Well done") or feedback that contradicts the high score
     * MEDIUM SCORES: Missing actionable insights or weak justification
     * LOW SCORES: Provides some guidance but lacks specificity or clear improvement path
   - 'FAILURE':
     * HIGH SCORES: Completely contradicts the high score, is inappropriately critical, or provides no feedback at all
     * MEDIUM SCORES: Vague feedback that doesn't help student improve or significantly contradicts the score
     * LOW SCORES: No actionable guidance, poor justification, or completely inappropriate for low score

Remember: For high scores (80%+), brief but specific acknowledgment of correct work should easily earn SUCCESS. Only truly generic praise like "Good job" should earn WARNING for high scores. A 30% score requires extensive detail to avoid FAILURE.

Your response should be in the following JSON format:
{{
  "status": "SUCCESS" | "WARNING" | "FAILURE",
  "feedback": "Your detailed feedback here."
}}"""

    user_content = f"""Rubric Criterion:
Name: {rubric_criterion.description}
Maximum Points: {rubric_criterion.points}
Possible Ratings:
{list_of_ratings}

--- 
Human Grader's Assessment for this Criterion:
Selected Rating: {selected_rating_description} (Points from Rubric: {selected_rating_points_from_rubric})
Awarded Points: {awarded_points_by_user} (Score: {percentage_score})
Comments: "{rubric_assessment.comments}""" 

    return [
        {"role": "system", "content": system_content},
        {"role": "user", "content": user_content}
    ]


## Future prompt improvements:

"""

1. Over dependant on praise (especially for higher scores)
2. Feed it description context for ratings, so we don't have to repeat the rating description essentially
3. 


"""