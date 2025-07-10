const { handler } = require('../lambda/app');

describe('Lambda Function', () => {
  test('returns expected response', async () => {
    const event = {
      body: JSON.stringify({ prompt: "Alien crash lands in Arizona" })
    };

    const result = await handler(event);

    expect(result.statusCode).toBe(200);

    const body = JSON.parse(result.body);
    expect(body).toHaveProperty('prompt', 'Alien crash lands in Arizona');
    expect(body).toHaveProperty('video_url');
    expect(body).toHaveProperty('prompt_id');
  });
});
