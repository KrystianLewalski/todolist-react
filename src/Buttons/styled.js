import styled from "styled-components"

export const ListButton = styled.button`
    display: grid;
    grid-template-columns: auto auto;
    border: none;
    background-color: inherit;
    color: ${({ theme }) => theme.colors.teal};
    margin-top: 15px;
    cursor: pointer;

    &:hover {
        color: ${({theme}) => theme.colors.hoverTeal};
        transition: 0.5s;
    }

    &:active {
        color: ${({theme}) => theme.colors.activeTeal};
        transition: 0.5s;
    }

    &:disabled {
        color: ${({theme}) => theme.colors.grey};
        transition: 0.5s;
    }

    @media (max-width:${({theme}) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`;