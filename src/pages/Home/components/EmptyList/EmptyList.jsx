import { Container } from './styles.js';
import emptyBox from '../../../../assets/images/empty-box.svg';

export function EmptyList() {
  return (
    <Container>
      <img src={emptyBox} alt="" />

      <p>
        Você ainda não tem nenhum contato cadastrado! Clique no botão
        <strong> ”Novo contato”</strong> à cima para cadastrar o seu primeiro!
      </p>
    </Container>
  );
}
