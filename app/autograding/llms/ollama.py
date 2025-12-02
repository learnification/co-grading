import os
import instructor
from langchain_ollama import ChatOllama
from langchain_openai import ChatOpenAI
from openai import OpenAI


def build_llm(streaming: bool, model: str):
    return ChatOllama(streaming=streaming, model=model)


def build_openrouter_llm(streaming: bool = False):
    """Build an OpenRouter LLM using the free mistral model."""
    api_key = os.getenv("OPENROUTER_API_KEY")
    if not api_key:
        raise ValueError("OPENROUTER_API_KEY environment variable is required for testing")
    return ChatOpenAI(
        model="mistralai/mistral-small-3.2-24b-instruct:free",
        base_url="https://openrouter.ai/api/v1",
        api_key=api_key,
        temperature=0.1,
        max_retries=3,
    )


def build_openai_gpt5_mini(streaming: bool = False, api_key: str = None):
    """Build OpenAI GPT-5-mini with user-provided API key."""
    if not api_key:
        raise ValueError("OpenAI API key is required for GPT-5-mini")
    llm = ChatOpenAI(
        model="gpt-5-mini",
        api_key=api_key,
        temperature=1.0,  # gpt-5-mini only supports default temperature of 1
        max_retries=3
        # ,reasoning = {
        #     "effort" : "low"
        # }
    )

    return llm.bind(temperature=1.0)


def build_instructor():
    return instructor.from_openai(
        OpenAI(
            base_url=os.getenv("OLLAMA_API_URL", default="http://localhost:11434/v1"),
            api_key="ollama",
        ),
        mode=instructor.Mode.JSON,
    )
