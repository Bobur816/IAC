import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "./Dropdown";

const NavList = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    /* display: none; */
    position: absolute;
    top: 50px;
    left: 0;
  }
  font-size: 16px;
  font-weight: 400;
  gap: 2.4rem;
  @media (max-width: 1130px) {
  }
  color: ${(props) =>
    props.$homeurl === "/dashboard" || props.$homeurl === "/about/carousel"
      ? "#fff"
      : "#000"};
  position: relative;
  & > li {
    /* background-color: blue; */
    display: flex;
    align-items: center;
  }
`;

const StyledNavLink = styled(NavLink)`
  border-bottom: 1px solid transparent;
  padding: 4px 5px;
  &.active {
    color: var(--color-green-700);
    border-color: var(--color-green-700);
  }
`;

function MainNav() {
  const homeurl = useLocation().pathname;
  // const isHomeUrl = homeUrl === "/dashboard";
  // console.log(homeUrl);
  return (
    <nav>
      <NavList $homeurl={homeurl}>
        <li>
          <StyledNavLink to="/about">
            <span>About</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/projects">
            <span>Projects</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/products">
            <span>Products</span>
          </StyledNavLink>
          <Dropdown type="products" />
        </li>
        <li>
          <StyledNavLink to="/partners">
            <span>Solution partners</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
