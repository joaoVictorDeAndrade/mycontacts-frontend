import PropTypes from 'prop-types';
import { Container } from './styles.js';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export function ToastMessage({ text, type = 'default' }) {
  return (
    <Container type={type}>
      {type === 'success' && <img src={checkCircleIcon} alt="" />}
      {type === 'danger' && <img src={xCircleIcon} alt="" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
};
