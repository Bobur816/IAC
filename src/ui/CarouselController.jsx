/* eslint-disable react/prop-types */
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";

const Controller = styled.div`
  position: absolute;
  /* background-color: red; */
  @media (max-width: 768px) {
    transition: all 0.5s;
    transform: scale(1.5) translateY(-20px);
  }
  /* position: relative; */
  display: flex;
  flex-direction: column;
  right: ${(props) => (props.$color === "white" ? "25px" : 0)};
  gap: 8px;
  bottom: 80px;
  @media (max-width: 768px) {
    bottom: 100px;
  }
  /* transform: translate(-50%, -50%); */
  transition: all 1s;
  /* animation-name: showController; */
  /* animation-duration: 0.5s; */

  & button {
    border: none;
    height: 24px;
    width: 24px;
    background-color: transparent;
    transition: all 0.3s;

    & svg {
      font-size: 24px;
      color: ${(props) => props.$color};
    }

    &:first-child:active {
      transform: translateY(-5px);
    }
    &:last-child:active {
      transform: translateY(5px);
    }
  }

  /* @keyframes showController {
    from {
      transform: scale(0.9);
    }

    to {
      transform: scale(1);
    }
  } */
`;

const Dots = styled.ul`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
function CarouselController({
  color,
  data,
  activeItem,
  selectActiveItem,
  handlePrev,
  handleNext,
}) {
  return (
    <Controller $color={color}>
      <button onClick={handlePrev}>
        <IoIosArrowUp />
      </button>
      <Dots>
        {data.map((item, i) => (
          <li
            onClick={() => selectActiveItem(i)}
            className={`dot-${color} ${
              i === activeItem ? `active-dot__${color}` : ""
            }`}
            key={i}
          ></li>
        ))}
      </Dots>
      <button onClick={handleNext}>
        <IoIosArrowDown />
      </button>
    </Controller>
  );
}

export default CarouselController;
