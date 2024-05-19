/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { GoScreenFull } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledSlider = styled.div`
  position: relative;
  height: 100%;
  background-image: url(${(props) => props.$imgurl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.2s;

  & button {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const SliderButtonBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 40px;
  right: 40px;
  gap: 20px;
`;

const buttonStyle = css`
  height: 48px;
  width: 48px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    width: 50%;
    height: 50%;
    color: #fff;
  }
`;

const SliderButton = styled.button`
  ${buttonStyle}
`;

const ToBigButton = styled.button`
  ${buttonStyle}
  position: absolute;
  top: 40px;
  right: 40px;
`;

const BigScreen = styled.div`
  backdrop-filter: blur(5px);
  /* background-color: red; */
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 8;
  /* overflow: hidden; */

  & img {
    position: absolute;
    height: 80%;
    /* padding: 20px; */
    /* background-color: red; */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

function ProductImgSlider({ images }) {
  console.log(images);

  const [activeImg, setActiveImg] = useState(0);
  const [isBigShow, setIsBigShow] = useState(false);
  const imgurl = images[activeImg];
  console.log(activeImg);
  //   const navigate = useNavigate();

  function handleShow() {
    setIsBigShow(true);
  }
  function handlePrev() {
    setActiveImg((e) => (e === 0 ? e : e - 1));
  }

  function handleNext() {
    setActiveImg((e) => (e === images.length - 1 ? e : e + 1));
    // console.log(activeSlide);
  }
  return (
    <>
      <StyledSlider $imgurl={imgurl}>
        <ToBigButton onClick={handleShow}>
          <GoScreenFull />
        </ToBigButton>
        <SliderButtonBox>
          {activeImg !== 0 && (
            <SliderButton onClick={handlePrev}>
              <IoIosArrowBack />
            </SliderButton>
          )}

          <SliderButton onClick={handleNext}>
            <IoIosArrowForward />
          </SliderButton>
        </SliderButtonBox>
      </StyledSlider>
      {isBigShow && (
        <BigScreen onClick={() => setIsBigShow(false)}>
          <img src={images[activeImg]} alt="big-screen-image" />
        </BigScreen>
      )}
    </>
  );
}

export default ProductImgSlider;
