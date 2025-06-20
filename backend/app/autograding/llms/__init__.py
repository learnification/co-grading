from functools import partial
from .ollama import build_llm

llm_map = {
    "llama3.2": partial(build_llm, model="llama3.2"),
    "llama3.2:3b-instruct-fp16": partial(build_llm, model="llama3.2:3b-instruct-fp16"),
}
