import styled from "styled-components";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { useDispatch } from "react-redux";
import { toggleFormOpen } from "./uiSlice";

const StyledNavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2.3rem;
`;

function NavRight() {
  const dispatch = useDispatch();
  function handleOpen() {
    dispatch(toggleFormOpen());
  }
  return (
    <StyledNavRight>
      <Dropdown type="language" />

      <Button type="black" onClick={handleOpen}>
        Contact us
      </Button>
    </StyledNavRight>
  );
}

export default NavRight;
