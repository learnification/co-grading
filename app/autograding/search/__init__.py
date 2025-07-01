from langchain_community.tools import DuckDuckGoSearchRun


def web_search(query: str) -> str:
    search = DuckDuckGoSearchRun()
    try:
        return search.invoke(query)
    except Exception as e:
        return None
