import styled from "styled-components";
import Heading from "../../elements/Heading";
import Spacer from "../../component/Spacer";
import Button from "../../component/Button";
import Text from "../../elements/text";

const ConnectUsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFE69F;
  text-align: center;
  padding: 6.25rem;
  @media (max-width: 425px){
    padding: 2rem;
  }

`;

const ConnectUs = () => {
  return(
  <ConnectUsStyle>
    <Heading priority="2" color="#341907" >
      Let's build something amazing together!
    </Heading>
    <div style={{marginBottom: Spacer(5)}}></div>
    <Text color="#42210B" size="lg" lineHeight="2rem">
      We put you at the centre of everything we do. Top class service and a memorable experience awaits..
    </Text>
    <div style={{marginBottom: Spacer(10)}}></div>
    <Button variant="tertiary" size="sm" href="https://sass-lang.com/documentation/syntax#scss">
      Hire Engineers
    </Button>
  </ConnectUsStyle>
  )
};

export default ConnectUs;
