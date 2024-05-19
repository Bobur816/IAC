import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SliderItem from "./SliderItem";
import { useSelector } from "react-redux";
import CarouselController from "./CarouselController";
import { useNavigate } from "react-router-dom";

const StyledSlider = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  /* background-color: red; */
  /* overflow-y: scroll; */
  /* overflow-x: hidden; */
`;

const Test = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  /* overflow: visible; */
  overflow-y: scroll;
  /* background-color: blue; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderBox = styled.ul`
  scroll-snap-type: y mandatory;
  position: absolute;
  /* height: 100%; */
  width: 90%;
  left: 10px;
  border-left: 1px solid #e6e6e6;
  /* left: 10px; */
  /* margin-left: 15px; */
  /* overflow-y: scroll; */
  overflow-x: visible;
  animation-name: animate1;
  animation-duration: 1s;

  @keyframes animate1 {
    from {
      transform: translateY(40px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

function MySlider() {
  const projects = useSelector((state) => state.ui.projects);
  const [activeslide, setActiveSlide] = useState(0);
  const ref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const activeSlide1 = ref.current.children[activeslide];
    if (activeSlide1)
      activeSlide1.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [activeslide]);

  function handlePrev() {
    setActiveSlide((e) => (e === 0 ? (e = projects.length - 1) : e - 1));
  }

  function handleNext() {
    setActiveSlide((e) => (e === projects.length - 1 ? (e = 0) : e + 1));
  }

  const selectSlide = (i) => {
    setActiveSlide(i);
    // console.log(projects[i]);
    navigate(`/projects/${projects[i].id}`);
  };

  return (
    <StyledSlider>
      <Test>
        <SliderBox ref={ref}>
          {projects.map((item, i) => (
            <SliderItem
              project={item}
              isActive={`${projects[activeslide] === item ? "active" : ""}`}
              key={item.id}
              onClick={() => selectSlide(i)}
            />
          ))}
        </SliderBox>
      </Test>
      <CarouselController
        color="green"
        data={projects}
        activeItem={activeslide}
        selectActiveItem={setActiveSlide}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </StyledSlider>
  );
}

export default MySlider;
