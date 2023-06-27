import styled from "styled-components"

export const AppSection = styled.section`
    background-color: hsl(0, 0%, 100%);
    margin-top: 15px;
    box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 20px;
    border-bottom: 1px solid hsl(0, 0%, 80%);
`;
    
export const SecondHeader = styled.h2`
    padding: 10px;
    margin-top: 15px;
`;
