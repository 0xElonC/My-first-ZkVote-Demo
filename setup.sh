#!/bin/bash

# My First ZK Vote - Setup Script
echo "🚀 Setting up My First ZK Vote project..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ required. Current version: $(node -v)"
    echo "   Please update Node.js: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
if command -v yarn &> /dev/null; then
    echo "   Using yarn..."
    yarn install
else
    echo "   Using npm..."
    npm install
fi

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "🔧 Creating environment configuration..."
    cp .env.example .env.local
    echo "✅ Created .env.local (you can edit this file to add your own configuration)"
else
    echo "ℹ️  .env.local already exists"
fi

echo ""
echo "🎉 Setup complete! You can now:"
echo ""
echo "   Start development server:"
if command -v yarn &> /dev/null; then
    echo "   yarn dev"
else
    echo "   npm run dev"
fi
echo ""
echo "   Open in browser:"
echo "   http://localhost:3000"
echo ""
echo "📚 Learning modules available:"
echo "   • Blockchain Basics: /intro"
echo "   • ZK Concepts: /zk_intro" 
echo "   • Traditional Voting: /vote_simulate"
echo "   • ZK Voting: /zk_vote_proof"
echo "   • Results: /result"
echo ""
echo "Happy learning! 🎓⚡🗳️"