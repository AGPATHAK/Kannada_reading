#!/bin/bash

# Navigate to the script's directory
cd "$(dirname "$0")"

echo "============================================="
echo "  Starting Kannada Learning App Server..."
echo "  Press [Ctrl + C] at any time to stop it."
echo "============================================="
echo ""

# Run development server
npm run dev
