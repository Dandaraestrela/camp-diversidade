import styled from "styled-components";
import Product from "../../assets/Product.png";

export const StyledDialogBackground = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(3, 0, 131, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const StyledDialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.fourthOrange};
  width: 505px;
  height: 600px;
  border-radius: 16px;
`;

export const StyledImage = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  background: none;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px 16px 0 0;
  }
`;

export const StyledExit = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  height: 40px;
  width: 505px;
  justify-content: flex-end;
  background: none;
  button {
    width: 40px;
    height: 40px;
    border: none;
    background: none;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 0 0 16px 16px;
  justify-content: space-around;
  padding: 10px 30px;
  h5{
    font-size: 22px;
    color: ${(props) => props.theme.colors.primaryBlue};
    font-weight: medium;
    margin: 0px;
  }
  h6{
    font-size: 16px;
    color: ${(props) => props.theme.colors.neutralGrey1};
    font-weight: normal;
    margin: 0px;
  }
  button{
    align-self: center;
    border: none;
    border-radius: 35px;
    background: ${(props) => props.theme.colors.primaryPurple};
    width: fit-content;
    padding: 9px 48px;
    font-size: 18px;
    font-weight: bold;
    color: white;
  }
`;
