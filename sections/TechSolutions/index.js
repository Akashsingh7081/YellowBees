import styled from "styled-components";
// import Heading from "../../elements/heading";
// import Text from "../../elements/text";
// import Image from "../../elements/image";
import ImageWrapper from "../../elements/imageWrapper";
import Heading from "../../elements/Heading";
import Text from "../../elements/text";

const TechSolutionsStyle = styled.div`
  background-color: #371e0e;
  padding: 4.5rem ;
  color: black;
  
  @media (max-width: 425px) {
   padding:1rem;
  }
`;

const SolutionsHeaderStyle = styled.div`
  text-align: center;
  padding-bottom :2rem;
  @media (max-width: 425px) {
   padding:2rem;
  }
`;

const LowerSolutionsStyling = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 1.7rem;
  column-gap: 4.3rem;
  padding-bottom :2rem;

  @media (max-width: 425px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width:100%;
    margin: 0;
  }
`;
const SolutionsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  flex-direction: row;
  box-sizing: border-box;
  padding: 1.2rem;
  background-color: white;
  align-items: center;
  

  @media (max-width:425px){
    display:flex;
    flex-direction:row;
    align-items:center;
    width:100%;
  }
  `;
const ImgDiv = styled.div`
  width: 12%;
   @media (max-width:425px){
    margin-right:1rem;
  }
`;
const items = [
  {
    src: "/images/WebDevImg.svg",
    alt: "web_Img",
    txt: "Web Development",
  },
  {
    src: "/images/Tech2.svg",
    alt: "web_Img",
    txt: "UI/UX design",
  },
  {
    src: "/images/Tech3.svg",
    alt: "mobile_Img",
    txt: "Mobile app Development",
  },
  {
    src: "/images/Tech4.svg",
    alt: "quality_Img",
    txt: "Quality Assurance",
  },
  {
    src: "/images/Tech5.svg",
    alt: "business_Img",
    txt: "Business Analyst",
  },
  {
    src: "/images/Tech6.svg",
    alt: "devops_Img",
    txt: "Devops",
  },
  {
    src: "/images/Tech7.svg",
    alt: "Tech2",
    txt: "AI/ML development",
  },
  {
    src: "/images/Tech8.svg",
    alt: "iot_Img",
    txt: "IoT Development",
  },
  {
    src: "/images/Tech9.svg",
    alt: "dataScience_Img",
    txt: "Data Science",
  },
  {
    src: "/images/Tech10.svg",
    alt: "api_Img",
    txt: "API Development",
  },
  {
    src: "/images/Tech11.svg",
    alt: "database_Img",
    txt: "Database Development",
  },
];
const TechSolutions = () => {
  return (
    <TechSolutionsStyle>
      <SolutionsHeaderStyle>
        
        <Heading
          priority="2"
          color="white"
          size={3}
          fontWeight={1}
          lineHeight={2}
        >
          We Offers You The Best Tech Solutions
        </Heading>
      </SolutionsHeaderStyle>

      <LowerSolutionsStyling>
        {items.map((item, index) => {
          return (
            <SolutionsStyle index={index}>
              <ImgDiv>
                <ImageWrapper src={item.src} alt={item.alt} size="sm" />
              </ImgDiv>
              <Text size="lg">{item.txt}</Text>
            </SolutionsStyle>
          );
        })}
      </LowerSolutionsStyling>
    </TechSolutionsStyle>
  );
};
export default TechSolutions;
