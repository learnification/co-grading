import os
from typing import Optional
from langchain_chroma import Chroma
from langchain_ollama import OllamaEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from app.autograding.documents.pdf_loader import load_pdf
from app.autograding.models import GradingArgs
from app.web.utils import logger
from chromadb.config import Settings


def get_vectorstore(grading_args: GradingArgs) -> Optional[Chroma]:
    try:
        # Initialize embeddings
        embeddings = OllamaEmbeddings(model="nomic-embed-text")
        # Load and split the PDF document
        pdf_loader = load_pdf(grading_args.pdf_path)
        documents = pdf_loader.load_and_split()

        # Split documents into manageable chunks
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1024, chunk_overlap=64
        )
        texts = text_splitter.split_documents(documents)

        # Define the directory to persist the vector store
        persist_directory = os.path.join("vector_database", grading_args.task_id)

        if os.path.exists(persist_directory):
            vectorstore = Chroma(
                embedding_function=embeddings,
                persist_directory=persist_directory,
                client_settings=Settings(
                    anonymized_telemetry=False,
                    is_persistent=True,
                ),
            )
        else:
            vectorstore = Chroma.from_documents(
                texts,
                embedding=embeddings,
                persist_directory=persist_directory,
                client_settings=Settings(
                    anonymized_telemetry=False,
                    is_persistent=True,
                ),
            )

        return vectorstore
    except Exception as e:
        logger.error(f"Error initializing vector store: {e}")
        return None
