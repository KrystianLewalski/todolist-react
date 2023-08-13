import styled from "styled-components"

export const Header = styled.header`
    display: grid;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    } 
`;