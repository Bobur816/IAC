import { Outlet, useLocation } from "react-router-dom";
import Header from "./Navbar";
import Footer from "./Footer";
import styled, { css } from "styled-components";
import Container from "./Container";
import Form from "./Form";
import { useSelector } from "react-redux";
import ChoseProductType from "./ChoseProductType";

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
  -webkit-transition: background 0.7s;
  -moz-transition: background 0.7s;
  -o-transition: background 0.7s;
  transition: background 0.7s;
  /* position: relative; */
  /* background-color: #ff000067; */
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  display: grid;
  min-height: 100vh;
  grid-template-rows: 1fr auto;

  ${(props) =>
    props.$pageurl.includes("products") || props.$pageurl.includes("partners")
      ? css`
          /* grid-template-rows: 1fr auto;
          height: 100%; */
        `
      : css`
          /* grid-template-rows: auto 1fr auto;
          height: 100vh; */
        `}
`;

const Main = styled.main`
  /* background-color: #0080008d; */
  width: 100%;
  & > div {
    height: 100%;
  }
`;
function AppLayout() {
  const pageUrl = useLocation().pathname;
  const { isOpenForm } = useSelector((state) => state.ui);

  return (
    <StyledAppLayout $pageurl={pageUrl}>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer />
      <ChoseProductType />
      {isOpenForm && <Form />}
    </StyledAppLayout>
  );
}

export default AppLayout;
