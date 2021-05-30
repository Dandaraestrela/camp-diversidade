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
  @media (max-width: 960px) {
    padding: 30px 50px;
  }
`;

export const StyledDecadaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
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
  @media (max-width: 1200px){
    width: 100%;
    h2{
      text-align: justify;
    }
  }
`;

export const StyledDecadaImg = styled.img`
  max-width: 542px;
  max-height: 512px;
  @media (max-width: 1200px) {
    max-width: 100%;
    height: auto;
  }
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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
