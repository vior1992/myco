import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import {
  StyledContactsFactoryWrapper,
  StyledTitlesWrapper,
  StyledLink,
  StyledContactList,
} from './StyledContactsFactory';
import ContactCard from '../ContactCard';
import { contactsRepository } from '../../repositories';

const ContactsFactory = () => {
  const [contacts, setContacts] = useState([]);
  const [hasToRefetch, setHasToRefetch] = useState(false);
  const { addToast } = useToasts();

  useEffect(() => {
    const fetchData = async () => {
      const data = await contactsRepository.getContacts({ addToast });

      setContacts(data);
      setHasToRefetch(false);
    };
    fetchData();
  }, [hasToRefetch]);

  const handleDeleteContact = async (id) => {
    await contactsRepository.deleteContact({
      id,
      addToast,
    });

    setHasToRefetch(true);
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
      <StyledLink to="/contacts">
        <i className="fas fa-user-plus"></i>
      </StyledLink>
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
