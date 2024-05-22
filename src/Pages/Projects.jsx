import styled from "styled-components";
import HeadText from "../ui/HeadText";
import Paragraph from "../ui/Paragraph";
import ProjectRight from "../ui/ProjectRight";

const StyledProjects = styled.div`
  display: flex;
  /* background-color: red; */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
    & > div {
      width: 100%;
    }
  }
  width: 100%;
  height: 100%;
`;

const LefttSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
function Projects() {
  return (
    <StyledProjects>
      <LefttSide>
        <HeadText>Projects</HeadText>
        <Paragraph>Here you can find our reference list and projects</Paragraph>
      </LefttSide>
      <ProjectRight />
    </StyledProjects>
  );
}

export default Projects;
