import HttpClient from './utils/HttpClient.js';
import CategoryMapper from './mappers/CategoryMapper.js';

const BASE_PATH = '/categories';

class CategoriesService {
  async fetchCategories() {
    const categoriesList = await HttpClient.get(`${BASE_PATH}`);

    return categoriesList.map(CategoryMapper.toDomain);
  }
}

export default new CategoriesService();
