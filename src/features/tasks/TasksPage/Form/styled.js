import styled from "styled-components"

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;


    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    } 
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({theme}) => theme.colors.white};
    border: none;
    cursor: pointer;
    margin: 10px;

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