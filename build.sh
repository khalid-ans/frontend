#!/bin/bash
set -e

echo "Current directory: $(pwd)"
echo "Listing contents:"
ls -la

echo "Changing to frontend directory..."
cd frontend

echo "Frontend directory: $(pwd)"
echo "Listing frontend contents:"
ls -la

echo "Installing dependencies..."
npm install

echo "Building project..."
npm run build

echo "Build completed successfully!" 