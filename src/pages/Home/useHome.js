import { useCallback, useEffect, useMemo, useState } from 'react';
import { fullNormalize } from '../../utils/fullNormalize.js';
import { toast } from '../../utils/toast.js';

import ContactsService from '../../services/ContactsService.js';

export function useHome() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      const name = fullNormalize(contact.name);
      const search = fullNormalize(searchTerm);

      return name.includes(search);
    });
  }, [contacts, searchTerm]);

  const fetchContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.fetchContacts(orderBy);
      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      setHasError(true);
      setContacts([]);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    fetchContacts();
  }

  async function handleDeleteContact(contact) {
    setIsDeleteModalVisible(true);
    setContactToDelete(contact);
  }

  function closeDeleteModal() {
    setIsDeleteModalVisible(false);
    setContactToDelete(null);
  }

  async function deleteContact() {
    try {
      setIsLoadingDelete(true);
      await ContactsService.deleteContact(contactToDelete.id);

      toast({
        type: 'success',
        text: 'Contato deletado com sucesso!',
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao deletar o contato!',
      });
    } finally {
      closeDeleteModal();
      setIsLoadingDelete(false);
      await fetchContacts();
    }
  }

  return {
    isLoading,
    isLoadingDelete,
    isDeleteModalVisible,
    contactToDelete,
    contacts,
    hasError,
    filteredContacts,
    searchTerm,
    orderBy,
    deleteContact,
    closeDeleteModal,
    handleTryAgain,
    handleToggleOrderBy,
    handleDeleteContact,
    handleChangeSearchTerm,
  };
}
