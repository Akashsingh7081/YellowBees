import styled from "styled-components";
import Spacer from "../../component/Spacer";
import Heading from "../../elements/Heading";
import GroupImg from "../../public/images/GroupImg.svg";
import Button from "../../component/Button";
import Above from "../../component/mediaQuery/Above";
import { Img } from "../../elements/imageWrapper";

export const HeroSectionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem;
  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
`;

export const HeroLeftSection = styled.div`
  width: 40%;
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    text-align: center;
    margin: 0;
  }
`;


export default function HeroSection() {
  return (
    <HeroSectionStyle style={{ marginBottom: Spacer(7) }}>
      <HeroLeftSection>
        <div style={{ marginBottom: Spacer(10) }}></div>
        <Heading
          priority="1"
          size={1}
          color=" #341907"
          fontWeight={1}
          lineHeight={1}
        >
          A Hive Of Best Remote IT Talent{" "}
        </Heading>
        <Heading
          priority="4"
          color="black"
          size={5}
          fontWeight={4}
          lineHeight={3}
        >
          Hire pre-screened engineers on a contractual
          basis today!
        </Heading>
        <div style={{ marginBottom: Spacer(10) }}></div>
        <Button
          href="https://sass-lang.com/documentation/syntax#scss"
          variant="secondary"
          size="md"
        >
          Hire Engineers
        </Button>
      </HeroLeftSection>
      <Above mediaQuery="425">
        <Img
          src={GroupImg}
          priority="true"
          alt="fellow Bees Hero Image"
          width="542"
        />
      </Above>
    </HeroSectionStyle>
  );
}
