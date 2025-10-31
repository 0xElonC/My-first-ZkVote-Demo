@echo off
setlocal

REM My First ZK Vote - Setup Script for Windows
echo 🚀 Setting up My First ZK Vote project...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    echo    Visit: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js detected: 
node --version

REM Install dependencies
echo 📦 Installing dependencies...
where yarn >nul 2>&1
if errorlevel 1 (
    echo    Using npm...
    npm install
) else (
    echo    Using yarn...
    yarn install
)

if errorlevel 1 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

REM Create .env.local if it doesn't exist
if not exist .env.local (
    echo 🔧 Creating environment configuration...
    copy .env.example .env.local >nul
    echo ✅ Created .env.local (you can edit this file to add your own configuration^)
) else (
    echo ℹ️  .env.local already exists
)

echo.
echo 🎉 Setup complete! You can now:
echo.
echo    Start development server:
where yarn >nul 2>&1
if errorlevel 1 (
    echo    npm run dev
) else (
    echo    yarn dev
)
echo.
echo    Open in browser:
echo    http://localhost:3000
echo.
echo 📚 Learning modules available:
echo    • Blockchain Basics: /intro
echo    • ZK Concepts: /zk_intro
echo    • Traditional Voting: /vote_simulate
echo    • ZK Voting: /zk_vote_proof
echo    • Results: /result
echo.
echo Happy learning! 🎓⚡🗳️
echo.
pause