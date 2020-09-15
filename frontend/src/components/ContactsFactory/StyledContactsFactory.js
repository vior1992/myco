import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledContactsFactoryWrapper = styled.div`
  ${({ theme: { sizes } }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${sizes['x-small']};
  padding: ${sizes['x-small']};
`}
`;

export const StyledTitlesWrapper = styled.div`
  ${({ theme: { sizes } }) => `
  text-align: center;

  h1,
  h2 {
    margin: 0;
  }

  @media (min-width: 420px) {
    h1 {
      font-size: ${sizes['x-huge']};
    }

    h2 {
      font-size: ${sizes['xx-large']};
    }
  }
`}
`;

export const StyledLink = styled(Link)`
  ${({ theme: { colors, sizes } }) => `
  text-decoration: none;
  padding: ${sizes['x-small']};
  margin: ${sizes.small} 0;
  border-radius: ${sizes['x-small']};
  border: ${`2px solid ${colors.green}`};
  color: ${colors.green};
  font-size: ${sizes['xx-large']};

  @media (min-width: 420px) {
    font-size: ${sizes['xx-huge']};
  }
`}
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
