import Footer from "../sections/Footer/index";
import Header from "../sections/Header/header";
import styled from "styled-components";
import bgImage from "../public/images/yellowBees.svg";

export const LayoutStyle = styled.div`
  background-image: url(${bgImage?.src});
  height: 100vh;
  backround-repeat: no-repeat;
  width: 100%;
  padding-top: 2rem;
  margin: 0 auto;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Layout({ children }) {
  return (
    <LayoutStyle>
      <StyledHeader>
        <Header></Header>
      </StyledHeader>
      {children}
      <Footer></Footer>
    </LayoutStyle>
  );
}
