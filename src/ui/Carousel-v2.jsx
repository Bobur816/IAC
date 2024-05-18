/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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
  /* position: absolute; */
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
  gap: 8px;
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

const StoryBox = styled.div`
  background-color: black;
  display: flex;
  bottom: 8rem;
  left: 3.2rem;
  flex-direction: column;
  width: 50%;
  position: absolute;
  padding: 24px;
  gap: 24px;
  color: #fff;
  transition: all 0.5s;
`;
const StoryTitle = styled.h4`
  font-family: "New York";
  font-size: 24px;
  font-style: normal;
  font-weight: 568;
  line-height: normal;
  transition: all 0.5s;
`;
const StoryText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  display: inline-block;
  font-family: Inter;
  white-space: break-spaces;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: all 0.5s;
`;

const Dots = styled.ul`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
// eslint-disable-next-line react/prop-types
function Carousel() {
  const data = useSelector((state) => state.ui.aboutInfo);
  //   Array.from({ length: 10 }).forEach((_, i) => data.push(i));
  const [activeSlide, setActiveSlide] = useState(6);
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
        <StoryBox>
          <StoryTitle>{title}</StoryTitle>
          <StoryText>{subtitle}</StoryText>
        </StoryBox>
      </CarouselSlider>
      <CarouselController>
        <button onClick={handlePrev}>
          <IoIosArrowUp />
        </button>
        <Dots ref={ref}>
          {data.map((item, i) => (
            <li
              onClick={() => setActiveSlide(i)}
              className={`dot-white ${
                i === activeSlide ? "active-dot__white" : ""
              }`}
              key={i}
            ></li>
          ))}
        </Dots>
        <button onClick={handleNext}>
          <IoIosArrowDown />
        </button>
      </CarouselController>
    </StyledCarousel>
  );
}

export default Carousel;
