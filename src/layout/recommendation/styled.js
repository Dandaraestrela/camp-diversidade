import styled from 'styled-components';

export const StyledRecWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 100px;
  h1{
    color: ${(props) => props.theme.colors.primaryBlue};
    font-family: "Poppins", sans-serif;
    font-weight: lighter;
    line-height: 57px;
    margin-top: 0;
    font-size: 40px;
    width: 30%;
    margin-bottom: 16px;
    strong{
      font-family: "Poppins", sans-serif;
      font-weight: bold;
    }
  }
`;

export const StyledRecContent = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledFilters = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (min-width: 800px){
    width: 30%;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 800px){
    width: 70%;
  }
`;

export const StyledInfoType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  button{
    background: none;
    border: none;
  }
`;

export const StyledCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;