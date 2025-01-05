import HttpClient from './utils/HttpClient.js';

const BASE_PATH = '/contacts';

class ContactsService {
  async fetchContacts(orderBy = 'asc') {
    return HttpClient.get(`${BASE_PATH}?orderBy=${orderBy}`, {
      headers: {
        Authorization: 'meu-token-super-secreto',
      },
    });
  }

  async createContact(contact) {
    return HttpClient.post(`${BASE_PATH}`, {
      body: contact,
    });
  }
}

export default new ContactsService();
