import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledContactsFactoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => props.theme.sizes['x-small']};
  padding: ${(props) => props.theme.sizes['x-small']};
`;

export const StyledTitlesWrapper = styled.div`
  text-align: center;

  h1,
  h2 {
    margin: 0;
  }

  @media (min-width: 420px) {
    h1 {
      font-size: ${(props) => props.theme.sizes['x-huge']};
    }

    h2 {
      font-size: ${(props) => props.theme.sizes['xx-large']};
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: ${(props) => props.theme.sizes['x-small']};
  margin: ${(props) => props.theme.sizes.small} 0;
  border-radius: ${(props) => props.theme.sizes['x-small']};
  border: ${(props) => `2px solid ${props.theme.colors.green}`};
  color: ${(props) => props.theme.colors.green};
  font-size: ${(props) => props.theme.sizes['xx-large']};

  @media (min-width: 420px) {
    font-size: ${(props) => props.theme.sizes['xx-huge']};
  }
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
