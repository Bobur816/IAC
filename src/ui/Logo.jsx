import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled(NavLink)`
  /* height: 100%; */
  display: flex;
  align-items: center;
  transition: all 0.3s;
`;

const Img = styled.img``;
function Logo() {
  const pageUrl = useLocation().pathname;
  return (
    <StyledLogo to="/dashboard">
      <Img
        src={pageUrl === "/about/carousel" ? "/Logo-white.svg" : "/Logo.svg"}
      />
    </StyledLogo>
  );
}

export default Logo;
