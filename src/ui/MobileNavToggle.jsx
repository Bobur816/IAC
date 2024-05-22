import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileNav } from "./uiSlice";
import { useLocation } from "react-router-dom";

const StyledToggle = styled.div`
  /* background-color: red; */
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
  /* align-items: center; */
  /* height: 100%; */
  /* width: 100%; */

  & button {
    /* height: 30px;
    width: 30px; */
    display: flex;
    border: none;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    color: ${(props) =>
      props.$homeurl === "/dashboard" || props.$homeurl === "/about/carousel"
        ? "#fff"
        : "#000"};
    & svg {
      font-size: 25px;
    }
  }
  /* display: none; */
`;

function MobileNavToggle() {
  const homeurl = useLocation().pathname;

  const { isMobileNavOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(toggleMobileNav());
  }
  return (
    <StyledToggle $homeurl={homeurl}>
      <button onClick={handleToggle}>
        {isMobileNavOpen ? <LiaTimesSolid /> : <RxHamburgerMenu />}
      </button>
    </StyledToggle>
  );
}

export default MobileNavToggle;
