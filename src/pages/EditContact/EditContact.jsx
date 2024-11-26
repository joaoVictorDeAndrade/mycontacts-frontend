import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';

export default function EditContact() {
  return (
    <>
      <PageHeader title="Editar contato" />

      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}
