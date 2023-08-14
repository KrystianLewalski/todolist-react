import styled from "styled-components"

export const StyledSection = styled.section`
    display:grid;
    grid-gap: 15px;
    padding: 15px;
    background-color: ${({theme}) => theme.colors.white};
    margin-top: 15px;
    box-shadow: 0 0 5px #ddd;
`;

export const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${({theme}) => theme.colors.lightGrey};
`;
    
export const StyledTitle = styled.h2`
    margin-top: 10px;
    word-break: keep-all;
`;
