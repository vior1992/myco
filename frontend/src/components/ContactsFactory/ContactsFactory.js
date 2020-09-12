import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import {
  StyledContactsFactoryWrapper,
  StyledTitlesWrapper,
  StyledLink,
  StyledContactList,
} from './StyledContactsFactory';
import ContactCard from '../ContactCard';

const apiUrl = process.env.REACT_APP_API_URL;
// TODO HOOKS TOAST & FETCH, UPDATE TESTS.

const ContactsFactory = () => {
  const [contacts, setContacts] = useState([]);
  const [hasToRefetch, setHasToRefetch] = useState(false);
  const { addToast } = useToasts();

  // TODO REFACTOR
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${apiUrl}/contacts`);
      const data = await response.json();

      if (data.error) {
        addToast(data.error, { appearance: 'error', autoDismiss: true });
      }
      setContacts(data);
      setHasToRefetch(false);
    };
    fetchData();
  }, [hasToRefetch]);

  // TODO REFACTOR
  const deleteContact = async (id) => {
    const { ok, statusText } = await fetch(`${apiUrl}/contacts/${id}`, {
      method: 'DELETE',
    });
    if (!ok) {
      addToast(statusText, { appearance: 'error', autoDismiss: true });
      return;
    }
    addToast('Contact deleted successfully', {
      appearance: 'success',
      autoDismiss: true,
    });
    setHasToRefetch(true);
  };

  const handleDeleteContact = (id) => {
    deleteContact(id);
  };

  return (
    <StyledContactsFactoryWrapper>
      <StyledTitlesWrapper>
        <h1>
          MYCO
          <span role="img" aria-label="monkey">
            🐒
          </span>
        </h1>
        <h2>My Contact List</h2>
      </StyledTitlesWrapper>
      <StyledLink to="/contacts">New Contact</StyledLink>
      <StyledContactList>
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            {...contact}
            onClickDeleteContact={handleDeleteContact}
          />
        ))}
      </StyledContactList>
    </StyledContactsFactoryWrapper>
  );
};

export default ContactsFactory;
