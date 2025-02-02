import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import Loader from '../../components/Loader/Loader.jsx';

import { useEditContact } from './useEditContact.js';

export default function EditContact() {
  const { isLoading, contactName, contactFormRef, handleSubmit } =
    useEditContact();

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
