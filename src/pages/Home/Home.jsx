import Loader from '../../components/Loader/Loader.jsx';
import Modal from '../../components/Modal/Modal.jsx';

import { Container } from './styles.js';

import { useHome } from './useHome.js';

import { InputSearch } from './components/InputSearch/InputSearch.jsx';
import { Header } from './components/Header/Header.jsx';
import { ErrorStatus } from './components/ErrorStatus/ErrorStatus.jsx';
import { EmptyList } from './components/EmptyList/EmptyList.jsx';
import { SearchNotFound } from './components/SearchNotFound/SearchNotFound.jsx';
import { ContactsList } from './components/ContactsList/ContactsList.jsx';

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

  const hasContacts = contacts.length > 0;

  const isListEmpty = !hasError && !isLoading && !hasContacts;

  const isSearchEmpty = !hasError && hasContacts && filteredContacts.length < 1;

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch value={searchTerm} onChange={handleChangeSearchTerm} />
      )}

      <Header
        hasError={hasError}
        qtyFilteredContacts={filteredContacts.length}
      />

      {hasError && <ErrorStatus handleTryAgain={handleTryAgain} />}
      {isListEmpty && <EmptyList />}
      {isSearchEmpty && <SearchNotFound searchTerm={searchTerm} />}

      {hasContacts && (
        <ContactsList
          filteredContacts={filteredContacts}
          orderBy={orderBy}
          onToggleOrderBy={handleToggleOrderBy}
          onDeleteContact={handleDeleteContact}
        />
      )}

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
