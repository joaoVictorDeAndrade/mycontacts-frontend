import { Container } from './styles.js';
import { ToastMessage } from '../ToastMessage/index.jsx';

export function ToastContainer() {
  return (
    <Container>
      <ToastMessage text="Default toast" />
      <ToastMessage text="Error toast" type="danger" />
      <ToastMessage text="Success toast" type="success" />
    </Container>
  );
}
