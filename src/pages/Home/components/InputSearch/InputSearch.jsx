import PropTypes from 'prop-types';

import { Container } from './styles.js';

export function InputSearch({ value, onChange }) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Pesquise pelo nome"
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
