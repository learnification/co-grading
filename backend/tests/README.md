# Tests

This directory contains the complete test suite for the Canvas FeedbackAI backend, including unit tests and integration tests.

## Test Structure

```
tests/
├── unit/                    # Unit tests for individual components
│   ├── web/                # Web layer unit tests
│   │   ├── endpoints/      # API endpoint tests
│   │   ├── tasks/          # Celery task tests
│   │   └── test_api.py     # API utility tests
│   └── ...                 # Other unit test (autograding to be added next)
├── integration/            # Integration tests for end-to-end workflows
│   ├── test_integration_slow.py  # Real LLM integration tests
│   └── conftest.py         # Integration test configuration
└── README.md               # This file
```

## Test Categories

### Unit Tests (`tests/unit/`)

Fast, isolated tests that verify individual components work correctly:

- **API Endpoints**: Test individual endpoints with mocked dependencies
- **Celery Tasks**: Test task logic with mocked external services
- **Database Models**: Test data validation and persistence
- **Business Logic**: Test core application logic in isolation

### Integration Tests (`tests/integration/`)

End-to-end tests that verify the complete system works together:

- **Real LLM Integration**: Tests using actual LLM services
- **Celery Worker Integration**: Tests with real background task processing
- **Database Integration**: Tests with real database operations
- **API Integration**: Complete request-to-response workflows

## Running Tests

### Prerequisites

1. **Python Environment**: Ensure you're in the correct virtual environment
2. **Dependencies**: Install test dependencies with `pip install -r requirements.txt`
3. **Redis**: Redis server must be running for Celery (`redis-cli ping`)
4. **Database**: SQLite database will be created automatically for tests
5. **Ollama** (for local testing): Ensure Ollama is running locally with correct models

### Unit Tests

```bash
# Run only unit tests
python -m pytest tests/unit

# Run with verbose output and coverage
python -m pytest tests/unit -v --cov=app --cov-report=term-missing

# Run with print statement output
python -m pytest tests/unit -s

# Run specific test file
python -m pytest tests/unit/web/endpoints/test_assignment_views.py

# Run specific test function
python -m pytest tests/unit/web/test_api.py::test_set_evaluation_components
```

### Integration Tests

The application supports two testing modes:

#### Local Testing (Recommended for Development)

**Setup:**

```bash
# Start Redis (macOS, homebrew)
brew services start redis

# Start Redis (linux)
sudo systemctl start redis-server.service

# Ensure Redis is running
redis-cli ping

# Start Ollama service
ollama serve

# Download the models
ollama pull llama3.2
ollama pull llama3.2:3b-instruct-fp16
```

**Run Tests:**

```bash
# Terminal 1: Start test celery worker
invoke testworker

# Terminal 2: Run integration tests
invoke slow-integration-tests
```

**Benefits:**

- ✅ No cloud API usage
- ✅ Faster response times
- ✅ No daily request limits
- ✅ Works offline

#### Testing using API (Mainly for CI/CD)

**Setup:**

1. Set `OPENROUTER_API_KEY` = to your API key for `llama-3.3-70b-instruct:free` model in `.env`

2. Ensure Redis is running

```bash
redis-cli ping
```

**Run Tests:**

```bash
# Terminal 1: Start test celery worker
TEST_LLM_TYPE=cloud invoke testworker

# Terminal 2: Run integration tests
TEST_LLM_TYPE=cloud invoke slow-integration-tests
```

**Benefits:**

- ✅ Consistent with CI/CD environment
- ✅ No local setup required
- ⚠️ Consumes daily API quota

## Best Practices

### Running Tests

1. **Run Unit Tests First**: Unit tests are fast and catch most issues
2. **Use Local Testing for Development**
3. **Check Integration Tests**
4. **Monitor Test Output**: Use `-v -s` for detailed output during debugging
5. **Use Specific Commands**: Run specific test files or functions for focused testing

### Debugging Tests

1. **Use Print Statements**: Add `print()` statements and use `-s` flag
2. **Check Test Database**: Inspect `test.sqlite` after integration tests
3. **Review Logs**: Check application logs for detailed error information
4. **Isolate Issues**: Run individual tests to isolate problems

## Troubleshooting

### Common Issues

1. **Celery Workers Not Running**

   ```
   Error: Task status remains PENDING
   Solution: Start Celery workers with `invoke testworker`
   ```

2. **Redis Connection Issues**

   ```
   Error: Celery broker connection failed
   Solution: Ensure Redis is running and accessible
   ```

3. **LLM Connection Issues (Local)**

   ```
   Error: LLM service not available
   Solution: Ensure Ollama is running for local integration tests
   ```

4. **LLM Connection Issues (Cloud)**

   ```
   Error: OPENROUTER_API_KEY not set
   Solution: Set OPENROUTER_API_KEY environment variable for cloud testing
   ```

5. **Wrong LLM Mode**
   ```
   Error: Unexpected LLM behavior
   Solution: Check TEST_LLM_TYPE environment variable (local vs cloud)
   ```
