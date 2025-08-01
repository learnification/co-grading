import fitz  # PyMuPDF
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from pydantic import SecretStr

from app.autograding.processors import ProcessorFactory
#from app.autograding.highlighting.highlight_agent import find_criterion_violations
from app.autograding.highlighting.models import CriterionHighlights
from app.web.db.models import Submission, CriterionInstructionIDs
from app.web.utils import logger


def validate_submission_for_highlighting(submission: Submission) -> None:

    if len(submission.attachments) == 0:
        raise ValueError("No attachments found in submission")
    
    if len(submission.attachments) > 1:
        raise ValueError("Only one attachment is supported for highlighting violations")
    
    attachment = submission.attachments[0]
    if attachment.content_type != "application/pdf":
        raise ValueError(f"Unsupported file type: {attachment.content_type}")


def build_submission_file_path(submission: Submission, sub_dirs: List[str]) -> Path:

    attachment = submission.attachments[0]
    filename = f"{submission.user_id}_{submission.id}_{attachment.filename}"
    return Path(f"downloads/{'/'.join(sub_dirs)}/{filename}")


def find_cross_page_text(page, next_page, violating_text):
    """Find text that might span across two pages"""
    words = violating_text.split()
    
    # Only try for longer text (3+ words)
    if len(words) < 3:
        return []
    
    for split_idx in range(1, len(words)):
        first_part = " ".join(words[:split_idx])
        second_part = " ".join(words[split_idx:])
        
        first_matches = page.search_for(first_part)
        second_matches = next_page.search_for(second_part)
        
        if first_matches and second_matches:
            for first_rect in first_matches:
                for second_rect in second_matches:
                    if (first_rect.y1 > page.rect.height * 0.7 and  # Near bottom
                        second_rect.y0 < next_page.rect.height * 0.3):  # Near top
                        return [(first_rect, second_rect)]
    
    return []


def highlight_violations_in_pdf(
    pdf_path: Path,
    criterion_highlights: CriterionHighlights,
    output_path: Path
) -> dict:
    
    """PDF highlighter that highlights violations in yellow."""
    if not criterion_highlights.highlights:
        logger.warning("No violations to highlight")
        return {
            "violations_found": 0,
            "highlights_added": 0,
            "output_file": str(output_path)
        }

    if not pdf_path.exists():
        raise FileNotFoundError(f"PDF file not found: {pdf_path}")
    
    try:
        doc = fitz.open(str(pdf_path))
        highlights_added = 0
        
        for highlight_span in criterion_highlights.highlights:
            found_this_violation = False
            
            for page_num in range(len(doc)):
                page = doc[page_num]

                context_rects = page.search_for(highlight_span.context)
                violation_rects = page.search_for(highlight_span.violating_text)
                
                # Highlight violations that intersect with any context
                for violation_rect in violation_rects:
                    for context_rect in context_rects:
                        if context_rect.intersects(violation_rect):

                            highlight = page.add_highlight_annot(violation_rect)
                            highlight.set_colors(stroke=(1.0, 1.0, 0.0))
                            
                            highlight.update()
                            highlights_added += 1
                            logger.info(f"Added contextual highlight on page {page_num + 1}: '{highlight_span.violating_text[:50]}...'")
                            found_this_violation = True
                            break
            
            # If no exact matches found, try cross-page detection
            if not found_this_violation:
                logger.info(f"No exact match found, trying cross-page detection for: '{highlight_span.violating_text[:50]}...'")
                
                for page_num in range(len(doc) - 1):
                    current_page = doc[page_num]
                    next_page = doc[page_num + 1]
                    
                    cross_page_instances = find_cross_page_text(
                        current_page, next_page, highlight_span.violating_text
                    )
                    
                    if cross_page_instances:
                        found_this_violation = True
                        for rects in cross_page_instances:

                            for page_idx, rect in [(page_num, rects[0]), (page_num + 1, rects[1])]:
                                page = doc[page_idx]
                                highlight = page.add_highlight_annot(rect)
                                highlight.set_colors(stroke=(1.0, 1.0, 0.0))
                                
                                highlight.update()
                                highlights_added += 1
                                logger.info(f"Added cross-page highlight on page {page_idx + 1}")
            
            if not found_this_violation:
                logger.warning(f"Violation text not found anywhere: '{highlight_span.violating_text[:50]}...'")
        
        #doc.save(str(output_path))
        doc.close()
                
        return {
            "violations_found": criterion_highlights.total_violations,
            "highlights_added": highlights_added,
            "output_file": str(output_path)
        }
        
    except Exception as e:
        logger.error(f"Error highlighting PDF: {str(e)}")
        raise 


def highlight_document_violations(
    submission: Submission,
    guideline: List[CriterionInstructionIDs],
    assignment_id: str,
    openai_key: Optional[SecretStr] = None
) -> Dict[str, dict]:

    validate_submission_for_highlighting(submission)
    
    processor = ProcessorFactory.get_processor(submission.submission_type)
    content = processor.process(submission)
    
    sub_dirs = [str(assignment_id)]
    file_path = build_submission_file_path(submission, sub_dirs)
    
    all_violations = {}
    
    for criterion in guideline:
        logger.info(f"Processing criterion: {criterion.criterion}")
        
        #violations = find_criterion_violations(content, criterion, openai_key) -> TODO: Next Feature
        violations = ['temp']

        output_path = Path(f"test_{criterion.criterion}.pdf")
        highlighting_result = highlight_violations_in_pdf(
            pdf_path=file_path,
            criterion_highlights=violations,
            output_path=output_path
        )
        
        all_violations[criterion.criterion] = highlighting_result
    
    return all_violations 