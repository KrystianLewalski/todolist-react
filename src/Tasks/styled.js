import styled, { css } from "styled-components"

export const List = styled.ul`
    list-style-type: none;
    padding: 20px;
    margin: 0px;
`;

export const Item = styled.li`
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
    background: hsl(103, 100%, 25%);
    color: hsl(0, 0%, 100%);
    border: none;
    cursor: pointer;

    ${({ toogleDone }) => toogleDone && css`
        background: hsl(120, 61%, 34%);

        &:hover {
            background: hsl(103, 100%, 30%);
            transition: 0.5s;
        }
        
        &:active {
            background: hsl(103, 100%, 35%);
            transition: 0.5s;
        }
    `}

    ${({ remove }) => remove && css`
        display: grid;
        align-self: center;
        height: 30px;
        width: 30px;
        padding: 5.5px 5px 5px 4px;
        background-color: hsl(0, 100%, 50%);
        color: hsl(0, 0%, 100%);
        border: none;
        cursor: pointer;

        &:hover {
            background-color: hsl(0, 100%, 60%);
            transition: 0.5s;
        }

        &:active {
            background-color: hsl(0, 100%, 65%);
            transition: 0.5s;
        }
    `}
`;