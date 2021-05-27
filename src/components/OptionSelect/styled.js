import styled, { ThemeProvider } from "styled-components";

export const StyledSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 150px;
  height: 138px;
  padding: 4px;
  background: ${(props) =>
    props.selected
      ? props.theme.colors.primaryPurple
      : props.theme.colors.secundaryOrange};
  border: 2px solid
    ${(props) =>
      props.selected
        ? props.theme.colors.primaryPurple
        : props.theme.colors.secundaryOrange};
  border-radius: 12px;
  margin-right: 12px;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const StyledImage = styled.div`
  display: flex;
  align-items: center;
  height: 66%;
  background: none;

  img {
    width: auto;
    background: none;
    height: 50px;

  }

`;

export const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 34%;
  width: 100%;
  border-radius: 0 0 12px 12px;
  h4 {
    text-align: center;
    font-size: 12px;
  }
`;
