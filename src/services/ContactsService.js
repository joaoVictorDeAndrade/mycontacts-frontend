import HttpClient from './utils/HttpClient.js';

const BASE_PATH = '/contacts';

class ContactsService {
  async fetchContacts(orderBy = 'asc') {
    return HttpClient.get(`${BASE_PATH}?orderBy=${orderBy}`);
  }
}

export default new ContactsService();
