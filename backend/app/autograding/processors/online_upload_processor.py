from app.autograding.processors.base import SubmissionProcessor
from app.web.db.models import Submission
from app.autograding.documents import download_pdf, load_pdf


class OnlineUploadProcessor(SubmissionProcessor):
    def process(self, submission: Submission) -> str:
        """
        Process online upload submissions by downloading and extracting PDF content.

        Args:
            submission (Submission): The student's submission.

        Returns:
            str: The concatenated text content extracted from all PDF attachments.
        """
        content = ""
        for attachment in submission.attachments:
            if attachment.content_type == "application/pdf":
                filename = f"{submission.user_id}_{submission.id}_{attachment.filename}"
                sub_dirs = [str(submission.assignment_id)]

                pdf_path = download_pdf(
                    attachment.url, filename=filename, sub_dirs=sub_dirs
                )
                content += load_pdf(pdf_path, extract_text=True)
        return content
