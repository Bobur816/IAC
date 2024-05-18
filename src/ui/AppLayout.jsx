import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled, { css } from "styled-components";

const StyledAppLayout = styled.div`
  ${(props) =>
    props.$pageurl === "/dashboard"
      ? css`
          background-image: url("/dashboardBg.svg");
          background-position: bottom left;
        `
      : props.$pageurl === "/projects"
      ? css`
          background-image: url("/projectsBg.svg");
          /* background-position: top center; */
          background-position: bottom;
          background-size: cover;
        `
      : props.$pageurl === "/about"
      ? css`
          background-image: url("/aboutusBg.svg");
          background-position: top center;
          background-size: cover;
        `
      : css`
          background-image: url("/anotherBg.svg");
          background-position: center;
          background-size: cover;
        `};
  display: grid;
  -webkit-transition: background 0.7s;
  -moz-transition: background 0.7s;
  -o-transition: background 0.7s;
  transition: background 0.7s;
  /* position: relative; */
  height: 100vh;
  padding-left: 32px;
  padding-right: 32px;
  grid-template-rows: 9rem 1fr 7.5rem;
  background-repeat: no-repeat;
`;

const Main = styled.main`
  & > div {
    height: 100%;
    /* overflow: visible; */
  }
`;
function AppLayout() {
  const pageUrl = useLocation().pathname;
  return (
    <StyledAppLayout $pageurl={pageUrl}>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
