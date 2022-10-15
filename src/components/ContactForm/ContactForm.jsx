import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, AddBtn, InputData, LabelData } from './ContactForm.styled';

export default function ContactForm({ addContact }) {
  const [name, SetName] = useState('');
  const [number, SetNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        SetName(value);
        break;

      case 'number':
        SetNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    addContact({ name, number });
    reset();
  };

  const reset = () => {
    SetName('');
    SetNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelData>
        Name
        <InputData
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // required
          value={name}
          onChange={handleChange}
        />
      </LabelData>
      <LabelData>
        Number
        <InputData
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // required
          value={number}
          onChange={handleChange}
        />
      </LabelData>
      <AddBtn type="submit">Add contact</AddBtn>
    </Form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
