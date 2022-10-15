import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { HeaderTitle, Title } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const id = nanoid();
    const contact = {
      id,
      name,
      number,
    };

    if (!name.trim() || !number.trim()) {
      alert('Please, enter Name and Number');
      return;
    }

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${contact.name} is already in contacts`)
      : setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <HeaderTitle>Phonebook</HeaderTitle>
      <ContactForm addContact={addContact} />
      <Title>Contacts</Title>

      <Filter value={filter} onChange={changeFilter} />

      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </>
  );
}
