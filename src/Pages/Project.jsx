import styled from "styled-components";
import HeadText from "../ui/HeadText";
import Paragraph from "../ui/Paragraph";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const StyledProject = styled.div`
  display: flex;
  height: 100%;
  margin-top: 14rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
    & > div {
      width: 100%;
    }
  }
`;
const LefttSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  @media (max-width: 768px) {
    display: none;
  }
  /* background-color: red; */
`;

const RightSide = styled.div`
  position: relative;
  /* padding-top: 10px; */
  /* background-color: red; */
  height: 100%;
  width: 50%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  & img {
    width: 100%;
  }
`;

const Inside = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  animation-name: animate2;
  animation-duration: 1s;
  padding: 50px 0;

  @keyframes animate2 {
    from {
      transform: translateY(-100px);
      opacity: 0.6;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ProjectTitle = styled.h3`
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 1.6rem;
`;

const ProjectSubTitle = styled.p`
  color: #494949;

  font-size: 2.4rem;
  font-weight: 400;
`;

const ProjectParagraph = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: 2.4rem;
  padding-right: 20px;
  font-style: normal;
  font-weight: 400;
`;
function Project() {
  const { projects } = useSelector((state) => state.ui);
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);
  return (
    <StyledProject>
      <LefttSide>
        <HeadText>Projects</HeadText>
        <Paragraph>Here you can find our reference list and projects</Paragraph>
      </LefttSide>
      <RightSide>
        <Inside>
          <div>
            <ProjectTitle>{project.projectName}</ProjectTitle>

            <ProjectSubTitle>{project.projectWork}</ProjectSubTitle>
          </div>
          <img src={project.projectImgUrl} alt={id} />
          <ProjectParagraph>{project.projectInfo}</ProjectParagraph>
        </Inside>
      </RightSide>
    </StyledProject>
  );
}

export default Project;
