# AI Video Generator Backend (Node.js, Serverless)

Serverless backend for an AI-powered video/GIF generator using AWS Lambda and API Gateway.  
Currently returns mocked video URLs for testing and development.

## Architecture

- API Gateway HTTP API with POST `/generate` route  
- AWS Lambda (Node.js 18.x) processes prompts and returns fake S3 URLs  
- Mocked implementation to avoid AI API costs  

## Setup & Deployment

### Prerequisites

- AWS CLI & SAM CLI installed and configured  
- Node.js 18.x installed  

### Build & Deploy

```bash
sam build
sam deploy --guided
Testing

Invoke locally with:

sam local invoke GenerateFunction --event events/event.json

Run tests:

npm install
npm test

Usage

Send POST to /generate with JSON body:

{ "prompt": "Alien crash lands in Arizona" }

Example curl:

curl -X POST https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/generate \
-H "Content-Type: application/json" \
-d '{"prompt": "Alien crash lands in Arizona"}'

Next Steps

    Integrate real AI video generation

    Add DynamoDB metadata storage

    Improve error handling and security
