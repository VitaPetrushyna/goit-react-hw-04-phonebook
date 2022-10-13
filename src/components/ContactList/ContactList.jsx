import PropTypes from 'prop-types';
import { ListContacts, ContactsItem, DeleteBtn } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ListContacts>
      {contacts.map(contact => (
        <ContactsItem key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <DeleteBtn
              type="button"
              name="delete"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </DeleteBtn>
          }
        </ContactsItem>
      ))}
    </ListContacts>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
