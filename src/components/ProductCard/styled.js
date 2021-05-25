import styled from "styled-components";

export const StyledProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 412px;
  min-height: 162px;
  padding: 8px;
  background: ${(props) => props.theme.colors.terciaryOrange};
  box-shadow: 6px 6px 32px 1px rgba(251, 144, 121, 0.26);
  border-radius: 8px;
  img {
    width: 146px;
    height: 146px;
    object-fit: cover;
  }
  @media (max-width: 540px){
    justify-content: center;
    flex-wrap: wrap;
    img{
      margin-bottom: 16px;
    }
  }
`;

export const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  margin-right: 8px;
  h4 {
    margin: 0px;
    font-size: 20px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.primaryBlue};
  }
  h5 {
    margin: 0px;
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.neutralGrey1};
  }
`;

export const StyledProductCategory = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.primaryOrange};
  width: fit-content;
  height: fit-content;
  padding: 6px 8px;
  border-radius: 3px;
  h3 {
    margin: 0;
    color: white;
    background: none;
    font-size: 12px;
    font-weight: 600;
  }
`;
