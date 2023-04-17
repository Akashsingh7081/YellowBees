import styled from "styled-components";
import Heading from "../../elements/Heading";
import Person from "../../component/person";
import Above from "../../component/mediaQuery/Above";
import Text from "../../elements/text";

export const HeaderStyling = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-conetnt: center;
  text-align: center;
  padding: 2.5rem;
  //margin-top: 4rem;

  @media (max-width: 425px) {
   margin-top: 2rem;
  }
  
`;

export const ImageStyling = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 5rem;
  padding-right: 5rem;
  justify-content: space-between;
  @media (max-width: 425px) {
   justify-content: center;

   }
`;

export const ScrollableImages = styled.div`
  display:flex;
  flex-direction:row;
  width: 77%;
  justify-content: space-between;
  @media (max-width: 425px) {
    display: none;
  }
`

export const TeamStyling = styled.div`
background-color: #F5F5F5;
padding-bottom: 4rem;
@media (max-width: 425px) {
 // margin-top: 2rem;
  background-color: #F5F5F5;
}
`;

const Team = () => {
  return (
    <TeamStyling>
      <HeaderStyling>
        <Heading
          priority="2"
          color="black"
          size={3}
          fontWeight={1}
          lineHeight={2}
        >
          Our Team
        </Heading>
        <Text
          color="black"
          size="md"
          fontWeight="400"
          lineHeight="3rem"
        >
          Meet Our Passionate Team Members!
        </Text>
      </HeaderStyling>

      <ImageStyling>
        <Person
          src="images/Person1.svg"
          alt="abs"
          size="xxxl"
          name="Alexa Motwani"
          designation="Sr. Developer"
        ></Person>
        
      <ScrollableImages>
        <Person
          src="images/Person2.svg"
          alt="abs"
          size="xxxl"
          name="John Robert"
          designation="Sr. Developer"
        ></Person>
        <Person
          src="images/Person3.svg"
          alt="abs"
          size="xxxl"
          name="Yashika Max"
          designation="Developer"
        ></Person>
        <Person
          src="images/Person4.svg"
          alt="abs"
          size="xxxl"
          name="Alexa Motwani"
          designation="Sr. Developer"
        ></Person>
        <Person
          src="images/Person5.svg"
          alt="abs"
          size="xxxl"
          name="Michele Josh"
          designation="Developer"
        ></Person>
       </ScrollableImages>
        
       
      </ImageStyling>
    </TeamStyling>
  );
};

export default Team;
