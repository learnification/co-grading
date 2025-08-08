import fitz  # PyMuPDF
from pathlib import Path
from typing import Dict, List, Optional, Any
from pydantic import SecretStr
from app.web.utils.canvas import CanvasAPI
from app.autograding.processors import ProcessorFactory
from app.autograding.highlighting.highlight_agent import find_criterion_violations
from app.autograding.highlighting.models import CriterionHighlights
from app.web.db.models import Submission, CriterionInstructionIDs
from app.web.utils import logger
import time
import asyncio

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
    criterion_highlights: CriterionHighlights
) -> Dict[str, Any]:
    
    """PDF highlighter that highlights violations in yellow and returns bytes."""
    if not pdf_path.exists():
        raise FileNotFoundError(f"PDF file not found: {pdf_path}")
    
    try:
        doc = fitz.open(str(pdf_path))
        highlights_added = 0
        
        if criterion_highlights.highlights:
            for highlight_span in criterion_highlights.highlights:
                found_this_violation = False
                
                for page_num in range(len(doc)):
                    page = doc[page_num]

                    context_rects = page.search_for(highlight_span.context)
                    violation_rects = page.search_for(highlight_span.violating_text)
                    
                    if not violation_rects or not context_rects:
                        logger.info(f"No violations or context found on page {page_num + 1}")
                        continue
                    
                    for violation_rect in violation_rects:
                        for context_rect in context_rects:
                            if context_rect.intersects(violation_rect):
                                highlight = page.add_highlight_annot(violation_rect)
                                highlights_added += 1
                                highlight.set_colors(stroke=(1.0, 1.0, 0.0))
                                highlight.update()
                                found_this_violation = True
                                break
                    
                    if found_this_violation:
                        break
            
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
                            break
                
                if not found_this_violation:
                    logger.warning(f"Violation text not found anywhere: '{highlight_span.violating_text[:50]}...'")
        
        pdf_bytes = doc.tobytes()
        doc.close()
                
        return {
            "violations_found": criterion_highlights.total_violations if criterion_highlights.highlights else 0,
            "highlights_added": highlights_added,
            "pdf_bytes": pdf_bytes
        }
        
    except Exception as e:
        logger.error(f"Error highlighting PDF: {str(e)}")
        raise

def process_single_criterion(
    criterion: CriterionInstructionIDs,
    content: str,
    file_path: Path,
    canvas_api: CanvasAPI,
    openai_key: SecretStr,
    submission: Submission
) -> Dict[str, Any]:
    """Process a single criterion: LLM + highlighting"""
    criterion_start_time = time.time()
    logger.info(f"Processing criterion: {criterion.criterion}")
    
    violations = find_criterion_violations(content, criterion, openai_key)
    violations_found_time = time.time()
    logger.info(f"Criterion {criterion.criterion} took {(violations_found_time - criterion_start_time):.3f}s to find violations")
    highlighting_result = highlight_violations_in_pdf(
        pdf_path=file_path,
        criterion_highlights=violations
    )
    highlighting_time = time.time()
    logger.info(f"Criterion {criterion.criterion} took {(highlighting_time - violations_found_time):.3f}s to highlight")
    criterion_end_time = time.time()
    logger.info(f"Criterion {criterion.criterion} took {(criterion_end_time - criterion_start_time):.3f}s to process")
    
    return {
        "criterion_name": criterion.criterion,
        "criterion_id": criterion.id,
        "violations_found": highlighting_result["violations_found"],
        "highlights_added": highlighting_result["highlights_added"],
        "pdf_bytes": highlighting_result["pdf_bytes"],  # Include PDF bytes for background upload
        "assignment_id": submission.assignment_id,
        "user_id": submission.user_id
    }


async def process_single_criterion_async(
    criterion: CriterionInstructionIDs,
    content: str,
    file_path: Path,
    canvas_api: CanvasAPI,
    openai_key: SecretStr,
    submission: Submission
) -> Dict[str, Any]:
    """Async version using thread pool"""
    return await asyncio.to_thread(
        process_single_criterion,
        criterion, content, file_path, canvas_api, openai_key, submission
    )


async def highlight_document_violations_async(
    submission: Submission,
    guideline: List[CriterionInstructionIDs],
    canvas_api: CanvasAPI,
    openai_key: SecretStr
) -> List[Dict[str, Any]]:

    start_time = time.time()
    validate_submission_for_highlighting(submission)
    
    processor = ProcessorFactory.get_processor(submission.submission_type)
    content = processor.process(submission)
    
    sub_dirs = [str(submission.assignment_id)]
    file_path = build_submission_file_path(submission, sub_dirs)
    
    logger.info(f"Highlighting {len(guideline)} criteria in parallel")
    
    tasks = []

    for criterion in guideline:
        if criterion.enabled:
            tasks.append(
                process_single_criterion_async(
                    criterion, content, file_path, canvas_api, openai_key, submission
                )
            )
        else:
            logger.info(f"Criterion {criterion.criterion} disabled for highlighting")

    all_results = await asyncio.gather(*tasks)
    
    end_time = time.time()
    logger.info(f"Took {(end_time - start_time):.3f}s to highlight")
    return all_results

async def upload_highlighted_pdfs_async(canvas_api: CanvasAPI, all_results: List[Dict[str, Any]]) -> None:
    """Async function to upload all PDFs in parallel"""
    upload_start_time = time.time()
    logger.info(f"Starting highlight upload of {len(all_results)} PDFs")
    
    async def upload_single_pdf(result: Dict[str, Any]) -> None:
        """Upload a single PDF using thread pool"""
        await asyncio.to_thread(
            canvas_api.upload_pdf_file,
            assignment_id=result["assignment_id"],
            criterion_id=result["criterion_id"],
            user_id=result["user_id"],
            pdf_bytes=result["pdf_bytes"]
        )
    
    await asyncio.gather(*[upload_single_pdf(result) for result in all_results])
    
    upload_end_time = time.time()
    logger.info(f"Highlight upload completed in {upload_end_time - upload_start_time:.3f}s")