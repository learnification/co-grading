from functools import partial
from .ollama import build_llm, build_openrouter_llm
import os


def get_llm_map():
    """Return the appropriate LLM map based on environment."""
    if os.getenv("APP_ENV") == "test":
        # Allow explicit control over test LLM type
        test_llm_type = os.getenv("TEST_LLM_TYPE", "local")

        if test_llm_type == "local":
            # Use local Ollama for testing
            return {
                "llama3.2": partial(build_llm, model="llama3.2"),
                "llama3.2:3b-instruct-fp16": partial(build_llm, model="llama3.2:3b-instruct-fp16"),
            }
        else:
            # Use cloud API for testing (default for CI/CD)
            return {"openrouter-llama3.3-70b": build_openrouter_llm}
    else:
        return {
            "llama3.2": partial(build_llm, model="llama3.2"),
            "llama3.2:3b-instruct-fp16": partial(build_llm, model="llama3.2:3b-instruct-fp16"),
        }


llm_map = get_llm_map()
