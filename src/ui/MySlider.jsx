import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SliderItem from "./SliderItem";
import { useSelector } from "react-redux";
import CarouselController from "./CarouselController";
import { useNavigate } from "react-router-dom";

const StyledSlider = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  overflow-x: hidden;
`;

const Test = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderBox = styled.ul`
  position: absolute;
  height: 100%;
  width: 90%;

  animation-name: animate1;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  & li {
    scroll-snap-align: start;
  }

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
  const wrapper = useRef();
  const navigate = useNavigate();

  let firstPosition = useRef();
  let lastPosition = useRef();
  const handlePrev = useCallback(() => {
    setActiveSlide((e) => (e === 0 ? e : e - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveSlide((e) => (e === projects.length - 1 ? e : e + 1));
  }, []);

  useEffect(() => {
    const activeSlide1 = ref.current.children[activeslide];
    if (activeSlide1)
      activeSlide1.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [activeslide]);

  useEffect(() => {
    const parrent = ref.current;

    const touchStart = (e) => {
      firstPosition = e.touches[0].clientY;
    };

    const touchMove = (e) => {
      lastPosition = e.touches[0].clientY;
    };

    const touchEnd = () => {
      if (firstPosition > lastPosition) {
        handleNext();
      } else {
        handlePrev();
      }
    };

    const scrollEvent = (e) => {
      if (e.wheelDelta > 0 && Math.abs(e.deltaY) > 20) {
        handlePrev();
      } else if (e.wheelDelta < 0 && Math.abs(e.deltaY) > 20) {
        handleNext();
      }
    };

    parrent.addEventListener("touchstart", touchStart);
    parrent.addEventListener("touchend", touchEnd);
    parrent.addEventListener("touchmove", touchMove);
    parrent.addEventListener("wheel", scrollEvent);

    return () => {
      parrent.removeEventListener("touchstart", touchStart);
      parrent.removeEventListener("touchend", touchEnd);
      parrent.removeEventListener("touchmove", touchMove);
      parrent.removeEventListener("wheel", scrollEvent);
    };
  }, []);


  const selectSlide = (i) => {
    setActiveSlide(i);
    navigate(`/projects/${projects[i].id}`);
  };

  return (
    <>
      <StyledSlider>
        <Test ref={wrapper}>
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
      </StyledSlider>
      <CarouselController
        color="green"
        data={projects}
        activeItem={activeslide}
        selectActiveItem={setActiveSlide}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </>
  );
}

export default MySlider;
