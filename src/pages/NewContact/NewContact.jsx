import PageHeader from '../../components/PageHeader/PageHeader.jsx';

import ContactForm from '../../components/ContactForm/ContactForm.jsx';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />

      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
}
