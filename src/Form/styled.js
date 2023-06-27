import styled from "styled-components"

export const ListForm = styled.form`
    min-width: 200px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px;
    margin-top: 15px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    } 
`;

export const Input = styled.input`
    border: 1px solid #ccc;
    padding: 5px;
    overflow: auto;
    padding: 10px;
`;

export const Button = styled.button`
    background-color: hsl(180, 100%, 25%);
    color: hsl(0, 0%, 100%);
    padding: 5px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transition: 0.5s;
        transform: scale(1.2);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
        transition: 0.5s;
        transform: scale(1.3);
    }
`;