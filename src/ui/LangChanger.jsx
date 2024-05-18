import { CiGlobe } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "./Dropdown";

const StyledLangChanger = styled.div`
  /* background-color: red; */
  color: ${(props) => (props.$homeurl === "/dashboard" ? "#fff" : "#000")};
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  & svg {
    width: 20px;
    height: 20px;
  }
  & span {
    text-transform: capitalize;
  }

  & select {
    display: inline-block;
    background-color: red;
    border: none;
    height: 100%;
    width: 100%;
    outline: none;

    & option:hover {
      background-color: red;
    }
  }
`;

function LangChanger() {
  const homeUrl = useLocation().pathname;
  const { language } = useSelector((state) => state.ui);
  return (
    <StyledLangChanger $homeurl={homeUrl}>
      <CiGlobe />
      <span>{language}</span>

      <Dropdown type="language" />
    </StyledLangChanger>
  );
}

export default LangChanger;
