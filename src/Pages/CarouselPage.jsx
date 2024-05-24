import styled from "styled-components";
import Carousel from "../ui/Carousel";

const StyledCarousel = styled.div`
  transition: all 0.5s;
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
    </StyledCarousel>
  );
}

export default CarouselPage;
