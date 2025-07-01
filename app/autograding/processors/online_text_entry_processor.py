from app.autograding.processors.base import SubmissionProcessor
from app.web.db.models import Submission
from bs4 import BeautifulSoup


class OnlineTextEntryProcessor(SubmissionProcessor):
    def process(self, submission: Submission) -> str:
        """
        Process online text entry submissions by returning the submission body.

        Args:
            submission (Submission): The student's submission.

        Returns:
            str: The submission text.
        """
        soup = BeautifulSoup(submission.body, "html.parser")
        for tag in soup(["script", "style", "link"]):
            tag.decompose()
        text = soup.get_text(separator="\n", strip=True)

        return text
