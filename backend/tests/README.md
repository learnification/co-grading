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
3. **Redis**: Redis server must be running for Celery
   > Check: redis-cli ping
4. **Database**: SQLite database will be created automatically for tests
5. **Ollama**: For integration tests, ensure Ollama is running locally with your preferred LLM models

### Unit Tests

```bash
# Run only unit tests
python -m pytest tests/unit

# Run with verbose output
python -m pytest tests/unit -v

# Run with print statement output
python -m pytest tests/unit -s

# Run specific test file
python -m pytest tests/unit/web/endpoints/test_assignment_views.py

# Run specific test function
python -m pytest tests/unit/web/test_api.py::test_set_evaluation_components
```

### Integration Tests

1. Terminal 1: Start the test Celery Worker

```bash
inv testworker
```

2. Terminal 2: Run Tests

```bash
# Run all integration tests (Need Local LLM Setup)
inv slow-integration-tests
```

> **Note**: For Integration tests, you must have Ollama running locally with your preferred LLM models.

## Best Practices

### Writing Tests

1. **Test Independence**: Each test should be able to run in isolation
2. **Clear Naming**: Test names should describe what they're testing
3. **Arrange-Act-Assert**: Structure tests with clear sections
4. **Mock External Dependencies**: Unit tests should not make real API calls
5. **Realistic Test Data**: Use data that matches production scenarios

### Running Tests

1. **Run Unit Tests First**: Unit tests are fast and catch most issues
2. **Check Integration Tests**: Run integration tests before deployment
3. **Monitor Test Output**: Use `-v -s` for detailed output during debugging
4. **Use Specific Commands**: Run specific test files or functions for focused testing

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

3. **LLM Connection Issues**

   ```
   Error: LLM service not available
   Solution: Ensure Ollama is running for integration tests
   ```

## Contributing

When adding new tests:

1. **Follow Naming Conventions**: Use descriptive test names
2. **Add Appropriate Markers**: Mark tests as `@pytest.mark.slow` if they take time
3. **Update This README**: Document any new test categories or requirements
4. **Ensure Independence**: Tests should not depend on each other
5. **Add Documentation**: Include docstrings explaining what each test verifies
