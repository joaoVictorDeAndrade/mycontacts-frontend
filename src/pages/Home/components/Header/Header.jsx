import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Container } from './styles.js';

export function Header({ hasError, qtyFilteredContacts }) {
  const alignment = qtyFilteredContacts > 0 ? 'space-between' : 'center';

  return (
    <Container justifyContent={alignment}>
      {!hasError && qtyFilteredContacts > 0 && (
        <strong>
          {qtyFilteredContacts}
          {qtyFilteredContacts === 1 ? ' contato' : ' contatos'}
        </strong>
      )}

      <Link to="/new">Novo contato</Link>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  qtyFilteredContacts: PropTypes.number.isRequired,
};
