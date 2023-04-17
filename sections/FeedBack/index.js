import styled from "styled-components";
import Heading from "../../elements/Heading";
import Spacer from "../../component/Spacer";
import ImageWrapper from "../../elements/imageWrapper";
import FeedbackCards from "../../component/FeedbackCards";
import Text from "../../elements/text";

const FeedBackStyling = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6.25rem;
  background-color: #f3f0e5;
  @media (max-width: 425px) {
    padding: 2rem;
    height: 85vh;
  }
`;

const FeedBackImage = styled.div`
  position: absolute
  top: 15%;
  //opacity; 0.2;
  //z-index: -0.1;
  left: 5%;
`;

const FeedBackHeadingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-conetnt: center;
  text-align: center;
`;

const FeedBackCardsStyling = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items:center;
    height:56.25rem;
  }
`;

const ScrollableItems = styled.div`
 display:flex;
 flex-direction:row;
 justify-content:space-between;
 width:64%;
  @media (max-width: 425px) {
    display: none;
  }
`

const FeedBack = () => {
  return (
    <FeedBackStyling>
      <FeedBackImage>
        <ImageWrapper
          src="/images/DoubleQuotes.svg"
          size="xxl"
          alt="inverted comma"
        />
      </FeedBackImage>
      <FeedBackHeadingStyle>
        <Heading
          priority="2"
          color="#341907"
          size={2}
          fontWeight={2}
          lineHeight={2}
        >
          Our Customers Love And Experience
        </Heading>
        <div style={{ marginBottom: Spacer(4) }}></div>
        <Text color="black" size="lg" fontWeight="300" lineHeight="2rem">
          Companies synergizing to deliver impeccable technological solutions
          for the client is our Blue Ocean strategy.
        </Text>
        <div style={{ marginBottom: Spacer(10) }}></div>
      </FeedBackHeadingStyle>

      <FeedBackCardsStyling>
        <FeedbackCards
          src="/images/Person1.svg"
          size="lg"
          alt="person"
          name="James Maxwell"
          designation="HR Manager, GeekyAnts"
          para="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be"
          height="17.7rem"
          width="22rem"
        />

        <ScrollableItems>
        <FeedbackCards
          src="/images/Person1.svg"
          size="lg"
          alt="person"
          name="John Robort"
          designation="HR Manager, GeekyAnts"
          para="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be"
          height="17.7rem"
          width="22rem"
       />
        <FeedbackCards
          src="/images/Person1.svg"
          size="lg"
          alt="person"
          name="Yashika Max"
          designation="HR Manager, GeekyAnts"
          para="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be"
          height="17.7rem"
          width="22rem"
        />
        </ScrollableItems>
        
      </FeedBackCardsStyling>
    </FeedBackStyling>
  );
};

export default FeedBack;
