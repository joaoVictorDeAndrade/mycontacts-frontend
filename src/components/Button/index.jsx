import PropTypes from 'prop-types';
import { StyledButton } from './styles.js';

import Spinner from '../Spinner';

export default function Button({
  children,
  onClick,
  type = 'button',
  disabled,
  isLoading,
  danger,
}) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
      danger={danger}
    >
      {isLoading ? <Spinner size={16} /> : children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  danger: PropTypes.bool,
};
