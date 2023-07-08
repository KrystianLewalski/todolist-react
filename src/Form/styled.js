import styled from "styled-components"

export const StyledForm = styled.form`
    min-width: 200px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px;
    margin-top: 15px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
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
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({theme}) => theme.colors.white};
    padding: 5px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.colors.hoverTeal};
        transition: 0.5s;
        transform: scale(1.05);
    }

    &:active {
        background-color: ${({theme}) => theme.colors.activeTeal};
        transition: 0.5s;
        transform: scale(1.08);
    }
`;