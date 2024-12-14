import PropTypes from 'prop-types';
import { useState } from 'react';

import { isEmailValid } from '../../utils/isEmailValid.js';

import { Form, ButtonContainer } from './styles.js';

import FormGroup from '../FormGroup/FormGroup.jsx';
import Input from '../Input.jsx';
import Select from '../Select.jsx';
import Button from '../Button.jsx';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);

    if (event.target.value.length < 3) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'O nome é obrigatório' },
      ]);

      return;
    }

    setErrors((prevState) =>
      prevState.filter((error) => error.field !== 'name')
    );
  }

  function handleEmailChange(event) {
    const input = event.target.value;

    setEmail(input);

    if (input && !isEmailValid(input)) {
      const errorAlreadyExists = errors.some(
        (error) => error.field === 'email'
      );

      if (errorAlreadyExists) return;

      setErrors((prevState) => [
        ...prevState,
        { field: 'email', message: 'E-mail inválido' },
      ]);

      return;
    }

    setErrors((prevState) =>
      prevState.filter((error) => error.field !== 'email')
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      name,
      email,
      phone,
      category,
    });
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
