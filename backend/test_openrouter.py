#!/usr/bin/env python3
"""
Test script for OpenRouter integration
"""
import os
from dotenv import load_dotenv
from app.autograding.llms import llm_map

# Load environment variables
load_dotenv()

def test_openrouter():
    """Test the OpenRouter LLM integration"""
    try:
        # Get the OpenRouter LLM
        llm = llm_map["openrouter-llama3.3-70b"]()
        
        # Test a simple prompt
        response = llm.invoke("Hello! Please respond with 'OpenRouter is working in spanish'")
        print("✅ OpenRouter test successful!")
        print(f"Response: {response.content}")
        
    except Exception as e:
        print(f"❌ OpenRouter test failed: {e}")
        print("Make sure your OPENROUTER_API_KEY is set in .env")

if __name__ == "__main__":
    test_openrouter() 