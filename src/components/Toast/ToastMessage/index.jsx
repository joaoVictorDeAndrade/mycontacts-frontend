import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles.js';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export const ToastMessage = forwardRef(({ message, onRemoveMessage }, ref) => {
  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container
      ref={ref}
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
    >
      {message.type === 'success' && <img src={checkCircleIcon} alt="" />}
      {message.type === 'danger' && <img src={xCircleIcon} alt="" />}
      <strong>{message.text}</strong>
    </Container>
  );
});

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};
