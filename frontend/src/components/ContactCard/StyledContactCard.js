import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
  ${({ theme: { boxShadow, colors, fontFamily, sizes, transitions } }) => `
  width: 200px;
  font-family: ${fontFamily.card};
  margin: ${sizes.medium} 0px;
  padding: ${sizes.small};
  border-radius: ${sizes['x-small']};
  color: ${colors.white};
  background-color: ${colors.darkBlue};
  box-shadow: ${boxShadow.card};
  transition: ${transitions.fast};

  :hover {
    box-shadow: ${boxShadow['card-hover']};
  }

  @media (min-width: 420px) {
    width: 400px;
    margin: 10px 10px;
  }
`};
`;

export const StyledInfoWrapper = styled.div`
  ${({ theme: { sizes } }) => `
  p {
    margin: 15px 0 5px 0;
    border-bottom: 1px solid white;
  }

  @media (min-width: 420px) {
    p {
      font-size: ${sizes['x-large']};
    }

    span {
      font-size: ${sizes.large};
    }
  }
`}
`;

export const StyledButtonsWrapper = styled.div`
  ${({ theme: { colors, fontSizes, sizes } }) => `
  display: flex;
  justify-content: center;
  font-size: ${sizes.large};
  margin-top: ${sizes.medium};

  i {
    cursor: pointer;
    margin: 0px ${sizes['x-large']};
    font-weight: ${fontSizes.large};
    color: ${colors.blue};
  }

  i:nth-child(2) {
    color: ${colors.red};
  }

  @media (min-width: 420px) {
    flex-direction: row;
    margin-top: ${sizes['x-small']};

    i {
      font-size: ${sizes['xx-huge']};
    }
  }
  `}
`;
