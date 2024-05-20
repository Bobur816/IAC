import styled from "styled-components";
import Cards from "../ui/Cards";
import Dropdown from "../ui/Dropdown";
import { useLocation } from "react-router-dom";

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

const Category = styled.div`
  /* position: fixed; */
  display: none;
  top: 100px;
  width: 130px;
  margin-left: auto;
  margin-right: 10px;
  /* right: 100px; */
  z-index: 1;
  /* background-color: red; */
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

// eslint-disable-next-line react/prop-types
function Products({ children }) {
  const pageUrl = useLocation().pathname.split("/");
  const name = pageUrl.slice(-1)[0].split("-").join(" ");
  console.log(name);
  return (
    <StyledProducts>
      <div>
        <ForHead>{children}</ForHead>
        <Category>
          <Dropdown type="products-mobile" />
        </Category>
        <Cards />
      </div>
    </StyledProducts>
  );
}

export default Products;
