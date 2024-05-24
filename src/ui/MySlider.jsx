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
  /* overflow-y: scroll; */
  /* z-index: -1; */
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
  /* overflow-y: scroll; */
  /* animation-name: animate1; */
  /* animation-duration: 1s; */
  /* scroll-snap-type: y mandatory; */

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
  // let counter = 0;
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
    // const wrapper2 = wrapper.current;

    const touchStart = (e) => {
      // console.log(e, "start");
      // setFirstPosition(e.touches[0].clientY);
      firstPosition = e.touches[0].clientY;
    };

    const touchMove = (e) => {
      // setLastPosition(e.touches[0].clientY);
      lastPosition = e.touches[0].clientY;
      // console.log(e);
    };

    const touchEnd = () => {
      // console.log(firstPosition, lastPosition);
      if (firstPosition > lastPosition) {
        // console.log("Next");
        handleNext();
      } else {
        // console.log("Prev");
        handlePrev();
      }
      // console.log(e, "end");
    };

    const scrollEvent = (e) => {
      // console.log(e.deltaMode);
      // console.log(e);

      //____________________________________
      if (e.wheelDelta > 0 && Math.abs(e.deltaY) > 20) {
        // console.log("prev");
        // console.log(e);
        handlePrev();
      } else if (e.wheelDelta < 0 && Math.abs(e.deltaY) > 20) {
        // console.log("next");
        // console.log(e);
        handleNext();
      }
      //____________________________________
      // var st = window.pageYOffset || document.documentElement.scrollTop;
      // if (st > lastScrollTop) {
      //   // downscroll code
      // } else if (st < lastScrollTop) {
      //   // upscroll code
      // } // else was horizontal scroll
      // lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    };

    parrent.addEventListener("touchstart", touchStart);
    parrent.addEventListener("touchend", touchEnd);
    parrent.addEventListener("touchmove", touchMove);
    parrent.addEventListener("wheel", scrollEvent);
    // parrent.addEventListener("scroll", changeActive);
    // parrent.addEventListener("wheel", changeActive);
    // parrent.addEventListener("touchmove", changeActive);

    return () => {
      parrent.removeEventListener("touchstart", touchStart);
      parrent.removeEventListener("touchend", touchEnd);
      parrent.removeEventListener("touchmove", touchMove);
      parrent.removeEventListener("wheel", scrollEvent);
      // parrent.removeEventListener("wheel", changeActive);
      // parrent.removeEventListener("touchmove", changeActive);
      // parrent.removeEventListener("scroll", changeActive);
    };

    //____________________________________________________________

    // const array = Array.from(parrent.children);
    // const parrentTop = parrent.getBoundingClientRect().top;

    // // const childrenCord = array.map((el) => Math.abs(el.offsetTop - parrentTop));

    // const getVerticalCenter = (e) => {
    //   const childTop = e.getBoundingClientRect().top;

    //   return childTop;
    // };
    // const changeActive = () => {
    //   const childCords = array.map((el) => getVerticalCenter(el));
    //   const beetwen = childCords.map((el) => Math.abs(parrentTop - el));

    //   const minElement = Math.min.apply(Math, beetwen);

    //   const index = beetwen.indexOf(minElement);

    //   if (index >= 0) {
    //     setActiveSlide(index + 1);
    //   }
    // };

    // parrent.addEventListener("wheel", changeActive);
    // parrent.addEventListener("touchmove", changeActive);

    // return () => {
    //   parrent.removeEventListener("touchmove", changeActive);
    //   parrent.removeEventListener("wheel", changeActive);
    // };
  }, []);

  // function handlePrev() {
  //   setActiveSlide((e) => (e === 0 ? (e = projects.length - 1) : e - 1));
  // }

  // function handleNext() {
  //   setActiveSlide((e) => (e === projects.length - 1 ? (e = 0) : e + 1));
  // }

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
