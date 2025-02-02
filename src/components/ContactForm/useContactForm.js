import { useImperativeHandle, useState } from 'react';
import { useErrors } from '../../hooks/useErrors.js';
import { isEmailValid } from '../../utils/isEmailValid.js';
import { formatPhone } from '../../utils/formatPhone.js';

export function useContactForm(onSubmit, ref) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      setFieldsValues: (contact) => {
        setName(contact.name);
        setEmail(contact.email ?? '');
        setPhone(contact.phone ?? '');
        setCategoryId(contact.category.id ?? '');
      },
      resetFields: () => {
        setName('');
        setEmail('');
        setPhone('');
        setCategoryId('');
      },
    };
  }, []);

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isFormValid = name && !errors.length;

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value.length) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
      return;
    }

    removeError('name');
  }

  function handleEmailChange(event) {
    const input = event.target.value;

    setEmail(input);

    if (input && !isEmailValid(input)) {
      setError({ field: 'email', message: 'E-mail inválido' });
      return;
    }

    removeError('email');
  }

  function handlePhoneChange(event) {
    const input = formatPhone(event.target.value);

    setPhone(input);

    if (input.length < 14) {
      setError({ field: 'phone', message: 'Telefone inválido' });
      return;
    }

    removeError('phone');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({ name, email, phone, categoryId });

    setIsSubmitting(false);
  }

  return {
    name,
    email,
    phone,
    categoryId,
    isSubmitting,
    getErrorMessageByFieldName,
    isFormValid,
    setCategoryId,
    handleSubmit,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
  };
}
