import { delay } from '../../utils/delay.js';
import ApiError from '../../errors/ApiError.js';

const BASE_URL = 'http://localhost:3001';

class HttpClient {
  async get(path) {
    await delay(500);

    const response = await fetch(`${BASE_URL}${path}`);

    const contentType = response.headers.get('Content-Type');

    let body = null;

    // Faz o parse do body caso seja JSON
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) return body;

    throw new ApiError(response, body);
  }

  async post(path, body) {
    await delay(500);

    const headers = new Headers({
      'Content-type': 'application/json',
    });

    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    });

    const contentType = response.headers.get('Content-Type');

    let responseBody = null;

    // Faz o parse do body caso seja JSON
    if (contentType.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.ok) return responseBody;

    throw new ApiError(response, responseBody);
  }
}

export default new HttpClient();
