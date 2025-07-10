# AI Video Generator Backend (Node.js, Serverless)

Serverless backend for an AI-powered video/GIF generator using AWS Lambda and API Gateway.  
Currently returns mocked or pre-uploaded S3 video URLs for development and testing.

---

##  Architecture

- API Gateway (HTTP API) with a `/generate` POST route  
- AWS Lambda (Node.js 18.x) parses prompt and returns fake or pre-uploaded S3 media URL  
- S3 bucket holds test videos or GIFs (or use signed URLs later)  
- Designed to stay within AWS Free Tier  

---

##  Setup & Deployment

### 🔧 Prerequisites

- AWS CLI configured with credentials  
- AWS SAM CLI installed  
- Node.js 18.x installed  
- An S3 bucket (e.g. `ai-video-generator-yourname`) — see [S3 Setup](#s3-setup)

###  Build & Deploy

```bash
sam build
sam deploy --guided

    Accept defaults, or customize the stack name

    Use the same region as your S3 bucket and Lambda function

 Local Testing
Invoke Lambda with Sample Event

sam local invoke GenerateFunction --event events/event.json

Unit Testing

npm install
npm test

 API Usage
Endpoint

POST to your deployed API Gateway /generate endpoint.

Example request:

{
  "prompt": "Alien crash lands in Arizona"
}

Example curl:

curl -X POST https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Alien crash lands in Arizona"}'

Example Response

{
  "prompt": "Alien crash lands in Arizona",
  "prompt_id": "generated123",
  "video_url": "https://your-s3-bucket.s3.amazonaws.com/generated123.gif"
}

 S3 Setup

To store or serve demo GIFs:

    Create a bucket (e.g. ai-video-generator-yourname)

    Upload sample .gif files manually

    (Optional) Set public read access or use signed URLs

    Update app.js to use your bucket name

Want to use signed URLs? Ask and we’ll show you how to generate them securely in Lambda.
 Next Steps

    Upload real AI-generated content to S3

    Replace mock URLs with signed URLs

    Add DynamoDB for metadata tracking

    Integrate OpenAI or Bedrock for actual video logic
