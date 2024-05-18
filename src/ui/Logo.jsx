import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled(NavLink)`
  display: flex;
  align-items: center;
`;

const Img = styled.img``;
function Logo() {
  return (
    <StyledLogo to="/dashboard">
      <Img src="/Logo.svg" />
    </StyledLogo>
  );
}

export default Logo;
