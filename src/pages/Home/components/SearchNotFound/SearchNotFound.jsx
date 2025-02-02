import PropTypes from 'prop-types';
import { Container } from './styles.js';
import magnifierQuestion from '../../../../assets/images/magnifier-question.svg';

export function SearchNotFound({ searchTerm }) {
  return (
    <Container>
      <img src={magnifierQuestion} alt="" />

      <p>
        Nenhum resultado foi encontrado para ”<strong>{searchTerm}</strong>”.
      </p>
    </Container>
  );
}

SearchNotFound.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
