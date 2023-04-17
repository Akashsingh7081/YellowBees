import React from "react";
import styled from "styled-components";
import ImageWrapper from "../elements/imageWrapper"
import Text from "../elements/text";
import Spacer from "./Spacer";

const StyledHireSteps = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
     text-align: center;
`;

const StyledImage = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #F0BF35;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border-radius:100%;
`;

const HireSteps = ({src,alt,size,txt, height, width}) =>{
    return(
        <StyledHireSteps>
            <StyledImage height={height} width={width}>
                <ImageWrapper src={src} alt={alt} size={size} />
            </StyledImage>
            <div style={{marginBottom: Spacer(10)}}></div>
            <Text size={size} color="white">{txt}</Text>
            <div style={{marginBottom: Spacer(15)}}></div>
        </StyledHireSteps>
    )
}
export default HireSteps;