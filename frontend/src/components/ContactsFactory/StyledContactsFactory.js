import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledContactsFactoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Architects Daughter', cursive;
  margin: 10px;
  padding: 10px;
`;

export const StyledTitlesWrapper = styled.div`
  text-align: center;

  h1,
  h2 {
    margin: 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 5px;
  margin: 15px 0;
  border-radius: 10px;
  font-weight: 600;
  border: ${(props) => `2px solid ${props.theme.colors.darkGreen}`};
  color: ${(props) => props.theme.colors.darkGreen};
  background-color: ${(props) => props.theme.colors.green};
`;

export const StyledContactList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 420px) {
    flex-flow: wrap;
    justify-content: center;
  }
`;
