import styled, { ThemeProvider } from 'styled-components';

export const StyledSelectorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    //background: ${(props) => props.selected ? props.theme.colors.primaryPurple : props.theme.colors.primaryOrange};
    width: 105px;
    height: 115px;
    padding: 8px;
    border: 4px solid ${(props) => props.selected ? props.theme.colors.primaryPurple : props.theme.colors.primaryOrange};
    border-radius: 12px;
    margin-right: 12px;
    cursor: pointer;
    img{
        width: 100%;
        height: 70px;
        object-fit: cover;
        border-radius: 12px 12px 0 0;
    }
`;

export const StyledCategory = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 21px;
    width: 100%;
    background: white;
    border-radius: 0 0 12px 12px;
    h2{
        font-size: 12px;
    }
`;