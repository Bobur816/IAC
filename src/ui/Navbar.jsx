import styled, { css } from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import NavRight from "./NavRight";
import { useLocation } from "react-router-dom";
import Container from "./Container";
import MobileNavToggle from "./MobileNavToggle";

const StyledNavbar = styled.header`
  height: 9rem;
  /* background-color: #ff00006c; */
  /* transition: all 0.3s; */
  /* box-shadow: 0 0 8px px white inset; */

  position: fixed;
  z-index: 5;
  ${(props) =>
    props.$pageUrl.includes("products") ||
    props.$pageUrl.includes("partners") ||
    props.$pageUrl.includes("projects")
      ? css`
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
          /* z-index: 2; */
        `
      : css``};

  width: 100%;
`;

const Navdiv = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div:nth-child(1) {
    /* min-width: 50%; */
    height: 100%;
    display: flex;
    align-items: center;
    gap: 5.5rem;

    @media (max-width: 1024px) {
      gap: 2rem;
    }
  }

  & > div:nth-child(2) {
    min-width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5.5rem;

    @media (max-width: 1024px) {
      gap: 2rem;
    }
  }
`;

function Navbar() {
  const pageUrl = useLocation().pathname;

  return (
    <StyledNavbar $pageUrl={pageUrl}>
      <Container>
        <Navdiv>
          <div>
            <MobileNavToggle />
            <Logo />
          </div>
          <div>
            <MainNav />
            <NavRight />
          </div>
        </Navdiv>
      </Container>
    </StyledNavbar>
  );
}

export default Navbar;
