import os
import instructor
from langchain_ollama import ChatOllama
from openai import OpenAI


def build_llm(streaming: bool, model: str):
    return ChatOllama(streaming=streaming, model=model)


def build_instructor():
    return instructor.from_openai(
        OpenAI(
            base_url=os.getenv("OLLAMA_API_URL", default="http://localhost:11434/v1"),
            api_key="ollama",
        ),
        mode=instructor.Mode.JSON,
    )
