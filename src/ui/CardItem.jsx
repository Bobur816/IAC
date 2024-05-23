/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import { createRef, useEffect, useRef, useState } from "react";

const StyledCard = styled(Link)`
  /* background-color: darkblue; */
  background-color: #fff;
  /* display: none; */
  box-sizing: border-box;
  display: flex;
  padding: 12px;
  /* display: flex; */
  flex-direction: column;
  transition: all 1s;
  justify-content: space-between;
  transform: scale(0.5);
  opacity: 0;
  ${(props) =>
    props.$elementisvisible
      ? css`
          /* background-color: red; */
          transform: scale(1);
          opacity: 1;
        `
      : css`
          transform: scale(0.5);
          opacity: 0;
        `}

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
  const cardRef = useRef();
  const [elementIsvisible, setElementIsvisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setElementIsvisible(entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    }, {});

    observer.observe(cardRef.current);
  });
  return (
    <StyledCard
      to={`/products/${card.id}`}
      ref={cardRef}
      $elementisvisible={elementIsvisible}
    >
      <ImgBox>
        <img src={card.imgUrl} alt="" />
      </ImgBox>
      <div>
        <h2>Here will be the awesome product title</h2>
        <Button>More details</Button>
      </div>
    </StyledCard>
  );
}

export default CardItem;
