from abc import ABC, abstractmethod
from app.web.db.models import Submission


class SubmissionProcessor(ABC):
    @abstractmethod
    def process(self, submission: Submission) -> str:
        """
        Process the submission and return the extracted content.

        Args:
            submission (Submission): The student's submission.

        Returns:
            str: The processed content.
        """
        pass
