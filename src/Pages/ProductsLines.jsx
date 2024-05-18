import styled from "styled-components";
import HeadText from "../ui/HeadText";
import Paragraph from "../ui/Paragraph";
import Cards from "../ui/Cards";

const StyledProductsLines = styled.div`
  width: 100%;
  /* background-color: red; */
  display: flex;
  position: relative;
  overflow-y: scroll;
  /* overflow: visible; */
  /* justify-content: space-around; */
  flex-direction: column;
  padding-top: 3rem;
  & > div {
    position: absolute;
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
  margin-bottom: 6.8rem;
`;

function ProductsLines() {
  return (
    <StyledProductsLines>
      <div>
        <ForHead>
          <HeadText>Processing Lines</HeadText>
          <Paragraph width="50%">
            Here you can find list of processing lines and turn key projects we
            can offer
          </Paragraph>
        </ForHead>
        <Cards />
      </div>
    </StyledProductsLines>
  );
}

export default ProductsLines;
