import PropTypes from 'prop-types';

import { Overlay, Container, Footer } from './styles.js';
import Button from '../Button';
import { ReactPortal } from '../ReactPortal.jsx';
import { useEffect, useState } from 'react';

export default function Modal({
  children,
  title,
  visible,
  danger = false,
  isLoading = false,
  cancelLabel = 'Cancelar',
  confirmLabel = 'Confirmar',
  onCancel,
  onConfirm,
}) {
  const [shouldRender, setShouldRender] = useState(visible);

  let container = document.getElementById('modal-root');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', 'modal-root');

    document.body.appendChild(container);
  }

  useEffect(() => {
    if (visible) setShouldRender(true);

    let timeoutId;

    if (!visible) {
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 300);
    }

    return () => clearTimeout(timeoutId);
  }, [visible]);

  if (!shouldRender) return null;

  return (
    <ReactPortal containerId="modal-root">
      <Overlay isLeaving={!visible}>
        <Container danger={danger} isLeaving={!visible}>
          <h1>{title}</h1>

          <div className="modal-body">{children}</div>

          <Footer>
            <button
              type="button"
              className="cancel-button"
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelLabel}
            </button>

            <Button
              type="button"
              danger={danger}
              isLoading={isLoading}
              onClick={onConfirm}
            >
              {confirmLabel}
            </Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  danger: PropTypes.bool,
  isLoading: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
