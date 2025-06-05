# FeedbackAI Backend

![Python Version](https://img.shields.io/badge/python-3.12%2B-blue.svg)

## Introduction

FeedbackAI is a privacy-centric AI autograding solution integrated with the Canvas Learning Management System (LMS). Designed to handle large volumes of student assignments efficiently, FeedbackAI leverages locally deployed Large Language Models (LLMs) to provide personalized feedback while ensuring strict compliance with data privacy regulations.

## Features

- **Scalable Server**: Efficiently handles multiple grading requests.
- **Asynchronous Workers with Celery**: Processes grading tasks in the background to ensure smooth performance.
- **Redis Integration**: Utilizes Redis as a message broker and for fast data storage and retrieval.
- **Ollama Model Integration**: Incorporates advanced language models (Llama 3.2 via Ollama) for enhanced feedback analysis.
- **Privacy Compliance**: Ensures data privacy through local deployment and multi-layer data masking.
- **Modular Architecture**: Easy to maintain and extend, supporting future enhancements and scalability.
- **Chrome Extension Integration**: Seamlessly integrates with Canvas LMS via a Chrome extension for a user-friendly grading experience.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Python 3.12+**: Make sure Python is installed on your system.
- **Redis**: Installed and running on your machine.
- **Ollama**: Installed on your system to utilize the necessary language models.
- **Celery**: Installed to manage asynchronous tasks.

## Setup

Follow these steps to set up the project locally.

### 1. Clone the Repository and Create a Virtual Environment

First, clone the repository and navigate to the project directory:

```bash
# Clone the repository
git clone https://github.com/learnification/co-grading.git
cd co-grading
```

Navigate to the backend directory, create a virtual environment and activate it:

> **Note:** All Python-related setup and commands should be run from inside the `backend` directory.

```bash
## cd into backend
cd backend

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

#### Additional Dependencies:

In addition to the requirements, you may need to install Celery with Redis support and have Redis running on your local server with port 6379. Follow these steps:

1. Install Celery with Redis:

```bash
pip install celery[redis]
```

2. Install Redis:

```bash
# On macOS (using Homebrew):
brew install redis
brew services start redis

# On Linux (using apt):
sudo apt-get update
sudo apt-get install redis-server
sudo systemctl enable redis-server.service
sudo systemctl start redis-server.service
```

3. Configure Redis:

Ensure Redis is running on port 6379. If you need to change the configuration, you can edit the `REDIS_URI` in the .env file.

Test the connection:

```bash
redis-cli ping
```

It should return `PONG`.

### 3. Install Ollama and Download Models

Ensure you have Ollama installed on your system. Follow these steps to install the required model:

1. Install Ollama:
   Visit the [Ollama website](https://ollama.ai/) and follow the installation instructions for your operating system.

2. Download the Required Model:
   Once Ollama is installed, download the specific model needed for FeedbackAI Backend.

```bash
ollama pull llama3.2
ollama pull llama3.2:3b-instruct-fp16
ollama pull nomic-embed-text
```

3. Verify the Installation:

Ensure the model is correctly installed by listing the available models:

```bash
ollama list
```

# Running the Application

The application consists of three main components: the server, the Celery worker, and Redis. Each needs to be running for the app to function correctly.

1. Activate the virtual environment:

```bash
# On macOS, WSL, Linux:
source .venv/bin/activate

# On Windows:
.\.venv\Scripts\activate
```

2. Start the server and Celery worker in separate terminal windows:

```bash
# Ensure Redis is running, if not already started
redis-server

# Start the server
inv dev

# Start the Celery worker
inv devworker
```

Note: Redis should be running before starting the Celery worker and the server to ensure proper communication between components.
