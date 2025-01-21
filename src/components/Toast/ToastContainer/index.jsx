import { Container } from './styles.js';
import { ToastMessage } from '../ToastMessage/index.jsx';
import { useEffect, useState, useRef } from 'react';
import { toastEventManager } from '../../../utils/toast.js';

export function ToastContainer() {
  const [messages, setMessages] = useState([]);
  const messageRefs = useRef({});

  useEffect(() => {
    function handleAddToast({ type, text, duration = 7000 }) {
      const id = Math.random();
      setMessages((prevState) => [...prevState, { id, type, text, duration }]);

      setTimeout(() => {
        if (messageRefs.current[id]) {
          messageRefs.current[id].focus();
        }
      }, 100);
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

    delete messageRefs.current[id];
  }

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          ref={(el) => (messageRefs.current[message.id] = el)}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  );
}
