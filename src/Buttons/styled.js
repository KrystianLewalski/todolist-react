import styled from "styled-components"

export const ListButton = styled.button`
    display: grid;
    grid-template-columns: auto auto;
    border: none;
    background-color: inherit;
    color: hsl(180, 100%, 25%);
    margin-top: 15px;
    cursor: pointer;

    &:hover {
        color: hsl(180, 100%, 30%);
        transition: 0.5s;
    }

    &:active {
        color: hsl(180, 100%, 35%);
        transition: 0.5s;
    }

    &:disabled {
        color: hsl(0, 0%, 50%);
        transition: 0.5s;
    }

    @media (max-width:767px) {
        grid-template-columns: 1fr;
    }
`;