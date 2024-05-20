import styled from "styled-components";
import HeadText from "../ui/HeadText";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import Carousel from "../ui/Carousel-v1";
import { useState } from "react";
import { useSelector } from "react-redux";

const StyledAbout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & p {
    margin-bottom: 3.2rem;
  }
`;
function About() {
  return (
    <>
      <StyledAbout>
        <HeadText>Established in 1997</HeadText>
        <Paragraph width="70%">
          Celebrating over two decades of excellence in the trading of
          agricultural and food products to and from Central Asia, IAC Group has
          been a pioneering force in the region's food industry landscape.
        </Paragraph>
        <Button to="/about/carousel">See more historical steps</Button>
      </StyledAbout>
    </>
  );
}

export default About;
