import styled from "styled-components";

export const StyledHomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 100px;
`;

export const StyledHomeContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;
  width: 50%;
  z-index: 1;
  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 0;
    color: ${(props) => props.theme.colors.primaryBlue};
  }
  h2 {
    font-weight: normal;
    font-size: 22px;
    margin-bottom: 0;
  }
  button {
    margin-top: 20%;
    display: flex;
    flex-direction: row;
    max-width: 422px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 40px;
    padding: 19px 88px;
    background: ${(props) => props.theme.colors.primaryPurple};
    color: white;
    font-size: 22px;
  }
  @media (max-width: 960px) {
      width:100%;
      align-items: center;
    }
`;

export const StyledHomeImg = styled.img`
    width: 32rem;
    height: auto;
    object-fit: cover;
    position: absolute;
    right: 0;
    bottom: 0;
    @media (max-width: 960px) {
      display: none;
    }
`;
