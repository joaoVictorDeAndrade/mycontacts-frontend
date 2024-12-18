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
}

export default new HttpClient();
