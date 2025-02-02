import PageHeader from '../../components/PageHeader/PageHeader.jsx';

import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import ContactsService from '../../services/ContactsService.js';
import { toast } from '../../utils/toast.js';
import { useRef } from 'react';

export default function NewContact() {
  const contactFormRef = useRef(null);

  async function handleSubmit(formData) {
    try {
      await ContactsService.createContact(formData);

      contactFormRef.current.resetFields();

      toast({ type: 'success', text: 'Contato cadastrado com sucesso' });
    } catch {
      toast({ type: 'danger', text: 'Ocorreu um erro ao cadastrar contato' });
    }
  }

  return (
    <>
      <PageHeader title="Novo contato" />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
