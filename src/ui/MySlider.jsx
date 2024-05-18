import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SliderItem from "./SliderItem";
import { useSelector } from "react-redux";

const StyledSlider = styled.div`
  /* position: relative; */
  height: 100%;
  width: 100%;
  /* background-color: red; */
  /* overflow-y: scroll; */
  /* overflow-x: hidden; */
`;

const SliderBox = styled.ul`
  position: absolute;
  height: 100%;
  width: 90%;
  left: 10px;
  margin-left: 15px;
  overflow-y: scroll;
  /* background-color: yellow; */
`;

function MySlider() {
  const data = useSelector((state) => state.ui.projects);
  //   let data = [];
  //   Array.from({ length: 10 }).forEach((_, i) => {
  //     data.push(i);
  //   });
  const [activeslide, setActiveSlide] = useState(2);
  //   console.log(data);

  function handlePrev() {
    setActiveSlide((e) => (e === 0 ? (e = data.length - 1) : e - 1));
  }

  function handleNext() {
    setActiveSlide((e) => (e === data.length - 1 ? (e = 0) : e + 1));
  }
  const ref = useRef();

  const selectSlide = (i) => {
    setActiveSlide(i);
  };

  useEffect(() => {
    const activeSlide1 = ref.current.children[activeslide];
    if (activeSlide1)
      activeSlide1.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [activeslide]);

  return (
    <StyledSlider>
      <SliderBox ref={ref}>
        {data.map((item) => (
          <SliderItem
            project={item}
            // className={`slide ${
            //   data[activeslide] === item ? "active-slide" : ""
            // }`}
            key={item.id}
            onClick={() => selectSlide(item)}
          />
        ))}
      </SliderBox>
      {/* <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button> */}
    </StyledSlider>
  );
}

export default MySlider;
