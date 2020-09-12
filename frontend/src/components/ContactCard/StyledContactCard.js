import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border: 2px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  width: 100%;

  @media (min-width: 420px) {
    width: 200px;
    flex-direction: column;
  }
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 200px;

  div {
    overflow-wrap: break-word;
    margin: 5px 0;
  }

  p {
    font-weight: 600;
    margin: 0;
  }

  @media (min-width: 420px) {
    text-align: center;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 5px;

  i {
    cursor: pointer;
    padding: 5px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.blue};
  }

  i:nth-child(2) {
    color: ${(props) => props.theme.colors.red};
  }

  @media (min-width: 420px) {
    margin-top: 10px;
    flex-direction: row;
  }
`;
