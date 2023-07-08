import styled, { css } from "styled-components"

export const StyledList = styled.ul`
    list-style-type: none;
    padding: 20px;
    margin: 0px;
`;

export const StyledItem = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    border-bottom: 1px solid #ddd;
    
    
    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    padding: 20px;
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    display: grid;
    align-self: center;
    padding: 7px;
    height: 30px;
    width: 30px;
    color: ${({ theme }) => theme.colors.white};
    border: none;
    cursor: pointer;
`;

export const ToogleDoneButton = styled(Button)`
    background: ${({ theme }) => theme.colors.green};

    &:hover {
    background: ${({ theme }) => theme.colors.hoverGreen};
    transition: 0.5s;
    }

    &:active {
    background: ${({ theme }) => theme.colors.activeGreen};
    transition: 0.5s;
    }
`;

export const RemoveButton = styled(Button)`
    padding: 5.5px 5px 5px 4px;
    background-color: ${({ theme }) => theme.colors.red};
    &:hover {
        background-color: ${({ theme }) => theme.colors.hoverRed};
        transition: 0.5s;
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.activeRed};
        transition: 0.5s;
    }
`;