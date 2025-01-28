import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

import ContactsService from '../../services/ContactsService';
import { toast } from '../../utils/toast.js';

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchContact() {
      try {
        setIsLoading(true);
        const contact = await ContactsService.getContactById(id);

        contactFormRef.current.setFieldsValues(contact);
        setContactName(contact.name);
      } catch (error) {
        navigate('/');
        toast({
          type: 'danger',
          text: 'Contato não encontrado!',
        });
      } finally {
        setIsLoading(false);
      }
    }

    fetchContact();
  }, [id, navigate]);

  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      const { name } = await ContactsService.updateContact(id, contact);

      setContactName(name);

      toast({ type: 'success', text: 'Contato editado com sucesso' });
    } catch {
      toast({ type: 'danger', text: 'Ocorreu um erro ao editar contato' });
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
      />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
