# FeedbackAI Backend

![Python Version](https://img.shields.io/badge/python-3.12%2B-blue.svg)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Python 3.12+**: Make sure Python is installed on your system.
- **OpenAI API**: Ensure you have a token for the OpenAI API.

## Setup

Follow these steps to set up the project locally.

### 1. Clone the Repository and Create a Virtual Environment

First, clone the repository and navigate to the project directory:

```bash
# Clone the repository
git clone https://github.com/learnification/co-grading.git
cd co-grading
```

```bash
# Create the virtual environment
python3 -m venv .venv

# On macOS, WSL, Linux:
source .venv/bin/activate

# On Windows:
.\.venv\Scripts\activate
```

### 2. Install Dependencies

With the virtual environment activated, install the necessary packages:

```bash
pip install -r requirements.txt
```

# Running the Application

1. Ensure your virtual environment is activated (if not already, follow below):

```bash
# On macOS, WSL, Linux:
source .venv/bin/activate

# On Windows:
.\.venv\Scripts\activate
```

2. Start the FastAPI server:

```bash
# Start the server
inv dev
```
