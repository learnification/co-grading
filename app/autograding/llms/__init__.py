from functools import partial

from pydantic import SecretStr
from .ollama import build_llm, build_openrouter_llm, build_openai_gpt5_mini
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

def get_gpt_map():
    """Return the OpenAI GPT models map."""
    return {
        "gpt-5-mini": build_openai_gpt5_mini
    }

def build_llm_for_task(llm_name: str, openai_token: SecretStr = None, streaming: bool = False):
    """Centralized LLM factory that handles token logic"""

    if openai_token and llm_name in llm_map_gpt:
        builder = llm_map_gpt[llm_name]
        return builder(streaming=streaming, api_key=openai_token.get_secret_value())
    else:
        builder = llm_map[llm_name]
        return builder(streaming=streaming)

def select_llm_map(openai_token: SecretStr = None):
    """Select the appropriate LLM map based on whether OpenAI token is provided."""
    return llm_map_gpt if openai_token else llm_map

llm_map = get_llm_map()
llm_map_gpt = get_gpt_map()
