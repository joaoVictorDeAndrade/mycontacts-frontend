import { useRef } from 'react';
import ContactsService from '../../services/ContactsService.js';
import { toast } from '../../utils/toast.js';

export function useNewContact() {
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

  return {
    contactFormRef,
    handleSubmit,
  };
}
