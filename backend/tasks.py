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


@task
def testworker(ctx):
    """Start Celery worker for automated tests."""
    ctx.run(
        "celery -A app.celery.celery_app worker --concurrency=3 --loglevel=INFO --pool=solo",
        pty=os.name != "nt",
        env={
            "REDIS_URI": "redis://localhost:6379/1",  # Test Redis database
            "DB_URI": "sqlite:///test.sqlite",        # Test SQLite database
            "APP_ENV": "test",
        },
    )


@task
def slow_integration_tests(ctx):
    """Run integration tests with test worker setup instructions."""
    print("🚀 Starting slow integration tests...")
    print("📝 Make sure to run 'invoke testworker' in another terminal first!")
    print("⏳ Running tests...")
    ctx.run(
        "python -m pytest tests/integration/test_integration_slow.py -v -s", 
        pty=os.name != "nt",
        env={
            "REDIS_URI": "redis://localhost:6379/1",  # Test Redis database
            "DB_URI": "sqlite:///test.sqlite",        # Test SQLite database
            "APP_ENV": "test",
        },
    )


