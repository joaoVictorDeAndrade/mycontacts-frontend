import HttpClient from './utils/HttpClient.js';

const BASE_PATH = '/contacts';

class ContactsService {
  async fetchContacts(orderBy = 'asc') {
    return HttpClient.get(`${BASE_PATH}?orderBy=${orderBy}`);
  }

  async createContact(contact) {
    return HttpClient.post(`${BASE_PATH}`, contact);
  }
}

export default new ContactsService();
