import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles.js';

import arrow from '../../assets/images/icons/arrow.svg';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Voltar" />
        <span aria-hidden="true">Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
