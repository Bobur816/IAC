import styled from "styled-components";
import Carousel from "../ui/Carousel";

const StyledCarousel = styled.div`
  /* position: relative; */
  overflow: hidden;
  transition: all 0.5s;
`;
function CarouselPage() {
  return (
    <StyledCarousel>
      <Carousel />
    </StyledCarousel>
  );
}

export default CarouselPage;
