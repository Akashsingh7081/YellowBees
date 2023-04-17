import React from "react";
import styled from "styled-components";
import ImageWrapper from "../elements/imageWrapper";
import Heading from "../elements/Heading";
import Spacer from "./Spacer";
import Text from "../elements/text";

const StyledFeedbackCards = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  justify-content: center;
  padding: 2rem;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 12px;
  align-items: flex-start;
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
  text-align: center;
  color: black;
  text-align: left;
  //   padding-left: 10px;
`;

const CardHeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
  justify-content: flex-start;
`;
const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FeedbackCards = ({ size, src, alt, para, name, designation,height,width }) => {
  return (
    <StyledFeedbackCards height={height} width={width}>
      <CardHeaderStyle>
        <StyledImage>
          <ImageWrapper borderRadius src={src} alt={alt} size={size} />
        </StyledImage>
        <div style={{marginLeft: Spacer(5)}}></div>

        <StyledTitle>
        <Text size="lg" fontWeight="600" lineHeight="2rem" color="black">
            {name}
          </Text>
          <Text size={size}>{designation}</Text>
        </StyledTitle>
      </CardHeaderStyle>
      <div style={{marginBottom: Spacer(9)}}></div>
      <StyledText>
      <Text color="black" size="md" lineHeight="24px">
          {para}
        </Text>
      </StyledText>
    </StyledFeedbackCards>
  );
};

export default FeedbackCards;
