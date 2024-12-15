import { useEffect, useMemo, useState } from 'react';
import { formatPhone } from '../../utils/formatPhone.js';
import { fullNormalize } from '../../utils/fullNormalize.js';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  ListHeader,
  Card,
  InputSearchContainer,
} from './styles.js';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      const name = fullNormalize(contact.name);
      const search = fullNormalize(searchTerm);

      return name.includes(search);
    });
  }, [contacts, searchTerm]);

  useEffect(() => {
    async function fetchContacts() {
      const response = await fetch(
        `http://localhost:3001/contacts?orderBy=${orderBy}`
      );
      const json = await response.json();

      setContacts(json);
    }

    fetchContacts();
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquise pelo nome"
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}
        </strong>

        <Link to="/new">Novo contato</Link>
      </Header>

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
              {contact.category_name && <small>{contact.category_name}</small>}
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
    </Container>
  );
}
