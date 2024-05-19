import styled from "styled-components";
import HeadText from "../ui/HeadText";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import ProductImgSlider from "../ui/ProductImgSlider";

const StyledProduct = styled.div`
  /* background-color: red; */
  height: 100%;
  padding-top: 14rem;
  padding-bottom: 11rem;
`;

const Main = styled.div`
  display: flex;
  /* height: 100%; */
  /* background-color: yellow; */
`;

const ImgCarousel = styled.div`
  width: 50%;
`;

const MainText = styled.div`
  /* background-color: blue; */
  padding: 20px 44px;
  width: 50%;

  & p {
    color: #626262;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    white-space: break-spaces;
    margin-bottom: 84px;
  }

  & button {
    width: 300px;
  }
`;

function Product() {
  const { products } = useSelector((state) => state.ui);
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  console.log(product);

  return (
    <StyledProduct>
      <HeadText>{product.title}</HeadText>
      <Paragraph>{product.description}</Paragraph>
      <Main>
        <ImgCarousel>
          <ProductImgSlider images={product.imgCollection} />
        </ImgCarousel>
        <MainText>
          <p>{product.infoText}</p>
          <Button>Get a quote</Button>
        </MainText>
      </Main>
    </StyledProduct>
  );
}

export default Product;
