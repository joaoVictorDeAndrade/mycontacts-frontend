import PropTypes from 'prop-types';
import { useState, forwardRef, useImperativeHandle } from 'react';
import { useErrors } from '../../hooks/useErrors.js';

import { isEmailValid } from '../../utils/isEmailValid.js';
import { formatPhone } from '../../utils/formatPhone.js';

import { Form, ButtonContainer } from './styles.js';

import FormGroup from '../FormGroup/FormGroup.jsx';
import Input from '../Input.jsx';
import Button from '../Button';
import { CategoriesSelect } from '../CategoriesSelect.jsx';

const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      setFieldsValues: (contact) => {
        setName(contact.name);
        setEmail(contact.email);
        setPhone(contact.phone);
        setCategoryId(contact.category_id || '');
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

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('phone')}>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
          error={getErrorMessageByFieldName('phone')}
          disabled={isSubmitting}
        />
      </FormGroup>

      <CategoriesSelect
        value={categoryId}
        onChange={({ target }) => setCategoryId(target.value)}
      />

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
});

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
