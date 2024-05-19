import styled, { css } from "styled-components";

const Styleh1 = css`
  font-family: "New York";
  font-size: 6.4rem;
  font-style: normal;
  font-weight: 568;
  line-height: normal;
  animation-name: example;
  animation-duration: 1s;
  margin-bottom: 2.4rem;

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

const StyledHeadText = styled.h1`
  ${Styleh1}
`;

const StyledHeadTextH2 = styled.h2`
  ${Styleh1}
`;

// eslint-disable-next-line react/prop-types
function HeadText({ type, children }) {
  if (type === "h1") return <StyledHeadText>{children}</StyledHeadText>;
  return <StyledHeadTextH2>{children}</StyledHeadTextH2>;
}

export default HeadText;
