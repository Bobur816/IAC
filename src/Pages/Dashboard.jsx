import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import HeadText from "../ui/HeadText";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";

const StyledDashboard = styled.div`
  height: 100%;
`;

const SideBg = styled.div`
  & > div {
    height: 100%;
    width: 100%;
    background-image: url("/side_bg.svg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: color;
    @media (max-width: 1130px) {
      background-color: rgba(0, 0, 0, 0.459);
    }
    /* background-clip; */
  }
  ${(props) =>
    props.$pageurl === "/dashboard"
      ? css`
          transform: scale(1);
        `
      : css`
          transform: scale(0.5);
        `}
  /* width: 50%; */
  width: 720px;
  min-width: 50vw;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  /* transition: all 0.1s; */
  overflow: hidden;

  @media (max-width: 1130px) {
    width: 100%;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const DashLeft = styled.div`
  width: 40%;
  height: 100%;
  padding-right: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2.4rem;

  @media (max-width: 1130px) {
    width: 100%;
    color: #fff;
    & p {
      color: #fff;
    }
  }
`;
function Dashboard() {
  const pageUrl = useLocation().pathname;
  return (
    <StyledDashboard>
      <DashLeft>
        <HeadText type="h1">IAC Group</HeadText>
        <Paragraph>
          Engineering for Agriculture & Food Industry. Consulting and Managing
          Turn Key Projects.
        </Paragraph>
        <Button>Get in touch</Button>
      </DashLeft>
      <SideBg $pageurl={pageUrl}>
        <div>{/* <img src="side_bg.svg" /> */}</div>
      </SideBg>
    </StyledDashboard>
  );
}

export default Dashboard;
