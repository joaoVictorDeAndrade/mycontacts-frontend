export default class ApiError extends Error {
  constructor(response, body) {
    super();

    this.response = response;
    this.body = body;
    this.message = body?.error || `${response.status} - ${response.statusText}`;
  }
}
