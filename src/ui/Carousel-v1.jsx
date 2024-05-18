/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import styled, { css } from "styled-components";

const StyledCarousel = styled.div`
  /* background-color: red; */
  display: block;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* transition-delay: 2s; */
  transition: all 1s;
  ${(props) =>
    props.$isvisible === "true"
      ? css`
          opacity: 100;
          /* visibility: visible; */
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `};
`;

const CarouselSlider = styled.div`
  background-image: url(${(props) => props.$imgurl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.5s;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const CarouselController = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  transform: translate(-50%, -50%);
  transition: all 1s;
  ${(props) =>
    props.$isvisible === "true"
      ? css`
          right: 0;
        `
      : css`
          right: -20%;
        `};
`;
// eslint-disable-next-line react/prop-types
function Carousel({ data, isVisibleCarousel }) {
  //   Array.from({ length: 10 }).forEach((_, i) => data.push(i));
  const [activeSlide, setActiveSlide] = useState(0);
  //   console.log(activeSlide);
  const ref = useRef();
  //   console.log(ref.current);

  function handlePrev() {
    setActiveSlide((i) => (i === 0 ? (i = data.length - 1) : i - 1));
  }

  function handleNext() {
    setActiveSlide((i) => (i === data.length - 1 ? (i = 0) : i + 1));
  }

  const { title, subtitle, imgUrl } = data[activeSlide];

  return (
    <StyledCarousel $isvisible={isVisibleCarousel}>
      <CarouselSlider $imgurl={imgUrl}>
        {/* {data.map((item, i) => (
          <img
            src={item.imgUrl}
            className={`slide ${data[i] === activeSlide ? "active-slide" : ""}`}
            key={item.imgUrl}
          />
        ))} */}
      </CarouselSlider>
      <CarouselController $isvisible={isVisibleCarousel}>
        <button onClick={handlePrev}>prev</button>
        <ul ref={ref}>
          {data.map((item, i) => (
            <li
              onClick={() => setActiveSlide(i)}
              className={`dot ${i === activeSlide ? "active-dot" : ""}`}
              key={i}
            >
              {i}
            </li>
          ))}
        </ul>
        <button onClick={handleNext}>next</button>
      </CarouselController>
    </StyledCarousel>
  );
}

export default Carousel;
