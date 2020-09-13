import styled from 'styled-components';

export const StyledContactPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 10px 0 10px;
  text-align: center;

  h1 {
    font-family: 'Architects Daughter', cursive;
  }

  @media (min-width: 420px) {
    h1 {
      font-size: ${(props) => props.theme.sizes['xx-huge']};
    }
  }
`;

export const StyledForm = styled.form`
  font-family: 'Play', sans-serif;
  background-color: #0b1325;
  justify-content: space-around;
  border-radius: ${(props) => props.theme.sizes['x-small']};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: ${(props) => props.theme.sizes.small};
  margin: ${(props) => props.theme.sizes['x-small']};

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  button {
    background-color: transparent;
    border: 0;
    padding: 0;
  }

  i {
    font-size: ${(props) => props.theme.sizes['x-large']};
    color: white;
    margin: ${(props) => props.theme.sizes.medium};
    padding: ${(props) => props.theme.sizes.medium};
  }

  @media (min-width: 420px) {
    width: 500px;
    align-self: center;
    min-height: 500px;
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
  margin: ${(props) => props.theme.sizes['x-small']}; 0;

  label {
    color: white;
    text-align: start;
    margin: ${(props) => props.theme.sizes['x-small']} 0;
  }
  input {
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid white;
    color: white;
  }

  p {
    color: #de0e0e;
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
