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
`;
function About() {
  return (
    <>
      <StyledAbout>
        <HeadText>Established in 1997</HeadText>
        <Paragraph width="55%">
          Ibrahim Asia Company (IAC Group) is a family-owned group of companies,
          and Its headquarter is in Istanbul - Turkiye, with branches in Central
          Asia.
        </Paragraph>
        <Button to="/about/carousel">See more historical steps</Button>
      </StyledAbout>
    </>
  );
}

export default About;
