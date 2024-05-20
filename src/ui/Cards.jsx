import styled from "styled-components";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";
import { useLocation } from "react-router-dom";

const StyledCards = styled.div`
  /* background-color: red; */
  display: grid;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 1200px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 480px) {
    grid-template-columns: auto;
  }
  gap: 2.4rem;
  row-gap: 7rem;
  height: fit-content;
  animation-name: animateCards;
  animation-duration: 0.5s;
  margin-top: 4rem;

  @keyframes animateCards {
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

function Cards() {
  const { products } = useSelector((state) => state.ui);
  const pageUrl = useLocation().pathname.split("/");
  const data = products.filter(
    (product) => product.type === pageUrl.slice(-1)[0]
  );
  return (
    <StyledCards>
      {data.map((card) => (
        <CardItem card={card} key={card.id} />
      ))}
    </StyledCards>
  );
}

export default Cards;
