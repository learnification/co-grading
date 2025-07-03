from app.autograding.processors.base import SubmissionProcessor
from app.web.db.models import Submission
from app.autograding.documents import download_pdf, load_pdf, download_txt, load_txt


class OnlineUploadProcessor(SubmissionProcessor):
    def process(self, submission: Submission) -> str:
        """
        Process online upload submissions by downloading and extracting PDF/Text content.

        Args:
            submission (Submission): The student's submission.

        Returns:
            str: The concatenated text content extracted from all PDF/Text attachments.
        """
        content = ""
        for attachment in submission.attachments:
            filename = f"{submission.user_id}_{submission.id}_{attachment.filename}"
            sub_dirs = [str(submission.assignment_id)]

            if attachment.content_type == "application/pdf":
                pdf_path = download_pdf(attachment.url, filename=filename, sub_dirs=sub_dirs)
                content += load_pdf(pdf_path, extract_text=True)

            elif attachment.content_type == "text/plain":
                txt_path = download_txt(attachment.url, filename=filename, sub_dirs=sub_dirs)
                content += load_txt(txt_path, extract_text=True)

        return content
