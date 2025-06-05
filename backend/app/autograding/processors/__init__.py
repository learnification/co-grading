from typing import Type, Dict
from app.autograding.processors.base import SubmissionProcessor
from app.autograding.processors.online_upload_processor import OnlineUploadProcessor
from app.autograding.processors.online_text_entry_processor import (
    OnlineTextEntryProcessor,
)
from app.web.db.models import SubmissionType


class ProcessorFactory:
    _processors: Dict[SubmissionType, Type[SubmissionProcessor]] = {
        SubmissionType.online_upload: OnlineUploadProcessor,
        SubmissionType.online_text_entry: OnlineTextEntryProcessor,
    }

    @classmethod
    def get_processor(cls, submission_type: SubmissionType) -> SubmissionProcessor:
        processor_class = cls._processors.get(submission_type)
        if not processor_class:
            raise ValueError(
                f"No processor found for submission type: {submission_type}"
            )
        return processor_class()
