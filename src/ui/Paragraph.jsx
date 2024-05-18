import styled from "styled-components";

const StyledP = styled.p`
  color: var(--color-black-1000-50);
  font-family: Inter;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: ${(props) => props.width};
  animation-name: toMe;
  animation-duration: 1s;

  @keyframes toMe {
    from {
      transform: scale(0.7);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
// eslint-disable-next-line react/prop-types
function Paragraph({ width, children }) {
  return <StyledP width={width}>{children}</StyledP>;
}

export default Paragraph;
