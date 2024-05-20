import styled from "styled-components";
import Cards from "../ui/Cards";

const StyledProducts = styled.div`
  width: 100%;
  /* background-color: red; */
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
    & > div {
      width: 100%;
    }
  }
  /* position: relative; */
  /* overflow-y: scroll; */
  /* overflow: visible; */
  /* justify-content: space-around; */
  flex-direction: column;
  padding: 14rem 0;
  & > div {
    /* position: absolute; */
    width: 100%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ForHead = styled.div`
  width: 100%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  /* margin-bottom: 6.8rem; */
`;

// eslint-disable-next-line react/prop-types
function Products({ children }) {
  return (
    <StyledProducts>
      <div>
        <ForHead>{children}</ForHead>
        <Cards />
      </div>
    </StyledProducts>
  );
}

export default Products;
