import styled, { css } from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import NavRight from "./NavRight";
import { useLocation } from "react-router-dom";
import Container from "./Container";

const StyledNavbar = styled.header`
  height: 9rem;
  /* background-color: #ff00006c; */
  transition: all 2s;
  /* box-shadow: 0 0 8px px white inset; */

  ${(props) =>
    props.$pageUrl.includes("products") || props.$pageUrl.includes("partners")
      ? css`
          position: fixed;
          backdrop-filter: blur(5px);
        `
      : css``};
  width: 100%;
  z-index: 1;
`;

const Navdiv = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div:nth-child(2) {
    min-width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5.5rem;
  }
`;

function Navbar() {
  const pageUrl = useLocation().pathname;

  return (
    <StyledNavbar $pageUrl={pageUrl}>
      <Container>
        <Navdiv>
          <Logo />
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
