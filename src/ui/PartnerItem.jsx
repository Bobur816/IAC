/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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
  transition: all 1s;
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

  ${(props) =>
    props.$elementisvisible
      ? css`
          /* background-color: red; */
          transform: scale(1);
          opacity: 1;
        `
      : css`
          transform: scale(0.5);
          opacity: 0;
        `}

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
  const cardRef2 = useRef();
  const [elementIsvisible, setElementIsvisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setElementIsvisible(entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    }, {});

    observer.observe(cardRef2.current);
  }, []);
  const { name, description, imgUrl, siteLink } = partner;
  return (
    <Card
      to={`https://${siteLink}`}
      ref={cardRef2}
      $elementisvisible={elementIsvisible}
    >
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
