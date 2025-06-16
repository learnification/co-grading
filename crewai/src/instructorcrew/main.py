#!/usr/bin/env python
import sys
import warnings

from datetime import datetime

from instructorcrew.crew import Instructorcrew

warnings.filterwarnings("ignore", category=SyntaxWarning, module="pysbd")

# This main file is intended to be a way for you to run your
# crew locally, so refrain from adding unnecessary logic into this file.
# Replace with inputs you want to test with, it will automatically
# interpolate any tasks and agents information

def run():
    """
    Run the crew.
    
    inputs = {
        'topic': 'AI LLMs',
        'current_year': str(datetime.now().year)
    }
    """

    sub = """
A Content Script is a part of Chrome extension developement that allows the extention to read
or modify the contents of a web page the user visits. Conttent Scripts are injected into web
pages and run in the context of that page, enabling them to interract directly with the page's
DOM and execute JavaScript as if it were part of the page itself. They are used for tasks like
DOM manipualtion, page analyis, or adding new functionality to web pages. In contrast, a
Background Script runs in the backgroud, independant of any spcific web page, and acts as the
central processing unit of the extention. It can manage tasks accross different tabs and
windows, listen for browser evnts, and manage the extension's lifecycle. Background Scripts do
not have direct acces to the content of web pages like Content Scripts do, but they can
comunicate with Content Scripts to exchage information or trigger actions on the web page.
"""

    rubric = """
    Correctness (10 Points):
        - 10 Points
        - 6 Points
        - 0 Points
    Spellings (5 Points):
        - 5 Points: No Spelling Errors
        - 3 Points: Few Spelling Errors
        - 0 Points: Several Spelling Errors
"""

    inputs = {
        'course': 'Intro to Web Dev',
        'strictness_level': 'moderate',
        'feedback_length': '2-3 sentences',
        'feedback_tone': 'formal',
        'rubric': rubric,
        'submission': sub,
        'assignment': 'In the context of Chrome extension development, what is a Content Script, and how does it differ from a Background Script?',
    }
    
    try:
        Instructorcrew().crew().kickoff(inputs=inputs)
    except Exception as e:
        raise Exception(f"An error occurred while running the crew: {e}")


def train():
    """
    Train the crew for a given number of iterations.
    """
    inputs = {
        "topic": "AI LLMs",
        'current_year': str(datetime.now().year)
    }
    try:
        Instructorcrew().crew().train(n_iterations=int(sys.argv[1]), filename=sys.argv[2], inputs=inputs)

    except Exception as e:
        raise Exception(f"An error occurred while training the crew: {e}")

def replay():
    """
    Replay the crew execution from a specific task.
    """
    try:
        Instructorcrew().crew().replay(task_id=sys.argv[1])

    except Exception as e:
        raise Exception(f"An error occurred while replaying the crew: {e}")

def test():
    """
    Test the crew execution and returns the results.
    """
    inputs = {
        "topic": "AI LLMs",
        "current_year": str(datetime.now().year)
    }
    
    try:
        Instructorcrew().crew().test(n_iterations=int(sys.argv[1]), eval_llm=sys.argv[2], inputs=inputs)

    except Exception as e:
        raise Exception(f"An error occurred while testing the crew: {e}")
