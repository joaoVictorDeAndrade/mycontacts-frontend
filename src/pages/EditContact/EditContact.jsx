import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ContactsService from '../../services/ContactsService';
import { toast } from '../../utils/toast.js';

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchContact() {
      try {
        setIsLoading(true);
        const contact = await ContactsService.getContactById(id);
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

  function handleSubmit() {}

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader title="Editar contato" />

      <ContactForm buttonLabel="Salvar alterações" onSubmit={handleSubmit} />
    </>
  );
}
