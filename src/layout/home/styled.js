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
    width: 50%;
    h1{
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        font-size: 57px;
    }
    h2{
        font-weight: normal;
        font-size: 30px;
    }
    img{
        width:50%;
        height: 50%;
        object-fit: cover;
        align-self: center;
    }
`;
