import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  StyledCardWrapper,
  StyledInfoWrapper,
  StyledButtonsWrapper,
} from './StyledContactCard';
import { PROPS_TO_DISPLAY } from '../../constants';

const ContactCard = (props) => {
  const { onClickDeleteContact, id } = props;

  return (
    <StyledCardWrapper>
      <StyledInfoWrapper>
        {PROPS_TO_DISPLAY.map(({ key, title }) => (
          <div key={key}>
            <p>{title}:</p>
            <span>{props[key]}</span>
          </div>
        ))}
      </StyledInfoWrapper>
      <StyledButtonsWrapper>
        <Link to={`/contacts/${id}`}>
          <i className="far fa-edit" />
        </Link>
        <i
          data-testid="delete-icon"
          onClick={() => onClickDeleteContact(id)}
          className="far fa-trash-alt"
        />
      </StyledButtonsWrapper>
    </StyledCardWrapper>
  );
};

ContactCard.propTypes = {
  props: PropTypes.exact({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    phone_number: PropTypes.string,
    onClickDeleteContact: PropTypes.func,
  }),
};

export default ContactCard;
