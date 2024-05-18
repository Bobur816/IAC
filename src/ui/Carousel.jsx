/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

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
  animation-name: showCarrousel;
  animation-duration: 0.5s;

  @keyframes showCarrousel {
    from {
      transform: scale(1.1);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const CarouselController = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 15px;
  bottom: 100px;
  /* transform: translate(-50%, -50%); */
  transition: all 1s;
  animation-name: showController;
  animation-duration: 0.5s;

  @keyframes showController {
    0% {
      transform: translateX(50px);
    }
    75% {
      transform: translateX(50px);
    }
    to {
      transform: translateX(0);
    }
  }
`;
// eslint-disable-next-line react/prop-types
function Carousel() {
  const data = useSelector((state) => state.ui.aboutInfo);
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
    <StyledCarousel>
      <CarouselSlider $imgurl={imgUrl}>
        {/* {data.map((item, i) => (
          <img
            src={item.imgUrl}
            className={`slide ${data[i] === activeSlide ? "active-slide" : ""}`}
            key={item.imgUrl}
          />
        ))} */}
      </CarouselSlider>
      <CarouselController>
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
