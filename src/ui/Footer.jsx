import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Container from "./Container";

const FooterWrapper = styled.footer`
  /* background-color: #ffff007f; */
  height: 7.5rem;
  z-index: 1;
  bottom: 0;
`;

const StyledFooter = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Span = styled.span`
  color: ${(props) =>
    props.$pageurl === "/dashboard" || props.$pageurl === "/about/carousel"
      ? "#fff"
      : "var(--color-grey-600)"};
  font-size: 16px;
  font-weight: 400;
`;

const Socials = styled.ul`
  list-style-type: none;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  color: ${(props) =>
    props.$pageurl === "/about/carousel" ? "#fff" : "var(--color-grey-600)"};
  transition: all 0.1s;
`;

const Link = styled.a`
  text-decoration: none;
  display: flex;
  /* color: var(--color-grey-600); */

  & svg {
    width: 24px;
    height: 24px;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.2);
    }
  }

  &:hover {
    transform: scale(1.2);
    color: var(--color-grey-900);
  }
`;

function Footer() {
  const pageurl = useLocation().pathname;
  return (
    <FooterWrapper $pageurl={pageurl}>
      <Container>
        <StyledFooter>
          <Socials $pageurl={pageurl}>
            <li>
              <Link href="https://facebook.com">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com">
                <FaInstagram />
              </Link>
            </li>
          </Socials>
          <Span $pageurl={pageurl}>IAC Group</Span>
        </StyledFooter>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
