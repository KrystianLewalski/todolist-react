import { StyledList, StyledListItem, StyledNavLink } from "./styled";

export default () => {
return (
<nav>
    <StyledList>
        <StyledListItem>
            <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </StyledListItem>
        <StyledListItem>
            <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </StyledListItem>
    </StyledList>
</nav>
);
};