import { Container, InputSearchContainer } from './styles.js';

import Logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="MyContacts" width="201" />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>
    </Container>
  );
}
