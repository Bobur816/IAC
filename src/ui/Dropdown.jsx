import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { changeLanguage } from "./uiSlice";
import { CiGlobe } from "react-icons/ci";
import useOutsideAlerter from "../hooks/useOutsideChecker";

const StyledDropdown = styled.div`
  position: relative;
  height: 100%;
  /* width: 100%; */
  display: flex;
  align-items: center;
  transition: all 0.3s;
  & svg {
    transform: rotate(0);
    transition: all 0.3s;
    width: 16px;
    height: 16px;
    ${(props) =>
      props.$isopen === "true"
        ? css`
            transform: rotate(180deg);
          `
        : css`
            transform: rotate(0);
          `};
  }
`;

const DropdownItems = styled.ul`
  color: #000;
  position: absolute;

  display: flex;
  flex-direction: column;
  z-index: 1;
  gap: 1.6rem;
  /* max-width: 200px; */
  top: 120%;
  right: 0;

  /* right: 100%; */
  background-color: #fff;
  border-radius: 0.8rem;
  padding: 1.6rem;
  box-shadow: 0px 14px 84px 0px rgba(0, 0, 0, 0.05);

  /* transform: translate(0, 0) */
  ${(props) => (props.$isopen === "true" ? "scale(1)" : "scale(0.9)")}
  & li {
    display: block;
    width: fit-content;
  }
  & a {
    display: block;
    white-space: nowrap;
  }

  ${(props) =>
    props.$isopen === "true"
      ? css`
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `};
  transition: all 0.2s;
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  width: 40px;

  &:hover {
    color: var(--color-green-700);
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  display: block;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &.active,
  &:hover {
    color: var(--color-green-700);
  }
`;

const StyledLangChanger = styled.div`
  /* background-color: red; */
  color: ${(props) =>
    props.$homeurl === "/dashboard" || props.$homeurl === "/about/carousel"
      ? "#fff"
      : "#000"};
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  & svg {
    width: 20px;
    height: 20px;
  }
  & span {
    text-transform: capitalize;
  }
  & a.active {
    border: none;
  }
`;
// eslint-disable-next-line react/prop-types
function Dropdown({ type }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState("false");
  const homeurl = useLocation().pathname;
  const { language } = useSelector((state) => state.ui);
  const wrapperRef = useRef(null);

  const pageUrl = homeurl.split("/");
  const name = pageUrl.slice(-1)[0].split("-").join(" ");
  console.log(name);

  useOutsideAlerter(wrapperRef, setIsOpen);

  if (type === "products")
    return (
      <StyledDropdown $isopen={isOpen} ref={wrapperRef}>
        <IoIosArrowDown
          onClick={() => setIsOpen((e) => (e === "true" ? "false" : "true"))}
        />
        <DropdownItems
          $isopen={isOpen}
          onClick={() => setIsOpen("false")}
          $homeurl={homeurl}
        >
          <li>
            <StyledNavLink to="/products/processing-lines">
              Processing Lines
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/products/single-machines">
              Single Machines
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/products/cutting-machines">
              Cutting Machines
            </StyledNavLink>
          </li>
        </DropdownItems>
      </StyledDropdown>
    );

  // for language changing
  if (type === "language")
    return (
      <StyledLangChanger
        ref={wrapperRef}
        $homeurl={homeurl}
        onClick={() => setIsOpen((e) => (e === "true" ? "false" : "true"))}
      >
        <CiGlobe />
        <span>{language}</span>
        <StyledDropdown $isopen={isOpen}>
          <IoIosArrowDown />
          <DropdownItems $isopen={isOpen} $homeurl={homeurl}>
            <li>
              <StyledButton
                onClick={() => {
                  dispatch(changeLanguage("eng"));
                }}
              >
                Eng
              </StyledButton>
            </li>
            <li>
              <StyledButton
                onClick={() => {
                  dispatch(changeLanguage("uzb"));
                }}
              >
                Uzb
              </StyledButton>
            </li>
          </DropdownItems>
        </StyledDropdown>
      </StyledLangChanger>
    );

  if (type === "products-mobile")
    return (
      <StyledLangChanger
        ref={wrapperRef}
        $homeurl={homeurl}
        onClick={() => setIsOpen((e) => (e === "true" ? "false" : "true"))}
      >
        <span>{name}</span>
        <StyledDropdown $isopen={isOpen}>
          <IoIosArrowDown />
          <DropdownItems $isopen={isOpen} $homeurl={homeurl}>
            <li>
              <StyledNavLink to="/products/processing-lines">
                Processing Lines
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/products/single-machines">
                Single Machines
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/products/cutting-machines">
                Cutting Machines
              </StyledNavLink>
            </li>
          </DropdownItems>
        </StyledDropdown>
      </StyledLangChanger>
    );
}

export default Dropdown;
