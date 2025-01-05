import { useEffect, useMemo, useCallback, useState } from 'react';
import { formatPhone } from '../../utils/formatPhone.js';
import { fullNormalize } from '../../utils/fullNormalize.js';

import { Link } from 'react-router-dom';

import Loader from '../../components/Loader/Loader.jsx';
import Button from '../../components/Button';

import {
  Container,
  Header,
  ListHeader,
  Card,
  InputSearchContainer,
  ErrorContainer,
  EmptyListContainer,
  SearchNotFoundContainer,
} from './styles.js';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

import ContactsService from '../../services/ContactsService.js';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      const name = fullNormalize(contact.name);
      const search = fullNormalize(searchTerm);

      return name.includes(search);
    });
  }, [contacts, searchTerm]);

  const justifyContent = useMemo(() => {
    if (hasError) return 'flex-end';

    return contacts.length > 0 ? 'space-between' : 'center';
  }, [hasError, contacts.length]);

  const fetchContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.fetchContacts(orderBy);
      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      setHasError(true);
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

  if (isLoading) return <Loader />;

  return (
    <Container>
      {contacts.length > 0 && (
        <InputSearchContainer>
          <input
            type="text"
            placeholder="Pesquise pelo nome"
            value={searchTerm}
            onChange={handleChangeSearchTerm}
          />
        </InputSearchContainer>
      )}

      <Header justifyContent={justifyContent}>
        {!hasError && contacts.length > 0 && (
          <strong>
            {contacts.length}
            {contacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
        )}

        <Link to="/new">Novo contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="" />
          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <Button type="button" onClick={handleTryAgain}>
              Tentar novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

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
                  {contact.category_name && (
                    <small>{contact.category_name}</small>
                  )}
                </div>

                <span>{contact.email}</span>
                <span>{formatPhone(contact.phone)}</span>
              </div>

              <div className="actions">
                <Link to={`/edit/${contact.id}`}>
                  <img src={edit} alt="Editar contato" />
                </Link>
                <button type="button">
                  <img src={trash} alt="Remover contato" />
                </button>
              </div>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
}
