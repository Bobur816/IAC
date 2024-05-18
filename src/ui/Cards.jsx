import styled from "styled-components";
import Button from "./Button";

const StyledCards = styled.div`
  background-color: red;
  display: flex;
  justify-content: space-between;
  gap: 2.4rem;
  height: fit-content;
`;

const StyledCard = styled.div`
  background-color: darkblue;
  width: 25%;
  /* height: 36rem; */
  padding: 12px;

  & h2 {
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 12px;
  }

  & button {
    width: 100%;
    line-height: 10px;
  }
`;

const ImgBox = styled.div`
  height: 202px;
  overflow: hidden;
  margin-bottom: 2.4rem;
  & img {
    height: 100%;
    width: 100%;
    /* overflow: hidden; */
    object-fit: cover;
    z-index: 0;
  }
`;
function Cards() {
  return (
    <StyledCards>
      <StyledCard>
        <ImgBox>
          <img src="/productImg-1.svg" alt="" />
        </ImgBox>
        <h2>Here will be the awesome product title</h2>
        <Button>More details</Button>
      </StyledCard>
      <StyledCard>
        <ImgBox>
          <img src="/productImg-1.svg" alt="" />
        </ImgBox>
        <h2>Here will be the awesome product title</h2>
        <Button>More details</Button>
      </StyledCard>
      <StyledCard>
        <ImgBox>
          <img src="/productImg-1.svg" alt="" />
        </ImgBox>
        <h2>Here will be the awesome product title</h2>
        <Button>More details</Button>
      </StyledCard>
      <StyledCard>
        <ImgBox>
          <img src="/productImg-1.svg" alt="" />
        </ImgBox>
        <h2>Here will be the awesome product title</h2>
        <Button>More details</Button>
      </StyledCard>
    </StyledCards>
  );
}

export default Cards;
