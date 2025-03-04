import styled from "styled-components";
import HeadText from "../ui/HeadText";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import ProductImgSlider from "../ui/ProductImgSlider";
import { toggleFormOpen } from "../ui/uiSlice";

const StyledProduct = styled.div`
  height: 100%;

  padding-top: 14rem;
  padding-bottom: 11rem;
`;

const Main = styled.div`
  margin-top: 3rem;
  display: flex;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
    & > div {
      width: 100%;
    }
  }
`;

const ImgCarousel = styled.div`
  width: 50%;
  height: 50rem;
`;

const MainText = styled.div`
  padding: 20px 44px;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }

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

  const dispatch = useDispatch();
  function handleOpen() {
    dispatch(toggleFormOpen());
  }
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
          <Button onClick={handleOpen}>Get a quote</Button>
        </MainText>
      </Main>
    </StyledProduct>
  );
}

export default Product;
