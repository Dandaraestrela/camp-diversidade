import styled from "styled-components";

export const StyledTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 100px;
  h1 {
    font-family: "Poppins", sans-serif;
    color: ${(props) => props.theme.colors.primaryBlue};
    font-size: 40px;
    font-weight: 700;
  }
`;

export const StyledDecadaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledDecadaText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  h2 {
    font-size: 22px;
    font-weight: normal;
    line-height: 30px;
    color: ${(props) => props.theme.colors.neutralGrey1};
  }
`;

export const StyledDecadaImg = styled.img`
  max-width: 542px;
  max-height: 512px;

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
