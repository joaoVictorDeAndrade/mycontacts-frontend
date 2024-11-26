import { Link } from 'react-router-dom';
import { Container, Header, ListContainer, Card, InputSearchContainer } from './styles.js';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>

        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Ordenar lista" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>João da Silva</strong>
              <small>Instagram</small>
            </div>

            <span>joao@gmail.com</span>
            <span>(16) 99999-4343</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Editar contato" />
            </Link>
            <button type="button">
              <img src={trash} alt="Remover contato" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
