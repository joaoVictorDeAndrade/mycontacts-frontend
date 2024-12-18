import { delay } from '../../utils/delay.js';

const BASE_URL = 'http://localhost:3001';

class HttpClient {
  async get(path) {
    await delay(500);

    const response = await fetch(`${BASE_URL}${path}`);

    const contentType = response.headers.get('Content-Type');

    let body = null;

    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) return body;

    throw new Error(
      body?.error || `${response.status} - ${response.statusText}`
    );
  }
}

export default new HttpClient();
