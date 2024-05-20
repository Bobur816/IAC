import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledBlack = styled.button`
  padding: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: var(--color-black-900);
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
`;
const GreenStyle = css`
  display: inline-flex;
  border-radius: 4px;
  background: var(--color-grey-100);
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--color-green-700);
  font-size: 16px;
  font-weight: 400;
  line-height: 14px;
  border: none;
`;
const StyledGreen = styled.button`
  ${GreenStyle}
`;
const StyledLinkButton = styled(NavLink)`
  ${GreenStyle}
`;
// eslint-disable-next-line react/prop-types
function Button({ to, onClick, type, children }) {
  if (to) return <StyledLinkButton to={to}>{children}</StyledLinkButton>;
  if (type === "black")
    return <StyledBlack onClick={onClick}>{children}</StyledBlack>;
  return <StyledGreen onClick={onClick}>{children}</StyledGreen>;
}

export default Button;
