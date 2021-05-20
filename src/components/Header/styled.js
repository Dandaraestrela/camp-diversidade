import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex: row;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  width: 100%;

  img{
    width: 90px;
    height: 40px;
    object-fit: cover;
  }
`;

export const StyledTabsWrapper = styled.div`
  display: flex;
  flex: row;
  align-items: center;
  justify-content: center;
  h3{
    font-size: 16px;
    color: black;
  }
`;

