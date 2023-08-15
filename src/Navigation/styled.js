import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const activeClassName = "acive"
export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    color: white;
    text-decoration: none;
    &.${activeClassName} {
        font-weight: bold;
    }
`;

export const StyledList = styled.ul`
    display:flex;
    background-color: ${({ theme }) => theme.colors.teal};
    justify-content: center;
    padding: 20px;
`;

export const StyledListItem = styled.li`
    list-style: none;
    text-align: center;
    padding: 0px 20px 0px 20px;
`;