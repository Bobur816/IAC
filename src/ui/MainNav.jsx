import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { closeChoseProduct, closeMobileNav, openChoseProduct } from "./uiSlice";
import { useRef } from "react";
import useOutsideAlerter from "../hooks/useOutsideChecker2";

const NavList = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    transition: transform 0.3s;
    position: absolute;
    background-color: gray;
    width: 50%;
    height: 100vh;
    padding: 70px 0 30px 30px;
    top: 0;
    left: 0;
    flex-direction: column;
    transform: ${(props) =>
      props.$isopen === "true" ? "translateX(0)" : "translateX(-100%)"};
    z-index: -1;
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

    @media (max-width: 768px) {
      color: #fff;
    }
  }
  @media (max-width: 768px) {
    color: #fff;
  }
`;
const StyledNavLink2 = styled(Link)`
  border-bottom: 1px solid transparent;
  padding: 4px 5px;

  &.active {
    color: var(--color-green-700);
    border-color: var(--color-green-700);

    @media (max-width: 768px) {
      color: #fff;
    }
  }
  @media (max-width: 768px) {
    color: #fff;
  }
  /* &.active {
    color: var(--color-green-700);
    border-color: var(--color-green-700);
  } */
`;

const ForViewChange = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

function MainNav() {
  const homeurl = useLocation().pathname;
  const { isMobileNavOpen } = useSelector((state) => state.ui);
  const isInProducts = homeurl.includes("products");
  console.log(isInProducts);
  const isopen = isMobileNavOpen.toString();
  const dispatch = useDispatch();
  // const isHomeUrl = homeUrl === "/dashboard";
  // console.log(homeUrl);
  function handleToggle() {
    dispatch(closeMobileNav());
    dispatch(closeChoseProduct());
  }

  function handleProducts() {
    dispatch(closeMobileNav());
    dispatch(openChoseProduct());
  }

  const ref = useRef();

  useOutsideAlerter(ref, handleToggle);

  return (
    <nav>
      <NavList ref={ref} $homeurl={homeurl} $isopen={isopen}>
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
          <StyledNavLink2
            className={`${isInProducts ? "active" : ""}`}
            onClick={handleProducts}
            to="#"
          >
            <span>Products</span>
          </StyledNavLink2>

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
