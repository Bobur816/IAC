import styled from "styled-components";

const StyledContainer = styled.div`
  /* position: relative; */
  height: 100%;
  /* width: 100%; */
  margin-left: 3.2rem;
  margin-right: 3.2rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    /* background-color: red; */
  }
  /* width: 1375px;
  margin-left: auto;
  margin-right: auto; */

  /* background-color: #ffff0057; */
`;
// eslint-disable-next-line react/prop-types
function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
