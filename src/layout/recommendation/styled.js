import styled from "styled-components";

export const StyledRecWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 100px;
  h1 {
    color: ${(props) => props.theme.colors.primaryBlue};
    font-family: "Poppins", sans-serif;
    font-weight: lighter;
    line-height: 57px;
    margin-top: 0;
    font-size: 40px;
    width: 30%;
    margin-bottom: 16px;
    strong {
      font-family: "Poppins", sans-serif;
      font-weight: bold;
    }
    p {
      color: ${(props) => props.theme.colors.neutralGrey7};
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
    }
  }
  @media (max-width: 960px) {
    padding: 30px 50px;
    align-items: center;
    justify-content: center;
    h1 {
      width: 100%;
      text-align: center;
    }
    p{
      text-align: justify;
    }
  }
`;

export const StyledRecContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const StyledFilters = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: fit-content;
  width: 30%;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledInfoType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  button {
    background: none;
    border: none;
  }
  @media (max-width: 960px) {
    align-items: center;
    justify-content: center;
  }
`;

export const StyledCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    align-items: center;
    justify-content: center;
  }
`;

export const StyledLoading = styled.img`
  width: 4%;
  height: auto;
  align-self: center;
`;
