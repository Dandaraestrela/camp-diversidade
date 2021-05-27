import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 582px;
    height: 232px;
    background: none;
    margin-right: 24px;
    margin-bottom: 24px;
    img{
        width: 214px;
        height: 232px;
        object-fit: cover;
        margin-right: 18px;
    }
`;

export const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h3{
        margin: 0;
        font-size: 20px;
        font-weight: bold;
        color: ${(props) => props.theme.colors.primaryBlue};
    }
    h4{
        margin: 0;
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
