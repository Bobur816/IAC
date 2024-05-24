import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import HeadText from "../ui/HeadText";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleFormOpen } from "../ui/uiSlice";

const StyledDashboard = styled.div`
  height: 100%;
`;

const SideBg = styled.div`
  & > div {
    height: 100%;
    width: 100%;
    /* background-color: #ff000073; */
    background-image: url(${(props) => props.$dashright});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: color;
    @media (max-width: 1130px) {
      filter: brightness(0.5);
    }
  }
  ${(props) =>
    props.$pageurl === "/dashboard"
      ? css`
          transform: scale(1);
        `
      : css`
          transform: scale(0.5);
        `}
  width: 720px;
  min-width: 50vw;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
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
  /* background-color: red; */
  height: 100%;
  padding-right: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2.4rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  padding-left: 3.2rem;

  @media (max-width: 768px) {
    padding-left: 2rem;
    /* background-color: red; */
  }

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
  const dispatch = useDispatch();
  const dashRight = useSelector((state) => state.ui.dashboardRight);
  return (
    <StyledDashboard>
      <DashLeft>
        <HeadText type="h1">IAC Group</HeadText>
        <Paragraph>
          Engineering for Agriculture & Food Industry. Consulting and Managing
          Turn Key Projects.
        </Paragraph>
        <Button onClick={() => dispatch(toggleFormOpen())}>Get in touch</Button>
      </DashLeft>
      <SideBg $pageurl={pageUrl} $dashright={dashRight}>
        <div>
          <video src={dashRight} autoPlay muted loop />
        </div>
      </SideBg>
    </StyledDashboard>
  );
}

export default Dashboard;
