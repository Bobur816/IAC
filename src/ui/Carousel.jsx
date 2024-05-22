/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CarouselController from "./CarouselController";

const StyledCarousel = styled.div`
  /* background-color: red; */
  display: block;
  /* position: relative; */
  /* overflow: hidden; */
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* transition-delay: 2s; */
  transition: all 1s;
`;

const CarouselSlider = styled.ul`
  /* background-image: url(${(props) => props.$imgurl}); */
  background-image: url("/CarouselBack.png");
  filter: brightness(0.8);
  /* background-color: red; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* transition: all 0.5s; */
  position: absolute;
  top: 0;
  left: 0;
  height: 100dvh;
  /* height: 300px; */
  width: 100%;
  /* overflow: hidden; */
  overflow-y: scroll;
  scroll-timeline: 3s;
  /* animation-name: showCarrousel; */
  animation-duration: 0.5s;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
  /* @keyframes showCarrousel {
    from {
      transform: scale(1.1);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  } */
`;

const Item = styled.li`
  /* background-image: url(${(props) => props.$imgurl}); */
  /* background-color: red; */
  scroll-snap-align: start;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  height: 100%;
  z-index: 0;
  animation-name: carouselbg;
  animation-duration: 1s;

  @keyframes carouselbg {
    from {
      /* transform: scale(0.8); */
      opacity: 0;
    }
    to {
      /* transform: scale(1); */
      opacity: 1;
    }
  }
`;
const StoryBox = styled.div`
  background-color: black;
  display: flex;
  bottom: 7.5rem;
  left: 4.4rem;
  flex-direction: column;
  width: 50%;
  @media (max-width: 768px) {
    width: 75%;
    background-color: rgba(0, 0, 0, 0.438);
  }
  position: absolute;
  padding: 2.4rem;
  gap: 2.4rem;
  color: #fff;
`;
const StoryTitle = styled.h4`
  font-family: "New York";
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 568;
  line-height: normal;
`;
const StoryText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  display: inline-block;
  font-family: Inter;
  white-space: break-spaces;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

// eslint-disable-next-line react/prop-types
function Carousel() {
  const abouts = useSelector((state) => state.ui.aboutInfo);
  //   Array.from({ length: 10 }).forEach((_, i) => abouts.push(i));
  const [activeSlide, setActiveSlide] = useState(0);

  //   console.log(activeSlide);
  const ref = useRef();
  const tanla = useRef();
  // ref.current.scrollTop = position;
  function handlePrev() {
    setActiveSlide((e) => (e === 0 ? e : e - 1));
  }

  function handleNext() {
    setActiveSlide((e) => (e === abouts.length - 1 ? e : e + 1));
    // console.log(activeSlide);
  }

  // const { title, subtitle, imgUrl } = abouts[activeSlide];
  const selectSlide = (i) => {
    setActiveSlide(i);
  };

  useEffect(() => {
    const activeSlide1 = ref.current.children[activeSlide];
    if (activeSlide1)
      activeSlide1.scrollIntoView({ behavior: "smooth", block: "start" });
    const parrent = ref.current;
    const array = Array.from(parrent.children);

    const changeActive = () => {
      const element = array.find(
        (element) => element.offsetTop === parrent.scrollTop
      );
      const index = array.indexOf(element);

      if (index >= 0) {
        setActiveSlide(index);
      }
    };

    parrent.addEventListener("scroll", changeActive);

    return () => parrent.removeEventListener("scroll", changeActive);
  }, [activeSlide]);

  //______________________________________________________________________________________________

  return (
    <StyledCarousel>
      <CarouselSlider ref={ref}>
        {abouts.map((aboutItem) => (
          <Item $imgurl={aboutItem.imgUrl} key={aboutItem.id}>
            <StoryBox ref={tanla}>
              <StoryTitle>{aboutItem.title}</StoryTitle>
              <StoryText>{aboutItem.subtitle}</StoryText>
            </StoryBox>
          </Item>
        ))}
      </CarouselSlider>
      {/* <CarouselController>
        <button onClick={handlePrev}>
          <IoIosArrowUp />
        </button>
        <Dots>
          {abouts.map((item, i) => (
            <li
              onClick={() => selectSlide(i)}
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
      </CarouselController> */}
      <CarouselController
        color="white"
        data={abouts}
        handleNext={handleNext}
        handlePrev={handlePrev}
        activeItem={activeSlide}
        selectActiveItem={selectSlide}
      />
    </StyledCarousel>
  );
}

export default Carousel;
