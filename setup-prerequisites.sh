#!/bin/bash

echo "Setting up prerequisites for AWS Amplify full-stack app..."

# 1. Install Node.js (if not already installed)
# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Installing Node.js..."
    # For Ubuntu/Debian
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
    
    # For macOS (if using Homebrew)
    # brew install node
    
    # For Windows, download from https://nodejs.org/
fi

echo "Node.js version: $(node --version)"
echo "NPM version: $(npm --version)"

# 3. Install Amplify CLI globally
echo "Installing Amplify CLI..."
npm install -g @aws-amplify/cli

echo "Amplify CLI version: $(amplify --version)"

echo "✅ Prerequisites installation complete!"
echo ""
echo "Next steps:"
echo "1. Configure AWS credentials: aws configure"
echo "2. Configure Amplify: amplify configure"
