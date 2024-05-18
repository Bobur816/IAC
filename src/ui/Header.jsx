import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import NavRight from "./NavRight";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  /* padding-left: 32px;
  padding-right: 32px; */

  & > div:nth-child(2) {
    min-width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5.5rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />

      <div>
        <MainNav />
        <NavRight />
      </div>
    </StyledHeader>
  );
}

export default Header;
