from typing import List, Optional, Tuple
from app.autograding.models import GradingArgs
from app.autograding.llms import llm_map
from app.autograding.vector_stores import get_vectorstore
from langchain_core.prompts import ChatPromptTemplate

from app.web.utils import logger


def search_knowledge_base(
    queries: List[str],
    grading_args: GradingArgs,
    llm_name: str,
    *,
    k=3,
) -> List[Tuple[str, str]]:
    """
    Search the knowledge base for relevant documents based on the given search arguments.

    Args:
        queries (List[str]): A list of search queries to retrieve relevant documents.
        grading_args (GradingArgs): The grading arguments containing task ID and other configurations.
        k (int, optional): The number of documents to retrieve per query. Defaults to 3.

    Returns:
        List[Tuple[str, str]]: A list of tuples where each tuple contains the query and its corresponding response.
    """
    prompt_template = ChatPromptTemplate.from_template(
        """
        Answer the following question based on the given context.
        Do not need to give any feedback to the context, just answer the question.

        QUESTION:{query}
        CONTEXT:{document}

        OUTPUT ANSWER: """
    )
    llm = llm_map[llm_name](streaming=False)

    vectorstore = get_vectorstore(grading_args)
    if not vectorstore:
        return []

    results: List[Tuple[str, str]] = []
    for query in queries:
        try:
            similar_documents = vectorstore.similarity_search(query, k=k)
            if not similar_documents:
                results.append((query, ""))
                continue

            # Concatenate all retrieved documents into a single context string
            context = "\n\n".join([doc.page_content for doc in similar_documents])

            # Format the prompt with the query and context
            formatted_prompt = prompt_template.format(query=query, document=context)

            # Invoke the LLM to get the response
            llm_response = llm.invoke(formatted_prompt)

            # Extract the content from the LLM response
            answer: Optional[str] = getattr(llm_response, "content", None)

            if answer is None:
                answer = ""

            results.append((query, answer.strip()))
        except Exception as e:
            logger.error(f"Error retrieving documents: {e}")

    return results
