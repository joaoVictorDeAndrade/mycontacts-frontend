import { useState } from 'react';

export function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ field, message = 'Campo obrigatório' }) {
    const errorAlreadyExists = errors.some((error) => error.field === field);

    if (errorAlreadyExists) return;

    setErrors((prevState) => [...prevState, { field, message }]);
  }

  function removeError(fieldName) {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldName)
    );
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}
