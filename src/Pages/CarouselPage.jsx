import styled from "styled-components";
import Carousel from "../ui/Carousel";

const StyledCarousel = styled.div`
  /* position: relative; */
  /* overflow: hidden; */
  /* background-color: #1eff00; */
  transition: all 0.5s;
  /* height: 100vh; */
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;
function CarouselPage() {
  return (
    <StyledCarousel>
      <Carousel />
      {/* <NewCarousel /> */}
    </StyledCarousel>
  );
}

export default CarouselPage;
