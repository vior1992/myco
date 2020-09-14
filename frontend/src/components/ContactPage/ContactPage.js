import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import {
  StyledContactPageWrapper,
  StyledForm,
  StyledInputWrapper,
} from './StyledContactPage';
import { contactsRepository } from '../../repositories';
import { buildRequestOptions } from '../../libs/utils';
import {
  CONTACTS_PATH,
  CONTACT_PAGE_ICONS,
  CONTACT_PAGE_TITLES,
  INITIAL_CONTACT_DATA,
  PROPS_TO_DISPLAY,
} from '../../constants';

const { ADD_ICON, EDIT_ICON } = CONTACT_PAGE_ICONS;
const { ADD_TITLE, EDIT_TITLE } = CONTACT_PAGE_TITLES;

const ContactPage = () => {
  const [contactData, setContactData] = useState(INITIAL_CONTACT_DATA);
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const { addToast } = useToasts();

  const [, id = ''] = history.location.pathname.split(CONTACTS_PATH);
  const submitIconClass = `fas fa-${id ? EDIT_ICON : ADD_ICON}`;
  const pageTitle = id ? EDIT_TITLE : ADD_TITLE;

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const data = await contactsRepository.getContact({
          id,
          addToast,
          history,
        });

        setContactData(data);
      };

      fetchData();
    }
  }, [id, addToast, history]);

  const handleOnChange = ({ target: { id, value } }) => {
    setContactData({ ...contactData, [id]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const options = buildRequestOptions(id, contactData);

    const isSuccessfulRequest = await contactsRepository.updateContact({
      id,
      options,
      addToast,
      setErrors,
    });

    isSuccessfulRequest && history.push('/');
  };

  return (
    <StyledContactPageWrapper>
      <h1>{pageTitle}</h1>
      <StyledForm onSubmit={handleOnSubmit}>
        {PROPS_TO_DISPLAY.map(({ key, title }) => (
          <StyledInputWrapper key={key}>
            <label htmlFor={key}>{title}</label>
            <input
              type="text"
              id={key}
              value={contactData[key]}
              onChange={handleOnChange}
            />
            {errors[key] && <p>{errors[key][0]}</p>}
          </StyledInputWrapper>
        ))}
        <div>
          <Link to="/">
            <i className="fas fa-arrow-left" />
          </Link>
          <button type="submit">
            <i className={submitIconClass} />
          </button>
        </div>
      </StyledForm>
    </StyledContactPageWrapper>
  );
};

export default ContactPage;
