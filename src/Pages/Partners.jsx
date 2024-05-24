import styled from "styled-components";
import HeadText from "../ui/HeadText";
import Paragraph from "../ui/Paragraph";
import { useSelector } from "react-redux";
import PartnerItem from "../ui/PartnerItem";

const StyledPartners = styled.div`
  /* background-color: red; */
  display: flex;

  flex-direction: column;
  height: 100%;

  padding-top: 14rem;
  margin-bottom: 100px;
`;
const ForHead = styled.div`
  /* background-color: blue; */
  flex-direction: column;
  display: flex;
  margin-bottom: auto;
`;

const CardContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 5rem;
  @media (max-width: 1440px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
    justify-content: flex-start;
    flex-direction: column;
  }
`;

function Partners() {
  const { partners } = useSelector((state) => state.ui);
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
          {partners.map((partner) => (
            <PartnerItem partner={partner} key={partner.id} />
          ))}
        </CardContainer>
      </div>
    </StyledPartners>
  );
}

export default Partners;
