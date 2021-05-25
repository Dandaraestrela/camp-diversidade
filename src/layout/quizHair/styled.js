import styled, { ThemeProvider } from "styled-components";

export const StyledQuizHWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 100px;
  background: "#FFEAE5";
  h1 {
    color: ${(props) => props.theme.colors.primaryBlue};
    width: 30%;
    font-family: "Poppins", sans-serif;
    font-weight: lighter;
    line-height: 57px;
    margin-top: 0;
    font-size: 40px;
    margin-bottom: 16px;
  }
  h2 {
    font-size: 20px;
    color: ${(props) => props.theme.colors.neutralGrey3};
  }
  h3 {
    font-size: 18px;
    font-weight: normal;
    color: ${(props) => props.theme.colors.neutralGrey3};
  }

  strong {
    font-family: "Poppins", sans-serif;
  }
`;

export const StyledQuizSteps = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 16px;

  button {
    border: none;
    cursor: pointer;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right: 16px;
  }
`;

export const StyledOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  input {
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
  margin-top: 3%;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    width: 14%;
    height: auto;
    padding: 8px 24px;
    font-size: 22px;
    font-weight: bold;
    border-radius: 35px;
  }
`;

export const StyledResultContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 0;
  margin-bottom: 0;
  max-width: 28rem;
  h4 {
    font-family: "Poppins", sans-serif;
    font-weight: lighter;
    font-size: 40px;
    line-height: 57px;
    color: ${(props) => props.theme.colors.primaryBlue};
    margin: 0;
  }
  h5 {
    font-weight: normal;
    font-size: 22px;
    margin-top: 10%;
  }
  button {
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    max-width: 422px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 40px;
    padding: 13px 82px;
    background: ${(props) => props.theme.colors.primaryPurple};
    color: white;
    font-size: 22px;
  }
`;

export const StyledResultImg = styled.img`
  margin-top: 4rem;
  margin-bottom: 0;
  max-width: 28rem;
  height: auto;
  object-fit: cover;
  align-self: center;
`;