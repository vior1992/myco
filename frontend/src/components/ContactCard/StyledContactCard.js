import styled from 'styled-components';

// TODO
export const StyledCardWrapper = styled.div`
  display: flex;
  font-family: 'Play', sans-serif;
  justify-content: space-around;
  border: 2px solid black;
  border-radius: ${(props) => props.theme.sizes['x-small']};
  margin: ${(props) => props.theme.sizes['x-small']};
  padding: ${(props) => props.theme.sizes['x-small']};
  width: 100%;
  background-color: #efeeee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 420px) {
    width: 400px;
    flex-direction: column;
  }
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 200px;

  // flex-wrap: wrap;
  // word-break: break-all;

  // justify-content: space-between;
  // align-items: center;

  div {
    overflow-wrap: break-word;
    margin: ${(props) => props.theme.sizes.small} 0;
    max-width: none;
  }

  p {
    font-size: ${(props) => props.theme.sizes.small};
    font-weight: ${(props) => props.theme.fontSizes.large};
    margin: 0;
  }

  span {
    color: #444444;
  }

  @media (min-width: 420px) {
    text-align: center;
    align-self: center;

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
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 5px;
  font-size: ${(props) => props.theme.sizes.large};

  i {
    cursor: pointer;
    padding: 5px;
    font-weight: ${(props) => props.theme.fontSizes.large};
    color: ${(props) => props.theme.colors.blue};
  }

  i:nth-child(2) {
    color: ${(props) => props.theme.colors.red};
  }

  @media (min-width: 420px) {
    margin-top: ${(props) => props.theme.sizes['x-small']};
    flex-direction: row;

    i {
      font-size: ${(props) => props.theme.sizes['xx-huge']};
    }
  }
`;
