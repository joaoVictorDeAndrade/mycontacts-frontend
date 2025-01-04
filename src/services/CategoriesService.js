import HttpClient from './utils/HttpClient.js';

const BASE_PATH = '/categories';

class CategoriesService {
  async fetchCategories() {
    return HttpClient.get(`${BASE_PATH}`);
  }
}

export default new CategoriesService();
