import { Overlay, Container } from './styles.js';

import Spinner from '../Spinner/index.jsx';
import { ReactPortal } from '../ReactPortal.jsx';

export default function Loader({ isLoading }) {
  if (!isLoading) return null;

  let container = document.getElementById('loader-root');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', 'loader-root');

    document.body.appendChild(container);
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay>
        <Container>
          <Spinner size={90} />
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
