import styled from 'styled-components';

export const StyledContactPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 10px 0 10px;
  text-align: center;

  @media (min-width: 420px) {
    h1 {
      font-size: ${(props) => props.theme.sizes['xx-huge']};
    }
  }
`;

export const StyledForm = styled.form`
  justify-content: space-around;
  padding: ${(props) => props.theme.sizes.small};
  margin: ${(props) => props.theme.sizes['x-small']};
  font-family: ${(props) => props.theme.fontFamily.card};
  background-color: ${(props) => props.theme.colors.darkBlue};
  border-radius: ${(props) => props.theme.sizes['x-small']};
  box-shadow: ${(props) => props.theme.boxShadow.card};
  transition: ${(props) => props.theme.transitions.fast};

  :hover {
    box-shadow: ${(props) => props.theme.boxShadow['card-hover']};
  }

  i {
    cursor: pointer;
    font-size: ${(props) => props.theme.sizes['x-large']};
    color: ${(props) => props.theme.colors.white};
    margin: ${(props) => props.theme.sizes.medium};
    padding: ${(props) => props.theme.sizes.medium};
  }

  i:hover {
    transition: ${(props) => props.theme.transitions.fast};
    color: ${(props) => props.theme.colors.blue};
  }

  button {
    background-color: transparent;
    border: 0;
    padding: 0;

    i:hover {
      transition: ${(props) => props.theme.transitions.fast};
      color: ${(props) => props.theme.colors.green};
    }
  }

  @media (min-width: 420px) {
    width: 500px;
    min-height: 500px;
    align-self: center;
    font-size: ${(props) => props.theme.sizes['x-large']};
    padding: ${(props) => props.theme.sizes['x-large']};

    i {
      font-size: ${(props) => props.theme.sizes['xx-huge']};
    }
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.theme.sizes['x-small']} 0;

  label {
    color: ${(props) => props.theme.colors.white};
    text-align: start;
    margin: ${(props) => props.theme.sizes['x-small']} 0;
  }

  input {
    border: 0;
    background-color: transparent;
    border-bottom: 1px solid white;
    color: ${(props) => props.theme.colors.white};
  }

  p {
    color: ${(props) => props.theme.colors.red};
    font-size: ${(props) => props.theme.sizes.small};
  }

  @media (min-width: 420px) {
    input {
      font-size: ${(props) => props.theme.sizes.large};
    }

    p {
      font-size: ${(props) => props.theme.sizes.medium};
    }
  }
`;
