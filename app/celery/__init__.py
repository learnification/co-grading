from celery import Celery
from dotenv import load_dotenv
import os

load_dotenv()

celery_app = Celery(
    "Canvas FeedbackAI",
    broker=os.environ.get("REDIS_URI"),
    backend=os.environ.get("REDIS_URI"),
    broker_connection_retry_on_startup=True,
    task_track_started=True,
    include=["app.web.tasks"],
)

celery_app.conf.update(
    result_expires=3600 * 24 * 7,  # 1 week
)
