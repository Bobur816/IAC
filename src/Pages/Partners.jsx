import styled from "styled-components";
import HeadText from "../ui/HeadText";
import Paragraph from "../ui/Paragraph";
import { MdArrowOutward } from "react-icons/md";

const StyledPartners = styled.div`
  /* background-color: red; */
  display: flex;

  flex-direction: column;
  height: 100%;

  padding-top: 14rem;
  margin-bottom: 100px;

  & > div {
    /* position: absolute; */
  }
`;
const ForHead = styled.div`
  /* width: 100%; */
  /* background-color: blue; */
  flex-direction: column;
  display: flex;
  margin-bottom: auto;
`;

const CardContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: flex-start;
  gap: 5rem;
  @media (max-width: 1440px) {
    justify-content: space-between;
    /* gap: 63px; */
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-direction: column;
    /* gap: 63px; */
  }
  /* background-color: yellow; */
`;

const Card = styled.div`
  /* background-color: #fff; */
  /* background-color: red; */
  width: 656px;
  @media (max-width: 1440px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2rem;
  animation-name: animatecard;
  animation-duration: 1s;

  @keyframes animatecard {
    from {
      transform: translateY(40px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  & img {
    margin-bottom: 2.4rem;
    width: 100%;
    /* height: 100%; */
  }
  & h3 {
    font-size: 2.4rem;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 1.2rem;
  }

  & p {
    color: #808080;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;
  }

  & a {
    color: #009035;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 3rem;
    transition: all 0.3s;
    & svg {
      height: 16px;
      width: 16px;
    }

    &:hover {
      color: #046828;
    }
  }
`;

function Partners() {
  return (
    <StyledPartners>
      <div>
        <ForHead>
          <HeadText>Solution partners</HeadText>
          <Paragraph>
            Here you can find more details about our solution partners
          </Paragraph>
        </ForHead>
        <CardContainer>
          <Card>
            <div>
              <img src="/partnerImg-1.svg" alt="partnerImg" />
              <h3>Bigtem Makine A.S.</h3>
              <p>
                Bigtem is a specialized process engineering, design and
                manufacturing, company for food processing equipment located in
                Istanbul, Turkey since 1973. IAC Group is official exclusive
                representative of Bigtem in Uzbekistan, Central Asia.
              </p>
            </div>
            <a href="https://www.bigtem.com">
              www.bigtem.com <MdArrowOutward />
            </a>
          </Card>
          <Card>
            <div>
              <img src="/partnerImg-2.svg" alt="partnerImg" />
              <h3>Urschel Laboratories Inc.</h3>
              <p>
                Since 1910, Urschel has been designing and manufacturing
                precision industrial cutting machinery. From the invention of
                the Gooseberry Snipper to the development of the Comitrol®,
                TranSlicer®, and DiversaCut® series of machines, the focus has
                always been on finding innovative and efficient ways to improve
                customer productivity. IAC Group is official exclusive
                representative of Bigtem in Uzbekistan, Central Asia.
              </p>
            </div>
            <a href="https://www.urschel.com">
              www.urschel.com
              <MdArrowOutward />
            </a>
          </Card>
        </CardContainer>
      </div>
    </StyledPartners>
  );
}

export default Partners;
