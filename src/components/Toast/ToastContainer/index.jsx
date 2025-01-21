import { Container } from './styles.js';
import { ToastMessage } from '../ToastMessage/index.jsx';
import { useEffect, useState } from 'react';
import { toastEventManager } from '../../../utils/toast.js';

export function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text }) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text },
      ]);
    }

    toastEventManager.on('add-toast', handleAddToast);

    return () => {
      toastEventManager.removeListener('add-toast', handleAddToast);
    };
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          text={message.text}
          type={message.type}
        />
      ))}
    </Container>
  );
}
