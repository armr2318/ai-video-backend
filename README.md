# AI Video Generator Backend (Node.js, Serverless)

This project provides a mocked AWS Lambda backend for an AI video/GIF generator web app.

## Architecture

- API Gateway HTTP API endpoint `/generate` (POST)
- AWS Lambda function (Node.js 18.x)
- Returns mocked S3 URLs (no real AI call yet)

## Setup & Deployment

### Prerequisites

- AWS CLI installed and configured
- AWS SAM CLI installed
- Node.js 18.x installed

### Build & Deploy

```bash
sam build
sam deploy --guided

Follow prompts to deploy your stack.
Testing Locally

Invoke the Lambda locally with:

sam local invoke GenerateFunction --event events/event.json

Or run unit tests with:

npm install
npm test

Usage

Send a POST request to the deployed API Gateway URL /generate with JSON body:

{
  "prompt": "Alien crash lands in Arizona"
}

Example curl:

curl -X POST https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/generate \
-H "Content-Type: application/json" \
-d '{"prompt": "Alien crash lands in Arizona"}'

Notes

    This is a mock implementation — replace with real AI integration later.

    Stays within AWS free tier.
