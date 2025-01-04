import PropTypes from 'prop-types';
import { Container } from './styles.js';

import Spinner from '../Spinner/index.jsx';

export default function FormGroup({ children, isLoading = false, error = '' }) {
  return (
    <Container>
      <div className="form-item">
        {children}

        {isLoading && (
          <div className="loader">
            <Spinner size={16} />
          </div>
        )}
      </div>

      {error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
};
