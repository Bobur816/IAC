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
  overflow-x: hidden;
`;

const Test = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  /* overflow: visible; */
  /* overflow-y: scroll; */
  overflow: hidden;
  /* background-color: blue; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderBox = styled.ul`
  /* height: 100%; */
  position: absolute;
  height: 100%;
  width: 90%;
  /* left: 10px; */
  /* border-left: 1px solid #e6e6e6; */
  /* left: 10px; */
  /* margin-left: 15px; */
  animation-name: animate1;
  overflow-x: hidden;
  overflow-y: scroll;
  /* animation-duration: ; */
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
    const wrapper2 = wrapper.current;

    const array = Array.from(parrent.children);
    const parrentTop = parrent.getBoundingClientRect().top;

    console.log(parrentTop);
    const childrenCord = array.map((el) => Math.abs(el.offsetTop - parrentTop));

    const getVerticalCenter = (e) => {
      const childTop = e.getBoundingClientRect().top;
      // console.log(parrentTop);

      return childTop;
    };
    console.log(childrenCord);
    const changeActive = () => {
      const childCords = array.map((el) => getVerticalCenter(el));
      // console.log(childCords, parrentTop);
      const orasi = childCords.map((el) => Math.abs(parrentTop - el));
      // getVerticalCenter(parrent.children[0]);

      //   const childrenCord = array.map((el) =>
      //   Math.abs(el.getBoundingClientRect().height)
      // );
      // console.log(parrent.scrollTop);
      // console.log(parrent.children[activeslide].scrollTop, parrent.scrollTop);
      // console.log(parrent.children[0].getBoundingClientRect());
      // array.forEach((el) => console.log(el.offsetTop));
      // console.log(parrentCenter, parrent.scrollTop);

      const minElement = Math.min.apply(Math, orasi);
      //________________________________________
      // const element = array.find(
      //   (element) => element.offsetTop === parrent.scrollTop
      //   // element.offsetTop < parrent.scrollTop + parrentCenter &&
      //   // element.offsetTop > parrent.scrollTop
      // );
      const index = orasi.indexOf(minElement);
      console.log(index + 1);
      // const index = orasi.indexOf(minElement);
      // console.log(index + 1);
      // if (index >= 0) {
      //   setActiveSlide(index);
      // }

      if (index >= 0) {
        setActiveSlide(index + 1);
      }
    };
    // const changeByCick = (e) => {
    //   console.log(e);
    // };

    parrent.addEventListener("wheel", changeActive);
    // parrent.addEventListener("mousedown", changeActive);
    parrent.addEventListener("touchmove", changeActive);

    return () => {
      parrent.removeEventListener("touchmove", changeActive);
      // parrent.removeEventListener("mousedown", changeActive);
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
    // console.log(projects[i]);
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
