import styled from "styled-components";
import Heading from "../../elements/Heading";
import ImageWrapper from "../../elements/imageWrapper";
import Text from "../../elements/text";
import Spacer from "../../component/Spacer";
import Above from "../../component/mediaQuery/Above";

export const FeatureStyle = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 4rem;
  @media (max-width: 425px) {
    margin: 2rem;
  }
`;

export const DescriptionStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ImageWrapperStyle = styled.div`
@media (max-width: 425px) {
  margin-top: 0.02rem;
  
}
`;

export const FeatureStyle2 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ImageStyle = styled.div`
  display: flex;
  flex-direction: row;

`;

const featureDesc = [
  {
    text: "Global marketplace for Tech talents",
  },
  {
    text: "Hire any skill, any numbers",
  },
  {
    text: "Trustworthy talent of 2000+ verified engineers with a proven track record of execution.",
  },
  {
    text: "Remote engineers on contractual basis",
  },
  {
    text: "Immediate Joiner",
  },
  {
    text: "Dedicated account manager will assist you throughout the process.",
  },
];

const StyledHeading = styled.div`
  text-align:center;
`
export default function Feature() {
  return (
    <FeatureStyle>
      <FeatureStyle2>
        <StyledHeading>
        <Heading
          priority="2"
          color="#341907"
          size={2}
          fontWeight={2}
          lineHeight={2}
        >
          
          We Solve Your IT Talent Hiring Problem Faster With Transparency
        </Heading>
        </StyledHeading>
        <div style={{ marginBottom: Spacer(10) }}></div>
        {featureDesc.map((item, index) => (
          <>
            <DescriptionStyle>
              <ImageWrapperStyle>
              <ImageWrapper src="/images/leftArrow.svg" size="xs" />
              </ImageWrapperStyle>
              
              <div style={{ marginRight: Spacer(2) }}></div>
              <Text size="lg">{item.text}</Text>
            </DescriptionStyle>
            <div style={{ marginBottom: Spacer(6) }}></div>
          </>
        ))}
      </FeatureStyle2>
      <Above mediaQuery="450">
        <ImageStyle>
          <ImageWrapper
            src="/images/image67.svg"
            alt="feature image"
            width={452}
          />
        </ImageStyle>
      </Above>
    </FeatureStyle>
  );
}
