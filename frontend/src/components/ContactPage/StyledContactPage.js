import styled from 'styled-components';

export const StyledContactPageWrapper = styled.div`
  ${({ theme: { sizes } }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 10px 0 10px;
  text-align: center;

  @media (min-width: 420px) {
    h1 {
      font-size: ${sizes['xx-huge']};
    }
  }
`}
`;

export const StyledForm = styled.form`
  ${({ theme: { boxShadow, colors, fontFamily, sizes, transitions } }) => `
  justify-content: space-around;
  padding: ${sizes.small};
  margin: ${sizes['x-small']};
  font-family: ${fontFamily.card};
  background-color: ${colors.darkBlue};
  border-radius: ${sizes['x-small']};
  box-shadow: ${boxShadow.card};
  transition: ${transitions.fast};

  :hover {
    box-shadow: ${boxShadow['card-hover']};
  }

  i {
    cursor: pointer;
    font-size: ${sizes['x-large']};
    color: ${colors.white};
    margin: ${sizes.medium};
    padding: ${sizes.medium};
  }

  i:hover {
    transition: ${transitions.fast};
    color: ${colors.blue};
  }

  button {
    background-color: transparent;
    border: 0;
    padding: 0;

    i:hover {
      transition: ${transitions.fast};
      color: ${colors.green};
    }
  }

  @media (min-width: 420px) {
    width: 500px;
    min-height: 500px;
    align-self: center;
    font-size: ${sizes['x-large']};
    padding: ${sizes['x-large']};

    i {
      font-size: ${sizes['xx-huge']};
    }
  }
`}
`;

export const StyledInputWrapper = styled.div`
  ${({ theme: { colors, sizes } }) => `
  display: flex;
  flex-direction: column;
  margin: ${sizes['x-small']} 0;

  label {
    color: ${colors.white};
    text-align: start;
    margin: ${sizes['x-small']} 0;
  }

  input {
    border: 0;
    background-color: transparent;
    border-bottom: 1px solid white;
    color: ${colors.white};
  }

  p {
    color: ${colors.red};
    font-size: ${sizes.small};
  }

  @media (min-width: 420px) {
    input {
      font-size: ${sizes.large};
    }

    p {
      font-size: ${sizes.medium};
    }
  }
`}
`;
