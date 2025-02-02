import PropTypes from 'prop-types';
import Button from '../../../../components/Button/index.jsx';

import { Container } from './styles.js';

import sad from '../../../../assets/images/sad.svg';

export function ErrorStatus({ handleTryAgain }) {
  return (
    <Container>
      <img src={sad} alt="" />

      <div className="details">
        <strong>Ocorreu um erro ao obter os seus contatos!</strong>
        <Button type="button" onClick={handleTryAgain}>
          Tentar novamente
        </Button>
      </div>
    </Container>
  );
}

ErrorStatus.propTypes = {
  handleTryAgain: PropTypes.func.isRequired,
};
