import { Overlay, Container } from './styles.js';

import ReactDom from 'react-dom';
import Spinner from '../Spinner/index.jsx';

export default function Loader({ isLoading }) {
  if (!isLoading) return null;

  return ReactDom.createPortal(
    <Overlay>
      <Container>
        <Spinner size={90} />
      </Container>
    </Overlay>,
    document.getElementById('loader-root')
  );
}
