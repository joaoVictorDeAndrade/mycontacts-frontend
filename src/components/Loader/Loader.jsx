import { Overlay, Container } from './styles.js';

import ReactDom from 'react-dom';

export default function Loader() {
  return ReactDom.createPortal(
    <Overlay>
      <Container>
        <div className="loader" />
      </Container>
    </Overlay>,
    document.getElementById('loader-root')
  );
}
