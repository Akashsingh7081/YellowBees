import Layout from "../layouts/layout";
// import Container from "../elements/container";
import HeroSection from "../sections/HeroSection/heroSection";
import Container from "../elements/container";
import Banner from "../sections/Banner/Banner";
import VectorImg from "../public/images/Vector.svg";
import BannerItems from "../sections/Banner/BannerItems";
import CardSection from "../sections/CardSection/index"
import Feature from "../sections/Feature";
import TechSolutions from "../sections/TechSolutions";
import HireSection from "../sections/HireSection";
import FeedBack from "../sections/FeedBack";
import ConnectUs from "../sections/ConnectUs";
import Team from "../sections/Team";
import AccordionSection from "../sections/AccordionSection";

export default function Home() {
  return (
    <>
      <Layout>
        <Container>
          <HeroSection />
           <CardSection/>
           <Feature/>
           <HireSection/>
           <FeedBack/>
          <TechSolutions/>
          <Team/>
          <AccordionSection/>
          <ConnectUs/>
        </Container>
      </Layout>
    </>
  );
}
