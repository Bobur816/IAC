/* eslint-disable react/prop-types */
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled(Link)`
  background-color: #fff;
  /* background-color: red; */
  /* width: 33%; */
  @media (max-width: 1440px) {
    width: 100%;
  }
  /* @media (max-width: 768px) {
    width: 100%;
  } */
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

  & span {
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
function PartnerItem({ partner }) {
  const { name, description, imgUrl, siteLink } = partner;
  return (
    <Card to={`https://${siteLink}`}>
      <div>
        <img src={imgUrl} alt="partnerImg" />
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <span>
        {siteLink} <MdArrowOutward />
      </span>
    </Card>
  );
}

export default PartnerItem;
