import styled from "styled-components";

export const StyledAboutWrapper = styled.div`
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
    justify-content: center;
    padding: 30px 50px;
    h1{
      text-align: center;
    }
  }
`;

export const StyledProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 24px;
  @media (max-width: 960px) {
    justify-content: center;
    }
`;

export const StyledProjectText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  h2 {
    font-size: 22px;
    font-weight: normal;
    line-height: 30px;
    color: ${(props) => props.theme.colors.neutralGrey1};
  }
  @media (max-width: 1200px) {
    width: 100%;
    h2{
      text-align: justify;
    }
  }
`;

export const StyledProjectImg = styled.img`
  max-width: 542px;
  max-height: 512px;
  @media (max-width: 1200px) {
    max-width: 100%;
    max-height: auto;
  }
`;

export const StyledPeopleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 24px;
`;
