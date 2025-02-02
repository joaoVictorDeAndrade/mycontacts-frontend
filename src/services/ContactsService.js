import HttpClient from './utils/HttpClient.js';
import ContactMapper from './mappers/ContactMapper.js';

const BASE_PATH = '/contacts';

class ContactsService {
  async fetchContacts(orderBy = 'asc') {
    const contactsList = await HttpClient.get(
      `${BASE_PATH}?orderBy=${orderBy}`,
      {
        headers: {
          Authorization: 'meu-token-super-secreto',
        },
      }
    );

    return contactsList.map(ContactMapper.toDomain);
  }

  async getContactById(id) {
    const contact = HttpClient.get(`${BASE_PATH}/${id}`);

    return ContactMapper.toDomain(contact);
  }

  async createContact(contact) {
    const body = ContactMapper.toPersistence(contact);

    return HttpClient.post(`${BASE_PATH}`, { body });
  }

  async updateContact(id, contact) {
    const body = ContactMapper.toPersistence(contact);

    return HttpClient.put(`${BASE_PATH}/${id}`, { body });
  }

  async deleteContact(contactId) {
    return HttpClient.delete(`${BASE_PATH}/${contactId}`);
  }
}

export default new ContactsService();
