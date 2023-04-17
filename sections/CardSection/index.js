import styled from "styled-components";
import Heading from "../../elements/Heading";
import Text from "../../elements/text";
import Cards from "../../component/cards";
import Spacer from "../../component/Spacer";
import BannerItems from "../Banner/BannerItems";

const CardSectionstyling = styled.div`
  background-color: #f5f5f5;
  padding-bottom: 3rem;
  padding-top: 10rem;
  position: relative;
  @media (max-width: 425px) {
    padding-top: 35rem;
  }
`;

const CardHeadingStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-conetnt: center;
  text-align: center;
  background-color: #f5f5f5;
  @media (max-width: 425px) {
     display: flex;
     justify-content: center;
     padding: 0;
     margin-top: 3rem;
     text-align-center;
     margin: 1.8rem;
     background-color: #f5f5f5;
  
  }
`;

const CardsStyling = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 4rem;
  background-color: #f5f5f5;

  @media (max-width: 425px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    height: 56.25rem;
  }
`;

const CardSection = () => {
  return (
    <CardSectionstyling>
      
        <BannerItems />
      
      <CardHeadingStyle>
        <Heading
          priority="2"
          color="#341907"
          size={2}
          fontWeight={2}
          lineHeight={2}
        >
          We are entitled to be the preferred path for
          <br />
          Remote-Talent Acquisition
        </Heading>
        <div
          style={{ marginBottom: Spacer(4), backgroundColor: "#f5f5f5" }}
        ></div>
        <Text fontWeight="300" color="#000000" lineHeight="1.5" size="0.9">
          Companies synergizing to deliver impeccable technological solutions
          for the client is our Blue Ocean strategy.
        </Text>
      </CardHeadingStyle>

      <CardsStyling>
        <Cards
          src="/images/cards1.svg"
          size="xxl"
          alt="abc"
          txt="Open option to discern the hefty pool of Software Developers and Leads."
          height="17.8rem"
          width="22rem"
        />

        <Cards
          src="/images/cards2.svg"
          size="xxl"
          alt="abc"
          txt="Engage in global projects and clients on a remote basis."
          height="17.8rem"
          width="22rem"
        />

        <Cards
          src="/images/cards3.svg"
          size="xxl"
          alt="abc"
          txt="Broad-cast your ideas and tech stacks that maneuvers the business."
          height="17.8rem"
          width="22rem"
        />
      </CardsStyling>
    </CardSectionstyling>
  );
};

export default CardSection;
