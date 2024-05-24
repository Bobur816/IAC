import styled from "styled-components";
import Cards from "../ui/Cards";
import Dropdown from "../ui/Dropdown";

const StyledProducts = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
    & > div {
      width: 100%;
    }
  }
  flex-direction: column;
  padding: 14rem 0;
  & > div {
    width: 100%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ForHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Category = styled.div`
  margin-top: 15px;
  display: none;
  top: 100px;
  margin-left: auto;
  margin-right: 10px;
  z-index: 1;
  justify-content: flex-end;
  flex-wrap: nowrap;
  align-items: center;
  padding: 12px 4px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

// eslint-disable-next-line react/prop-types
function Products({ children }) {
  // const pageUrl = useLocation().pathname.split("/");
  // const name = pageUrl.slice(-1)[0].split("-").join(" ");
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
