import PageHeader from '../../components/PageHeader/PageHeader.jsx';

import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import ContactsService from '../../services/ContactsService.js';
import { toast } from '../../utils/toast.js';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      await ContactsService.createContact(contact);

      toast({ type: 'success', text: 'Contato cadastrado com sucesso' });
    } catch {
      toast({ type: 'danger', text: 'Ocorreu um erro ao cadastrar contato' });
    }
  }

  return (
    <>
      <PageHeader title="Novo contato" />

      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}
