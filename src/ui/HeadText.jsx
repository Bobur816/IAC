import styled from "styled-components";

const StyledHeadText = styled.h1`
  font-family: "New York";
  font-size: 64px;
  font-style: normal;
  font-weight: 568;
  line-height: normal;
  animation-name: example;
  animation-duration: 1s;

  @keyframes example {
    from {
      transform: translateY(40px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

// eslint-disable-next-line react/prop-types
function HeadText({ children }) {
  return <StyledHeadText>{children}</StyledHeadText>;
}

export default HeadText;
