/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "./Button";

const StyledCard = styled.div`
  /* background-color: darkblue; */
  background-color: #fff;
  /* width: 20%; */
  /* width: 35rem; */
  /* min-width: 300px; */
  /* width: 25%; */
  /* height: 36rem; */
  box-sizing: border-box;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h2 {
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 12px;
  }
  & a {
    width: 100%;
  }

  & button {
    width: 100%;
    line-height: 10px;
  }
`;

const ImgBox = styled.div`
  height: 202px;
  /* min-width: 300px; */
  max-width: 100%;
  /* width: 20px; */
  overflow: hidden;
  margin-bottom: 2.4rem;
  & img {
    height: 100%;
    width: 100%;
    /* overflow: hidden; */
    object-fit: cover;
    z-index: 0;
  }
`;
function CardItem({ card }) {
  return (
    <StyledCard>
      <ImgBox>
        <img src={card.imgUrl} alt="" />
      </ImgBox>
      <div>
        <h2>Here will be the awesome product title</h2>
        <Button to={`/products/${card.id}`}>More details</Button>
      </div>
    </StyledCard>
  );
}

export default CardItem;
