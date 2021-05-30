import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  width: 100%;
  margin-bottom: 4rem;

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
  }
  @media (max-width: 960px) {
      flex-direction:column;
      height: 100%;
      justify-content: center;
    }
`;

export const StyledTabsWrapper = styled.div`
  display: flex;
  flex: row;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 16px;
    color: black;
  }
  button {
    text-decoration: none;
    padding: 4px 8px;
    margin-left: 2rem;
    background: none;
    border: none;
    font-size: 16px;
    @media (max-width: 960px) {
      margin-right: 4px;
      margin-top: 1rem;
      align-self: center;
    }
  }
`;
