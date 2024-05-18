import styled from "styled-components";
import Button from "./Button";
import Dropdown from "./Dropdown";

const StyledNavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2.3rem;
`;

function NavRight() {
  return (
    <StyledNavRight>
      <Dropdown type="language" />

      <Button type="black">Contact us</Button>
    </StyledNavRight>
  );
}

export default NavRight;
