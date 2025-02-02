import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useIsMounted from '../../hooks/useIsMounted.js';

import { toast } from '../../utils/toast.js';

import ContactsService from '../../services/ContactsService.js';

export function useEditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef(null);

  const isMounted = useIsMounted();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchContact() {
      try {
        setIsLoading(true);
        const contact = await ContactsService.getContactById(id);

        if (isMounted()) {
          contactFormRef.current.setFieldsValues(contact);
          setContactName(contact.name);
        }
      } catch (error) {
        if (isMounted()) {
          navigate('/');
          toast({
            type: 'danger',
            text: 'Contato não encontrado!',
          });
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchContact();
  }, [id, navigate, isMounted]);

  async function handleSubmit(formData) {
    try {
      const { name } = await ContactsService.updateContact(id, formData);

      setContactName(name);

      toast({ type: 'success', text: 'Contato editado com sucesso' });
    } catch {
      toast({ type: 'danger', text: 'Ocorreu um erro ao editar contato' });
    }
  }

  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit,
  };
}
