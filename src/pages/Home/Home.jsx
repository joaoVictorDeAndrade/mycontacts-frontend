import { formatPhone } from '../../utils/formatPhone.js';

import { Link } from 'react-router-dom';

import Loader from '../../components/Loader/Loader.jsx';
import Modal from '../../components/Modal/Modal.jsx';

import {
  Container,
  ListHeader,
  Card,
  EmptyListContainer,
  SearchNotFoundContainer,
} from './styles.js';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

import { useHome } from './useHome.js';

import { InputSearch } from './components/InputSearch/InputSearch.jsx';
import { Header } from './components/Header/Header.jsx';
import { ErrorStatus } from './components/ErrorStatus/ErrorStatus.jsx';

export default function Home() {
  const {
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
  } = useHome();

  return (
    <Container>
      {contacts.length > 0 && (
        <InputSearch value={searchTerm} onChange={handleChangeSearchTerm} />
      )}

      <Header
        hasError={hasError}
        qtyContacts={contacts.length}
        qtyFilteredContacts={filteredContacts.length}
      />

      {hasError && <ErrorStatus handleTryAgain={handleTryAgain} />}

      {!hasError && (
        <>
          {contacts.length < 1 && !isLoading && (
            <EmptyListContainer>
              <img src={emptyBox} alt="" />

              <p>
                Você ainda não tem nenhum contato cadastrado! Clique no botão
                <strong> ”Novo contato”</strong> à cima para cadastrar o seu
                primeiro!
              </p>
            </EmptyListContainer>
          )}

          {contacts.length > 0 && filteredContacts.length === 0 && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="" />

              <p>
                Nenhum resultado foi encontrado para ”
                <strong>{searchTerm}</strong>”.
              </p>
            </SearchNotFoundContainer>
          )}

          {filteredContacts.length > 0 && (
            <ListHeader orderBy={orderBy}>
              <button type="button" onClick={handleToggleOrderBy}>
                <span>Nome</span>
                <img src={arrow} alt="Ordenar lista" />
              </button>
            </ListHeader>
          )}

          {filteredContacts.map((contact) => (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                  {contact.category.name && (
                    <small>{contact.category.name}</small>
                  )}
                </div>

                <span>{contact.email}</span>
                <span>{formatPhone(contact.phone)}</span>
              </div>

              <div className="actions">
                <Link to={`/edit/${contact.id}`}>
                  <img src={edit} alt="Editar contato" />
                </Link>
                <button
                  type="button"
                  onClick={() => handleDeleteContact(contact)}
                >
                  <img src={trash} alt="Remover contato" />
                </button>
              </div>
            </Card>
          ))}
        </>
      )}

      <Loader isLoading={isLoading} />

      <Modal
        danger
        visible={isDeleteModalVisible}
        isLoading={isLoadingDelete}
        title={`Tem certeza que deseja remover o contato "${contactToDelete?.name}"`}
        confirmLabel="Deletar"
        onCancel={closeDeleteModal}
        onConfirm={deleteContact}
      >
        <p>Essa ação não poderá ser desfeita!</p>
      </Modal>
    </Container>
  );
}
