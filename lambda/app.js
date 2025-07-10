exports.handler = async (event) => {
  const body = JSON.parse(event.body || '{}');
  const prompt = body.prompt || 'Default prompt';
  
  const fileId = Math.random().toString(36).substring(2, 15);
  const s3Url = `https://your-bucket-name.s3.amazonaws.com/${fileId}.gif`;

  const response = {
    prompt: prompt,
    prompt_id: fileId,
    video_url: s3Url
  };

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(response)
  };
};
