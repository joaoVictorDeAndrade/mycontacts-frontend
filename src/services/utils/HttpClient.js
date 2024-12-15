import { delay } from '../../utils/delay.js';

const BASE_URL = 'http://localhost:3001';

class HttpClient {
  async get(path) {
    await delay(500);

    const response = await fetch(`${BASE_URL}${path}`);

    return response.json();
  }
}

export default new HttpClient();
