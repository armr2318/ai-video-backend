const { handler } = require('../lambda/app');

describe('Lambda Function', () => {
  test('returns mocked video URL and prompt ID', async () => {
    const event = {
      body: JSON.stringify({ prompt: "Alien crash lands in Arizona" })
    };

    const result = await handler(event);
    const body = JSON.parse(result.body);

    expect(result.statusCode).toBe(200);
    expect(body).toHaveProperty('prompt', 'Alien crash lands in Arizona');
    expect(body).toHaveProperty('video_url');
    expect(body).toHaveProperty('prompt_id');
  });
});
