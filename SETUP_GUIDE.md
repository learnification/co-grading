# Complete Setup Guide for Co-Grading Tool
## For Non-Technical Users

This guide will walk you through setting up the Co-Grading tool from scratch, assuming you have no prior technical setup.

---

## Table of Contents
1. [What You'll Need](#what-youll-need)
2. [Step 1: Get the Code](#step-1-get-the-code)
3. [Step 2: Install Python](#step-2-install-python)
4. [Step 3: Install Redis](#step-3-install-redis)
5. [Step 4: Install Ollama](#step-4-install-ollama)
6. [Step 5: Set Up Python Environment](#step-5-set-up-python-environment)
7. [Step 6: Install Dependencies](#step-6-install-dependencies)
8. [Step 7: Configure Environment Variables](#step-7-configure-environment-variables)
9. [Step 8: Download Ollama Models](#step-8-download-ollama-models)
10. [Step 9: Run the Application](#step-9-run-the-application)
11. [Troubleshooting](#troubleshooting)

---

## What You'll Need

Before starting, you'll need:
- A computer with Windows, macOS, or Linux
- Internet connection
- Approximately 10-15 GB of free disk space (for Python, dependencies, and Ollama models)
- About 30-60 minutes for the complete setup

---

## Step 1: Get the Code

You can get the code in two ways. **Choose the method that works best for you:**

### Method A: Download as ZIP (No Git Required) - **Easier for Beginners**

This method doesn't require installing Git.

1. Go to the repository on GitHub: https://github.com/learnification/co-grading
2. Click the green **"Code"** button (near the top right of the page)
3. Click **"Download ZIP"**
4. The ZIP file will download to your Downloads folder (or wherever your browser saves downloads)
5. Extract the ZIP file:
   - **Windows:** Right-click the ZIP file → "Extract All" → Choose a location (e.g., `C:\Users\YourName\Documents`) → Click "Extract"
   - **macOS:** Double-click the ZIP file (it will extract automatically to the same location)
   - **Linux:** Right-click → "Extract Here" or use: `unzip co-grading-main.zip` in terminal
6. The extracted folder will be named `co-grading-main` (or similar)
7. You can rename it to `co-grading` if you want (optional, but recommended)
8. Navigate into the folder:
   - **Windows:** Open File Explorer, go to the folder, then right-click in an empty area → "Open in Terminal" or "Open PowerShell window here"
   - **macOS:** Open Terminal, then type: `cd ~/Downloads/co-grading-main` (adjust path if you extracted elsewhere)
   - **Linux:** Open Terminal, then type: `cd ~/Downloads/co-grading-main` (adjust path if needed)

**Note:** If you use this method, you won't be able to easily update the code later. To update, you'll need to download a new ZIP file and replace the old folder.

### Method B: Clone with Git (Better for Updates)

If you want to be able to update the code easily later, you'll need Git installed.

#### Install Git:

**Windows:**
1. Go to https://git-scm.com/download/win
2. Download the installer (it will be a `.exe` file)
3. Run the installer and click "Next" through all the prompts (default options are fine)
4. Click "Finish" when done
5. Restart your terminal/command prompt after installation

**macOS:**
1. Open Terminal (press `Cmd + Space`, type "Terminal", press Enter)
2. Type: `xcode-select --install`
3. Press Enter and follow the prompts
4. Wait for installation to complete

**Linux (Ubuntu/Debian):**
1. Open Terminal (press `Ctrl + Alt + T`)
2. Type: `sudo apt-get update && sudo apt-get install git -y`
3. Press Enter and enter your password when prompted

**Verify installation:** Open a terminal/command prompt and type `git --version`. You should see a version number like "git version 2.x.x".

#### Clone the Repository:

1. Open a terminal/command prompt
2. Navigate to where you want to save the project (e.g., your Documents folder):
   - **Windows:** `cd C:\Users\YourName\Documents`
   - **macOS/Linux:** `cd ~/Documents`
3. Clone the repository:
   ```
   git clone https://github.com/learnification/co-grading.git
   ```
4. Navigate into the project folder:
   ```
   cd co-grading
   ```

**Which method should you choose?**
- **Use Method A (ZIP)** if you just want to try it out and don't plan to update often
- **Use Method B (Git)** if you want to keep the code updated easily or plan to contribute

---

## Step 2: Install Python

Python is the programming language this tool uses. You need Python 3.12 or newer.

### Windows:
1. Go to https://www.python.org/downloads/
2. Download Python 3.12 or newer (look for the big yellow "Download Python" button)
3. Run the installer
4. **IMPORTANT:** On the first screen, check the box that says **"Add Python to PATH"** at the bottom
5. Click "Install Now" and wait for it to finish
6. Click "Close" when done
7. **Restart your terminal/command prompt** after installation

### macOS:
1. Go to https://www.python.org/downloads/
2. Download Python 3.12 or newer
3. Run the installer (`.pkg` file)
4. Follow the prompts and enter your password when asked
5. Click "Install" and wait for it to finish

### Linux (Ubuntu/Debian):
1. Open Terminal
2. Type: `sudo apt-get update && sudo apt-get install python3.12 python3.12-venv python3-pip -y`
3. Press Enter and enter your password when prompted
4. Wait for installation to complete

**Verify installation:** Open a terminal/command prompt and type:
- **Windows:** `python --version` or `py --version`
- **macOS/Linux:** `python3 --version`

You should see "Python 3.12.x" or higher. If you see an error, try restarting your terminal.

---

## Step 3: Install Redis

Redis is a database that the tool uses to manage background tasks. It needs to be running for the application to work.

### Windows:
Redis doesn't have an official Windows installer. You have two options:

**Option A: Use WSL (Windows Subsystem for Linux) - Recommended**
1. Open PowerShell as Administrator:
   - Press `Windows + X`
   - Click "Windows PowerShell (Admin)" or "Terminal (Admin)"
   - Click "Yes" if asked for permission
2. Type: `wsl --install`
3. Press Enter and wait for it to install
4. **Restart your computer** when prompted
5. After restart, open "Ubuntu" from the Start menu (it will be installed automatically)
6. Follow the Linux instructions below in the Ubuntu terminal

**Option B: Use Docker (Advanced)**
1. Install Docker Desktop from https://www.docker.com/products/docker-desktop
2. Start Docker Desktop and wait for it to fully start
3. Open a terminal and type:
   ```
   docker run -d -p 6379:6379 --name redis redis:latest
   ```
4. Redis will now be running in Docker
5. To start Redis later, just start Docker Desktop and run: `docker start redis`

### macOS:
1. Install Homebrew first (if you don't have it):
   - Open Terminal
   - Type: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
   - Press Enter and follow the prompts
   - Enter your password when asked
   - Wait for installation to complete (this may take several minutes)
2. Install Redis:
   ```
   brew install redis
   ```
3. Start Redis (it will start automatically on boot):
   ```
   brew services start redis
   ```

### Linux (Ubuntu/Debian):
1. Open Terminal
2. Type:
   ```
   sudo apt-get update
   sudo apt-get install redis-server -y
   ```
3. Press Enter and enter your password
4. Enable Redis to start automatically:
   ```
   sudo systemctl enable redis-server
   ```
5. Start Redis:
   ```
   sudo systemctl start redis-server
   ```

**Verify installation:** Open a terminal and type `redis-cli ping`. You should see `PONG` as the response. If you see an error, Redis is not running or not installed correctly.

---

## Step 4: Install Ollama

Ollama is a tool that runs AI models locally on your computer. The application needs this to work.

### Windows:
1. Go to https://ollama.ai/download
2. Download the Windows installer
3. Run the installer (`.exe` file)
4. Follow the prompts and click "Install"
5. Ollama will start automatically after installation
6. You should see an Ollama icon in your system tray (bottom right)

### macOS:
1. Go to https://ollama.ai/download
2. Download the macOS installer
3. Run the installer (`.dmg` file)
4. Drag Ollama to your Applications folder
5. Open Ollama from Applications (it will start automatically)
6. You may see a security warning - go to System Settings → Privacy & Security → click "Open Anyway"

### Linux:
1. Open Terminal
2. Type:
   ```
   curl -fsSL https://ollama.ai/install.sh | sh
   ```
3. Press Enter and wait for it to finish
4. Ollama will start automatically

**Verify installation:** Open a terminal and type `ollama --version`. You should see a version number. You can also type `ollama list` to see available models (it will be empty until you download models).

---

## Step 5: Set Up Python Environment

This creates an isolated Python environment for the project so it doesn't interfere with other Python projects.

1. Make sure you're in the `co-grading` folder (or `co-grading-main` if you downloaded as ZIP):
   - If you're not sure, type `pwd` (macOS/Linux) or `cd` (Windows) to see your current location
   - Navigate to the folder: `cd co-grading` (or `cd co-grading-main`)

2. Create the virtual environment:

   **Windows:**
   ```
   python -m venv .venv
   ```
   (If that doesn't work, try: `py -m venv .venv`)

   **macOS/Linux:**
   ```
   python3 -m venv .venv
   ```

3. Activate the virtual environment:

   **Windows (Command Prompt):**
   ```
   .venv\Scripts\activate
   ```

   **Windows (PowerShell):**
   ```
   .venv\Scripts\Activate.ps1
   ```
   (If you get an error about execution policy, run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`)

   **macOS/Linux:**
   ```
   source .venv/bin/activate
   ```

   **You'll know it's activated when you see `(.venv)` at the start of your terminal prompt.**

   Example: `(.venv) C:\Users\YourName\Documents\co-grading>`

---

## Step 6: Install Dependencies

This installs all the Python packages the tool needs. This will take 5-10 minutes.

1. Make sure your virtual environment is activated (you should see `(.venv)` in your terminal prompt)
2. Upgrade pip first (this ensures you have the latest version):
   ```
   pip install --upgrade pip
   ```
3. Install all dependencies:
   ```
   pip install -r requirements.txt
   ```
   This will download and install many packages. Be patient - it takes a while!

**Note:** If you see any errors about missing system libraries, you might need to install additional tools:

**Linux:**
```
sudo apt-get install build-essential python3-dev
```

**macOS:**
```
xcode-select --install
```

**Windows:** Usually not needed, but if you see errors about Visual C++, you may need to install "Microsoft C++ Build Tools" from Microsoft's website.

---

## Step 7: Configure Environment Variables

The application needs some configuration to run. You'll create a `.env` file in the project folder.

1. Make sure you're in the `co-grading` folder (the one that contains `requirements.txt`)
2. Create a new file named `.env` (yes, it starts with a dot - this is important!)
   
   **Windows:**
   - You can create it in Notepad or any text editor
   - When saving, make sure to save it as "All Files" type and name it exactly `.env` (not `.env.txt`)
   - Or in terminal: `type nul > .env` then `notepad .env`
   
   **macOS/Linux:**
   - In terminal: `touch .env` then `nano .env` or `code .env` (if you have VS Code)
   - Or use any text editor

3. Open the `.env` file in a text editor and add the following lines:

```env
# Ollama Configuration
OLLAMA_API_URL=http://localhost:11434
OLLAMA_MODEL_NAME=llama3.2:3b-instruct-fp16

# Redis Configuration
REDIS_URI=redis://localhost:6379/0

# Database Configuration
DB_URI=sqlite:///db.sqlite

# Optional: Server Configuration (you can leave these as default)
HOST=0.0.0.0
PORT=8000
DEBUG=True
```

4. Save the file

**Important Notes:**
- `OLLAMA_API_URL` should be `http://localhost:11434` if Ollama is running locally
- `REDIS_URI` should be `redis://localhost:6379/0` if Redis is running locally
- `DB_URI` uses SQLite (a file-based database), so no additional setup needed
- The `.env` file should be in the same folder as `requirements.txt`

---

## Step 8: Download Ollama Models

The application needs specific AI models to be downloaded. These are large files (several GB total), so make sure you have a good internet connection.

1. Make sure Ollama is running:
   - **Windows:** Check if Ollama icon is in system tray, or open Ollama from Start menu
   - **macOS:** Open Ollama from Applications
   - **Linux:** It should be running automatically, but you can check with `ollama list`

2. Open a terminal (you don't need the virtual environment activated for this)

3. Download the required models (this will take several minutes and download several GB):

```bash
ollama pull llama3.2
ollama pull llama3.2:3b-instruct-fp16
ollama pull nomic-embed-text
```

You can run these one at a time, or all together. Each command will show progress as it downloads.

4. Verify the models are installed:
```bash
ollama list
```

You should see all three models listed:
- `llama3.2`
- `llama3.2:3b-instruct-fp16`
- `nomic-embed-text`

---

## Step 9: Run the Application

The application has two parts that need to run: the main server and a background worker. You'll need **two separate terminal windows**.

### Start Redis (if not already running)

Make sure Redis is running before starting the application:

**Windows (WSL/Ubuntu):**
```bash
sudo service redis-server start
```

**macOS:**
```bash
brew services start redis
```
(If it's already running, this won't do anything - that's fine)

**Linux:**
```bash
sudo systemctl start redis-server
```

Verify Redis is running: `redis-cli ping` should return `PONG`.

### Start the Application

**Terminal 1 - Main Server:**
1. Navigate to the project folder: `cd co-grading` (or wherever you extracted/cloned it)
2. Activate the virtual environment:
   - **Windows:** `.venv\Scripts\activate`
   - **macOS/Linux:** `source .venv/bin/activate`
3. Start the server:
   ```
   inv dev
   ```
4. You should see output like:
   ```
   INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
   INFO:     Started reloader process
   ```
5. **Keep this terminal open** - don't close it!

**Terminal 2 - Background Worker:**
1. Open a **new** terminal window
2. Navigate to the project folder: `cd co-grading` (same location as Terminal 1)
3. Activate the virtual environment:
   - **Windows:** `.venv\Scripts\activate`
   - **macOS/Linux:** `source .venv/bin/activate`
4. Start the worker:
   ```
   inv devworker
   ```
5. You should see output indicating the Celery worker is running:
   ```
   celery@hostname v5.x.x
   ...
   [INFO] celery@hostname ready.
   ```
6. **Keep this terminal open** - don't close it!

### Access the Application

Once both terminals are running:
- The API will be available at: `http://localhost:8000`
- API documentation (Swagger UI) will be at: `http://localhost:8000/docs`
- Alternative API docs (ReDoc) will be at: `http://localhost:8000/redoc`

Open your web browser and go to `http://localhost:8000/docs` to see the API interface and test the endpoints.

**To stop the application:** Press `Ctrl + C` in both terminal windows.

---

## Troubleshooting

### "Python not found" or "python3: command not found"
- **Windows:** Make sure you checked "Add Python to PATH" during installation. You might need to restart your terminal or computer.
- **macOS/Linux:** Try `python3` instead of `python`
- Verify installation: `python --version` or `python3 --version`

### "pip: command not found"
- Make sure Python is installed correctly
- Try `python3 -m pip` instead of just `pip`
- Make sure your virtual environment is activated

### "Redis connection refused"
- Make sure Redis is running: `redis-cli ping` should return `PONG`
- On Windows with WSL, make sure you're running commands in the WSL/Ubuntu terminal, not PowerShell
- Start Redis using the commands in Step 9

### "Ollama connection refused"
- Make sure Ollama is running
- **Windows/macOS:** Check if the Ollama app is open (look for it in system tray or Applications)
- **Linux:** Try `ollama serve` in a terminal
- Verify: `ollama list` should work without errors

### "Module not found" errors
- Make sure your virtual environment is activated (you should see `(.venv)` in your prompt)
- Try reinstalling: `pip install -r requirements.txt`
- Make sure you're in the correct directory (the one with `requirements.txt`)

### "inv: command not found"
- Make sure you installed dependencies: `pip install -r requirements.txt`
- Make sure your virtual environment is activated
- Try: `python -m invoke dev` instead of `inv dev`

### Port 8000 already in use
- Another application is using port 8000
- Change the port in your `.env` file: `PORT=8001`
- Or stop the other application using that port
- On Windows, find what's using the port: `netstat -ano | findstr :8000`

### Models not downloading in Ollama
- Check your internet connection
- Make sure Ollama is running: `ollama list`
- Try downloading one model at a time
- Check available disk space (models are several GB)

### Virtual environment won't activate (Windows)
- If using PowerShell, you might need to run:
  ```
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```
- Or use Command Prompt instead of PowerShell
- Make sure you're in the project directory

### "Permission denied" errors (Linux/macOS)
- You might need to use `sudo` for some commands
- For Redis: `sudo systemctl start redis-server`
- For installing system packages: `sudo apt-get install ...`

### Application starts but API doesn't work
- Make sure both terminals are running (server AND worker)
- Check that Redis is running: `redis-cli ping`
- Check that Ollama is running: `ollama list`
- Check the terminal output for error messages
- Verify your `.env` file is in the correct location and has correct values

---

## Quick Reference Commands

Once everything is set up, here are the commands you'll use regularly:

```bash
# Navigate to project
cd co-grading

# Activate virtual environment
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate

# Start the server
inv dev

# Start the worker (in a separate terminal)
inv devworker

# Check if Redis is running
redis-cli ping

# Check if Ollama is running
ollama list

# Check installed models
ollama list

# Deactivate virtual environment (when done)
deactivate
```

---

## Additional Notes

### OpenAI API Key (Optional)
- The application can use OpenAI's API for some features
- If you have an OpenAI API key, you can pass it via the `X-User-OpenAI-Key` header when making API requests
- This is optional - the application primarily uses Ollama models

### Database
- The application uses SQLite by default (no additional setup needed)
- The database file (`db.sqlite`) will be created automatically in the project folder when you first run the application

### Stopping the Application
- To stop the server or worker, press `Ctrl + C` in the respective terminal
- Make sure to stop both terminals before closing
- Redis and Ollama can keep running in the background (they don't need to be stopped)

### Updating the Code

**If you used Method A (ZIP download):**
- Download a new ZIP file from GitHub
- Extract it to a new location or replace the old folder
- Then run: `pip install -r requirements.txt` to update dependencies
- Make sure to copy your `.env` file to the new location

**If you used Method B (Git clone):**
```bash
cd co-grading
git pull
pip install -r requirements.txt  # In case new dependencies were added
```

### System Requirements
- **RAM:** At least 8GB recommended (16GB+ for better performance)
- **Disk Space:** At least 15GB free (for Python, dependencies, and Ollama models)
- **Internet:** Required for initial setup and downloading models

---

## Getting Help

If you encounter issues not covered here:
1. Check that all prerequisites are installed correctly
2. Verify all services are running (Redis, Ollama)
3. Check the terminal output for error messages
4. Make sure your `.env` file is configured correctly
5. Ensure your virtual environment is activated
6. Try restarting your computer and starting fresh
7. Check that you have enough disk space and RAM

---

**Congratulations!** If you've made it through all these steps, you should have the Co-Grading tool up and running! 🎉

The application should now be accessible at `http://localhost:8000/docs` where you can explore and test the API endpoints.

