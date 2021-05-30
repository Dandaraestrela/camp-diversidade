import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 582px;
    max-height: 232px;
    background: none;
    margin-right: 24px;
    margin-bottom: 24px;
    img{
        width: 214px;
        height: 232px;
        object-fit: cover;
        margin-right: 18px;
    }
    @media (max-width: 940px){
    max-height: fit-content;
    justify-content: center;
    flex-wrap: wrap;
    img{
        margin-bottom: 8px;
    }
  }
`;

export const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    h3{
        margin: 0;
        margin-bottom: 8px;
        font-size: 20px;
        font-weight: bold;
        color: ${(props) => props.theme.colors.primaryBlue};
    }
    h4{
        margin: 0;
        margin-bottom: 8px;
        font-size: 12px;
        font-weight: normal;
        color: white;
        padding: 6px;
        width: fit-content;
        background: ${(props) => props.theme.colors.primaryOrange};
    }
    h5{
        margin: 0;
        font-size: 16px;
        font-weight: normal;
        color: ${(props) => props.theme.colors.neutralGrey1};
    }
`;
