import { Container } from './styles.js';

import Logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="MyContacts" width="201" />
    </Container>
  );
}
