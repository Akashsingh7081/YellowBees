import React from "react";
import styled from "styled-components";
import ImageWrapper from "../../elements/imageWrapper"
import Heading from "../../elements/Heading";
import Text from "../../elements/text";

const StyledBanner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  // width: 100%;
`;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
  line-height: 20px;
  margin:0px;
 
`;

const Banner = ({ size, src, alt, txt, headingTxt,fontWeight,lineHeight }) => {
  return (
    <StyledBanner>
      <StyledImage>
        <ImageWrapper src="images/Vector.svg" alt={alt} size={size} />
      </StyledImage>

      <StyledText>
        <Text fontWeight="700" color="#FFFFFF" lineHeight={lineHeight} size={size}>{headingTxt}</Text>
        <Text fontWeight={fontWeight} color="#FFFFFF" size="16">{txt}</Text>
      </StyledText>
    </StyledBanner>
  );
};

export default Banner;
