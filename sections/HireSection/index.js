import styled from "styled-components";
import HireSteps from "../../component/HireSteps";
import Heading from "../../elements/Heading";
import Spacer from "../../component/Spacer";
import ImageWrapper from "../../elements/imageWrapper";
import Image from "next/image";
import {img} from "../../elements/imageWrapper";

export const HireSectionStyle= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #341907;
    color: #341907;
    padding: 5rem;
    position: relative;
    overflow: hidden;
    @media (max-width: 425px){
      text-align: center;
      padding: 2.5rem;
      padding-bottom: 0;
    }
   
`;

export const HireStepsStyle= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80.8rem;

    @media (max-width: 425px){
      width:100%;
      flex-direction:column;
      margin-bottom: 4rem;
    }
`;

export const ImageDiv= styled.div`
    position: absolute;
    top: 17.4rem;
    @media (max-width: 425px){
      display: none;
    }
`;
export const ParentImageDiv= styled.div`
    position: absolute;
    top: 2.5rem;
    opacity: 0.1;

`;


export default function HireSection() {
  return (
    <HireSectionStyle>
      <>
        <Heading priority="2" size={2} color="white" fontWeight={2} lineHeight={2}>Hire through Yellowbees.io with simple steps</Heading>
      </>
      <div style={{marginBottom: Spacer(26)}}></div>
      <HireStepsStyle>
        <ImageDiv>
            <ImageWrapper src="/images/Line.svg" alt="dottet Line" size="xs" />
        </ImageDiv>
        <ParentImageDiv>
            <img src="/images/Hirebg.svg" alt="HireBee Bg" height="450px" />
        </ParentImageDiv>
       
        <HireSteps src="/images/Hire1.png" alt="hire image 1" size="lg" txt="Post Your Requirement" height="5.2rem" width="5.2rem"/>
        <HireSteps src="/images/Hire2.png" alt="hire image 2" size="lg" txt="Account Manager Assist You"  height="5.2rem" width="5.2rem"/>
        <HireSteps src="/images/Hire3.png" alt="hire image 3" size="lg" txt="Assess & Shortlisting The Candidates"  height="5.2rem" width="5.2rem"/>
        <HireSteps src="/images/Hire4.png" alt="hire image 4" size="lg" txt="Onboarding"  height="5.2rem" width="5.2rem"/>
      </HireStepsStyle>
    </HireSectionStyle>
  );
}
