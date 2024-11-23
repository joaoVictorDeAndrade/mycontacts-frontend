import { Container, Header, ListContainer, Card } from './styles.js';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>

        <a href="/">Novo contato</a>
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
            <a href="/">
              <img src={edit} alt="Editar contato" />
            </a>
            <button type="button">
              <img src={trash} alt="Remover contato" />
            </button>
          </div>
        </Card>

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
            <a href="/">
              <img src={edit} alt="Editar contato" />
            </a>
            <button type="button">
              <img src={trash} alt="Remover contato" />
            </button>
          </div>
        </Card>

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
            <a href="/">
              <img src={edit} alt="Editar contato" />
            </a>
            <button type="button">
              <img src={trash} alt="Remover contato" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
