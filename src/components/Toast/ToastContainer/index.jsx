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

  function handleRemoveMessage(id) {
    setMessages((prevState) =>
      prevState.filter((message) => message.id !== id)
    );
  }

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  );
}
