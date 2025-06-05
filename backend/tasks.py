from invoke import task
import os


@task
def dev(ctx):
    ctx.run(
        "uvicorn app.web:app --reload --port 8000",
        pty=os.name != "nt",
        env={"APP_ENV": "development"},
    )


@task
def devworker(ctx):
    ctx.run(
        "watchmedo auto-restart --directory=./app --pattern=*.py --recursive -- celery -A app.celery.celery_app worker --concurrency=3 --loglevel=INFO --pool=solo",
        pty=os.name != "nt",
        env={"APP_ENV": "development"},
    )
