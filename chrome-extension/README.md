# FeedbackAI Chrome Extension

## Introduction

The **FeedbackAI Chrome Extension** seamlessly integrates with the Canvas Learning Management System (LMS) to provide educators with an efficient, AI-powered grading tool. This extension allows instructors to automatically grade assignments, generate personalized feedback, and streamline the grading workflow directly within the Canvas interface.

## Features

- **Seamless Canvas Integration**: Easily access FeedbackAI functionalities within the Canvas LMS.
- **Automated Grading**: Automatically grade text-based PDF assignments using advanced Large Language Models (LLMs).
- **Personalized Feedback**: Generate detailed, rubric-aligned feedback tailored to each student's submission.
- **User-Friendly Interface**: Intuitive design for effortless interaction and grading management.
- **Continuous Improvement**: Incorporates user feedback to enhance grading accuracy and relevance over time.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Google Chrome Browser**: Version 131 or higher is recommended.
- **Backend Server**: Ensure the FeedbackAI backend server is set up and running.

## Setup

Follow these steps to set up the FeedbackAI Chrome Extension locally.

### 1. Clone the Repository

First, clone the repository to your local machine:

### 2. Load the Extension into Chrome

After cloning the extension, load it into your Chrome browser as an unpacked extension.

1. Open Chrome Extensions Page:
   - Navigate to chrome://extensions/ in your Chrome browser.
2. Enable Developer Mode:
   - Toggle the Developer mode switch in the top-right corner of the Extensions page.
3. Load Unpacked Extension:
   - Click on the Load unpacked button.
   - In the file dialog, navigate to the `dist` directory of the cloned repository and select it.
4. Verify Installation:
   - The FeedbackAI extension should now appear in your list of installed extensions.
   - You may see its icon in the Chrome toolbar.

### 3. Configuration

After installing the extension, you need to configure it to connect with your Canvas LMS.

1. Open Extension Options:
   - Click on the FeedbackAI extension icon in the Chrome toolbar.
   - Click on the gear icon or navigate to the Options page from the extension’s dropdown menu.
2. Provide Canvas URL and API Token:
   - Canvas URL: Enter your Canvas LMS URL (e.g., https://northeastern.instructure.com).
   - API Token: Enter your Canvas API Token. You can find this token in your Canvas profile settings.
3. Save Settings:
   - After entering the required information, click Save to store your settings.
4. Fetch Courses and Assignments:
   - Once the settings are saved, the extension will automatically fetch your courses and assignment data from Canvas.
   - A popup will appear displaying your available courses and assignments.
5. Start Grading Assignments:
   - Select the assignment you wish to grade.
   - Click on the Autograde button to initiate the grading process.
   - Review the AI-generated feedback and adjust if necessary before submitting the grades back to Canvas.
