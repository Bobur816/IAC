import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { closeChoseProduct } from "./uiSlice";
import useOutsideAlerter from "../hooks/useOutsideChecker2";
import { useRef } from "react";

const StyledChose = styled.div`
  /* background-color: red; */
  backdrop-filter: blur(5px);
  background-color: #0000006a;
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 20;
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

const StyledUl = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* width: 50%; */
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
`;

const StyledNavLink = styled(NavLink)`
  background-color: #fff;
  padding: 10px 20px;
  display: inline-block;
  width: 250px;
  font-size: 20px;
  text-align: center;
  border-radius: 5px;
  transition: transform 0.1s;

  &:hover {
    background-color: #ffffffac;
  }

  &:active {
    transform: scale(0.95);
  }
`;

function ChoseProductType() {
  const { isChoseProductOpen: isOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const ref1 = useRef();
  function handleClose() {
    dispatch(closeChoseProduct());
  }

  useOutsideAlerter(ref1, handleClose);
  return (
    <StyledChose $isopen={isOpen.toString()}>
      <StyledUl ref={ref1}>
        <li>
          <StyledNavLink to="/products/processing-lines" onClick={handleClose}>
            Processing Lines
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/products/single-machines" onClick={handleClose}>
            Single Machines
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/products/cutting-machines" onClick={handleClose}>
            Cutting Machines
          </StyledNavLink>
        </li>
      </StyledUl>
    </StyledChose>
  );
}

export default ChoseProductType;
