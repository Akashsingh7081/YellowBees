import React from "react";
import styled from "styled-components";
import ImageWrapper from "../elements/imageWrapper";
import Heading from "../elements/Heading";
import Spacer from "./Spacer";

const StyledCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.9rem;
  background-color: white;
  border-radius: 5px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 12px;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
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
`;

const Cards = ({ size, src, alt, txt, width, height }) => {
  return (
    <StyledCards width={width} height={height}>
      <StyledImage>
        <ImageWrapper src={src} alt={alt} size={size} />
      </StyledImage>
      <div style={{ marginBottom: Spacer(4) , backgroundColor: "#f5f5f5"}}></div>

      <StyledText>
        <Heading priority="6" color="black" fontWeight={6}>
          {txt}
        </Heading>
      </StyledText>
    </StyledCards>
  );
};

export default Cards;
