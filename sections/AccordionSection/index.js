import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "../../component/Accordion";
import { questions } from "./data";
import Spacer from "../../component/Spacer";
import Heading from "../../elements/Heading";

const StyledAccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem;
  @media (max-width: 425px){
    margin: 2rem;
    height: 70vh;
  }
`;

const StyledAccordionItem = styled.div`
  padding:24px;
  background-color:#f5f5f5;
  border-radius:5px;
`
const AccordionHeader = styled.div`
    display: flex;
    justify-content: center;
    
`;

const AccordionSection = () => {
  const [data, setData] = useState(questions);
  return (
    
    <StyledAccordionSection>
      <AccordionHeader>
      <Heading priority="2" color="black" fontWeight={2} lineHeight={2}>
          FAQ
        </Heading>
      </AccordionHeader>
      <div style={{marginBottom: Spacer(10)}}></div>
      
      {data.map((currElem) => {
        const { id,question,answer } = currElem;
        return (
          <>
          
          <StyledAccordionItem>
          
          <Accordion
            size="xs"
            src="/images/UpArrow.svg"
            alt="abc"
            key={id}
            question={question}
            answer={answer}
          />
          </StyledAccordionItem>
          <div style={{marginBottom: Spacer(4)}}></div>

          </>
       );
      })}
    </StyledAccordionSection>
  );
};
export default AccordionSection;
