import styled from "styled-components";
import HeadText from "../ui/HeadText";
import Paragraph from "../ui/Paragraph";
import ProjectRight from "../ui/ProjectRight";

const StyledProjects = styled.div`
  /* background-image: url("bgProjects.svg"); */
  display: flex;
`;

const LefttSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
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
