exports.handler = async (event) => {
  const body = JSON.parse(event.body || '{}');
  const prompt = body.prompt || 'Default prompt';
  
  const fileId = Math.random().toString(36).substring(2, 15);
  const s3Url = `https://your-s3-bucket.s3.amazonaws.com/${fileId}.gif`;

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt,
      prompt_id: fileId,
      video_url: s3Url
    })
  };
};
