import MySlider from "./MySlider";
import styled from "styled-components";

const StyledProjectRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  position: relative;

  /* background-color: blue; */
`;

function ProjectRight() {
  return <StyledProjectRight>{<MySlider />}</StyledProjectRight>;
}

export default ProjectRight;
