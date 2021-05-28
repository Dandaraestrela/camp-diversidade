import styled from "styled-components";

export const StyledTipWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 250px;
  min-height: 162px;
  padding: 16px;
  background: ${(props) => props.theme.colors.terciaryOrange};
  box-shadow: 6px 6px 32px 1px rgba(251, 144, 121, 0.26);
  border-radius: 8px;
  margin-right: 12px;
  margin-bottom: 12px;

  @media (max-width: 540px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const StyledTipInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  h4 {
    margin-top: 0;
    margin-bottom: 16px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: ${(props) => props.theme.colors.primaryBlue};
  }
  h5 {
    margin: 0px;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.theme.colors.neutralGrey1};
  }
`;
