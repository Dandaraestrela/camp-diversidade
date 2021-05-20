import styled, { ThemeProvider } from "styled-components";

export const StyledQuizHWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 100px;
  h1{
    width:20%;
    font-weight: normal;
  }
`;

export const StyledQuizSteps = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    margin-bottom: 24px;

    button{
        border: none;
        cursor: pointer;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 8px;
    }
`;

export const StyledOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  input{
      display: none;
  }
`;

export const StyledOptions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  button{
    background: none;
    border: none;
    width: 10%;
    height: auto;
    padding: 8px 24px;
    font-size: 22px;
    font-weight: bold;
  }
  h2{
    font-weight: lighter;
    font-size: 22px;
  }
`;

export const StyledResultWrapper = styled.div`
  display: flex;
  h1{
    font-size: 12px;
  }
`;
