import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "acive"
export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    &.${activeClassName} {
        color: red;
    }
`;