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
  overflow-x: hidden;
  overflow-y: scroll;
  /* animation-name: animate1; */
  /* animation-duration: 1s; */
  scroll-snap-type: y mandatory;

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

  useEffect(() => {
    const activeSlide1 = ref.current.children[activeslide];
    if (activeSlide1)
      activeSlide1.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeslide]);

  useEffect(() => {
    const parrent = ref.current;
    // const wrapper2 = wrapper.current;

    const array = Array.from(parrent.children);
    const parrentTop = parrent.getBoundingClientRect().top;

    // const childrenCord = array.map((el) => Math.abs(el.offsetTop - parrentTop));

    const getVerticalCenter = (e) => {
      const childTop = e.getBoundingClientRect().top;

      return childTop;
    };
    const changeActive = () => {
      const childCords = array.map((el) => getVerticalCenter(el));
      const beetwen = childCords.map((el) => Math.abs(parrentTop - el));

      const minElement = Math.min.apply(Math, beetwen);

      const index = beetwen.indexOf(minElement);

      if (index >= 0) {
        setActiveSlide(index + 1);
      }
    };

    parrent.addEventListener("wheel", changeActive);
    parrent.addEventListener("touchmove", changeActive);

    return () => {
      parrent.removeEventListener("touchmove", changeActive);
      parrent.removeEventListener("wheel", changeActive);
    };
  }, []);

  function handlePrev() {
    setActiveSlide((e) => (e === 0 ? (e = projects.length - 1) : e - 1));
  }

  function handleNext() {
    setActiveSlide((e) => (e === projects.length - 1 ? (e = 0) : e + 1));
  }

  const selectSlide = (i) => {
    setActiveSlide(i);
    navigate(`/projects/${projects[i].id}`);
  };

  return (
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
