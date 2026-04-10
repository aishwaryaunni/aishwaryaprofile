#!/bin/bash

# Data Science Portfolio - Quick Start Script
# This script automates the setup process

echo "🚀 Data Science Portfolio - Quick Setup"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from template..."
    cp .env.example .env.local
    echo "✅ .env.local created. Please update it with your information."
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update your information in the components:"
echo "   - src/components/Hero.tsx"
echo "   - src/components/About.tsx"
echo "   - src/components/Skills.tsx"
echo "   - src/components/Projects.tsx"
echo "   - src/components/Experience.tsx"
echo "   - src/components/Contact.tsx"
echo ""
echo "2. Add your resume.pdf to the public folder"
echo ""
echo "3. Run 'npm run dev' to start the development server"
echo "   Then open http://localhost:3000 in your browser"
echo ""
echo "📚 Check SETUP_GUIDE.md for detailed customization instructions"
echo "📖 Check README.md for deployment and advanced features"
echo ""
echo "Happy building! 🎨✨"
