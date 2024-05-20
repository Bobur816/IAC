import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { closeMobileNav, toggleMobileNav } from "./uiSlice";

const NavList = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    transition: transform 0.3s;
    position: absolute;
    background-color: gray;
    width: 100%;
    height: 100vh;
    padding: 70px 0 30px 30px;
    top: 0;
    z-index: -1;
    left: 0;
    flex-direction: column;
    transform: ${(props) =>
      props.$isopen === "true" ? "translateX(0)" : "translateX(-100%)"};
  }
  font-size: 16px;
  font-weight: 400;
  gap: 2.4rem;
  color: ${(props) =>
    props.$homeurl === "/dashboard" || props.$homeurl === "/about/carousel"
      ? "#fff"
      : "#000"};
  position: relative;
  @media (max-width: 768px) {
    /* color: #000; */
  }
  & > li {
    /* background-color: blue; */
    display: flex;
    align-items: center;
    /* background-color: red; */
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

const ForViewChange = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

function MainNav() {
  const homeurl = useLocation().pathname;
  const { isMobileNavOpen } = useSelector((state) => state.ui);
  const isopen = isMobileNavOpen.toString();
  const dispatch = useDispatch();
  // const isHomeUrl = homeUrl === "/dashboard";
  // console.log(homeUrl);
  function handleToggle() {
    dispatch(closeMobileNav());
  }
  return (
    <nav>
      <NavList $homeurl={homeurl} $isopen={isopen}>
        <li>
          <StyledNavLink onClick={handleToggle} to="/about">
            <span>About</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink onClick={handleToggle} to="/projects">
            <span>Projects</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink onClick={handleToggle} to="/products/processing-lines">
            <span>Products</span>
          </StyledNavLink>

          <ForViewChange>
            <Dropdown type="products" />
          </ForViewChange>
        </li>
        <li>
          <StyledNavLink onClick={handleToggle} to="/partners">
            <span>Solution partners</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
