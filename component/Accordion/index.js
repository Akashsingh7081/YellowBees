import React,{useState} from "react";
import styled from "styled-components";
import ImageWrapper from "../../elements/imageWrapper";

const StyledAccordion = styled.div`
    display:flex;
    flex-direction:column;
    background-color: #f5f5f5;
`;
const StyledHeading = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    color:black;
`;
const StyledImage = styled.div`
  
`;

const StyledPara = styled.p`
    color:black;
`;



const Accordion = ({question,answer,size,src,alt}) =>{
    const [show,setShow] = useState(false);
    return(
        <>
        <StyledAccordion>
            <StyledHeading>
                {question}
                <StyledImage onClick={() => setShow(!show)}>
                     {show === true ? <ImageWrapper src="/images/UpArrow.svg" alt="close" size="xs" /> : <ImageWrapper src="/images/DownArrow.svg" alt="open" size="xs" />}
                </StyledImage>
            </StyledHeading>
            {show === true ? <StyledPara>{answer}</StyledPara>:null} 
        </StyledAccordion>
        </>
    )
}
export default Accordion;