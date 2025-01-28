import { delay } from '../../utils/delay.js';
import ApiError from '../../errors/ApiError.js';

const BASE_URL = 'http://localhost:3001';

class HttpClient {
  async get(path, options) {
    return this.makeRequest(path, {
      method: 'GET',
      headers: options?.headers,
    });
  }

  async post(path, options) {
    return this.makeRequest(path, {
      method: 'POST',
      body: options?.body,
      headers: options?.headers,
    });
  }

  async put(path, options) {
    return this.makeRequest(path, {
      method: 'PUT',
      body: options?.body,
      headers: options?.headers,
    });
  }

  async delete(path, options) {
    return this.makeRequest(path, {
      method: 'DELETE',
      headers: options?.headers,
    });
  }

  async makeRequest(path, options) {
    await delay(500);

    const headers = new Headers();

    if (options.body) {
      headers.append('Content-Type', 'application/json');
    }

    if (options.headers) {
      Object.entries(options.headers).forEach(([key, value]) => {
        headers.append(key, value);
      });
    }

    const response = await fetch(`${BASE_URL}${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
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
