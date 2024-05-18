import styled from "styled-components";
import { FaCircleDot } from "react-icons/fa6";

const StyledLi = styled.li`
  position: relative;
  /* background-color: aqua; */
  /* height: 150px; */
  cursor: pointer;
  width: 80%;
  margin: 6.4rem 0;
  display: flex;
  flex-direction: column;
  transition: all 0.1s;
  margin-left: 30px;
  /* height: 100vh; */
  scroll-snap-align: start;
  /* overflow: hidden; */

  & svg {
    position: absolute;
    height: 19px;
    width: 19px;
    top: 50%;
    left: -20px;
    background-color: #fff;
    border-radius: 50%;
    padding: 1px;
    transform: translate(-20px, -50%);
    color: #e6e6e6;
    z-index: 10;
    /* transition: all 0.1s; */
  }

  & h3,
  & p {
    color: ${(props) => (props.$isactive === "active" ? "green" : "auto")};
  }

  &:hover h3,
  &:hover p {
    color: green;
  }

  & div {
    transition: all 0.1s;
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
`;

const ProjectSubTitle = styled.p`
  color: #494949;

  font-size: 18px;
  font-weight: 400;
`;
// eslint-disable-next-line react/prop-types
function SliderItem({ onClick, isActive, project }) {
  // eslint-disable-next-line react/prop-types
  const { projectName, projectWork } = project;
  return (
    <StyledLi $isactive={isActive} onClick={onClick}>
      <FaCircleDot />
      <div>
        <ProjectTitle>{projectName}</ProjectTitle>
        <ProjectSubTitle>{projectWork}</ProjectSubTitle>
      </div>
    </StyledLi>
  );
}

export default SliderItem;
