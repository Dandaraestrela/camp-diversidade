import styled from "styled-components";

export const StyledPaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 16px;
  @media (max-width: 600px) {
    justify-content: center;
  } ;
`;

export const StyledNumberPages = styled.h3`
  display: inline;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  color: #333333;
`;

export const StyledTitlePages = styled.h3`
  display: inline;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #333333;
  margin-left: 8px;
`;

export const StyledArrowLeft = styled.button`
  display: flex;
  flex-direction: row;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 16px;
  margin-right: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) =>
    props.first === true ? "rgba(51, 51, 51, 0.4)" : " #333333"};
  @media (max-width: 600px) {
    display: none;
  } ;
`;

export const StyledArrowLeftResponsive = styled(StyledArrowLeft)`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    margin-left: 0px;
  } ;
`;

export const StyledArrowRight = styled.button`
  display: flex;
  flex-direction: row;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) =>
    props.last === true ? "rgba(51, 51, 51, 0.4)" : " #333333"};
  @media (max-width: 600px) {
    margin-left: 16px;
  } ;
`;
