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
  transition: all 0.2s;
  margin-left: 25px;
  /* overflow: hidden; */

  & svg {
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translate(-20px, -50%);
    color: #e6e6e6;
    z-index: 10;
  }

  &:hover h3,
  &:hover p {
    color: green;
  }

  & div {
    transition: all 0.2s;
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
function SliderItem({ project }) {
  // eslint-disable-next-line react/prop-types
  const { projectName, projectWork, projectInfo } = project;
  console.log(project);
  return (
    <StyledLi>
      <FaCircleDot />
      <div>
        <ProjectTitle>{projectName}</ProjectTitle>
        <ProjectSubTitle>{projectWork}</ProjectSubTitle>
      </div>
    </StyledLi>
  );
}

export default SliderItem;
