import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
  width: 200px;
  font-family: ${(props) => props.theme.fontFamily.card};
  margin: ${(props) => props.theme.sizes.medium} 0px;
  padding: ${(props) => props.theme.sizes.small};
  border-radius: ${(props) => props.theme.sizes['x-small']};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.darkBlue};
  box-shadow: ${(props) => props.theme.boxShadow.card};
  transition: ${(props) => props.theme.transitions.fast};

  :hover {
    box-shadow: ${(props) => props.theme.boxShadow['card-hover']};
  }

  @media (min-width: 420px) {
    width: 400px;
    margin: 10px 10px;
  }
`;

export const StyledInfoWrapper = styled.div`
  p {
    margin: 15px 0 5px 0;
    border-bottom: 1px solid white;
  }

  @media (min-width: 420px) {
    p {
      font-size: ${(props) => props.theme.sizes['x-large']};
    }

    span {
      font-size: ${(props) => props.theme.sizes.large};
    }
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${(props) => props.theme.sizes.large};
  margin-top: ${(props) => props.theme.sizes.medium};

  i {
    cursor: pointer;
    margin: 0px ${(props) => props.theme.sizes['x-large']};
    font-weight: ${(props) => props.theme.fontSizes.large};
    color: ${(props) => props.theme.colors.blue};
  }

  i:nth-child(2) {
    color: ${(props) => props.theme.colors.red};
  }

  @media (min-width: 420px) {
    flex-direction: row;
    margin-top: ${(props) => props.theme.sizes['x-small']};

    i {
      font-size: ${(props) => props.theme.sizes['xx-huge']};
    }
  }
`;
