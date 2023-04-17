import styled from "styled-components";
import Heading from "../../elements/Heading";
import Text from "../../elements/text";
import ImageWrapper from "../../elements/imageWrapper";
import Navbar from "../../component/navbar";
import ListItem from "../../elements/ListItem";
import Spacer from "../../component/Spacer";

export const FooterStyling = styled.div`
   display: flex;
   flex-direction: column;
   background: #341907;
   @media (max-width: 425px) {
    // width: 23.43rem;
    // padding: 20px;
}
`;
export const AboveFooterStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem;
    padding-bottom: 2.5rem;
    @media (max-width: 425px) {
        flex-direction: column;
        padding: 2rem;
    }
`;
export const AboutStyling = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    width: 23.1rem;
    
`;
export const LogoStyling = styled.div`
    display: flex;
    flex-direction: row;
    width: 40%;
    justify-content: space-between;

`;
export const QuickHeaderStyling = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 425px) {
        padding-top: 2.5rem;
        // padding-bottom: 2rem;
    }
`;
export const QuickListStyle = styled.div`
    height: 185px;
    display: flex;
    margin-top: 24px;
    @media (max-width: 425px) {
        height: 255px;
        margin-top: 1rem;
    }
`;

export const MoreHeaderStyling = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 425px) {
        padding-top: 1.5rem;
        // padding-bottom: 2rem;
    }
`;
export const ContactStyling = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 425px) {
        padding-top: 1.5rem;
    }
`;

export const ContactListStyle = styled.div`
    height:  114px;
    display: flex;
    margin-top: 24px;
    @media (max-width: 425px) {
        height: 180px;
        margin-top: 10px;
    }
`;

export const BelowFooterStyle = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-left: 4rem;
    padding-right: 4rem;
    @media (max-width: 425px) {
        padding-left: 2rem;
    }
`;


const Footer = () => {
    return (
       <FooterStyling>

          <AboveFooterStyle>
             <AboutStyling>
                <Heading priority="5" color="white" >About</Heading>
                <div style={{marginBottom: Spacer(8)}}></div>
                <Text color="white" size="md" lineHeight="24px">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</Text>
                <div style={{marginBottom: Spacer(10)}}></div>
                <Heading priority="5" color="white" lineHeight="1.5rem">Built with ❤️ at GeekyAnts.</Heading>
                <div style={{marginBottom: Spacer(6)}}></div>
                <LogoStyling>
                     <ImageWrapper src="/images/fbImg.svg" alt="Facebook logo" size="md" />
                     <ImageWrapper src="/images/LinkedInImg.svg" alt="Linkedin logo" size="md" />
                     <ImageWrapper src="/images/TwitterImg.svg" alt="Facebook logo" size="md" />
                     <ImageWrapper src="/images/InstaImg.svg" alt="Linkedin logo" size="md" />
                </LogoStyling> 
             </AboutStyling>


             <QuickHeaderStyling>
                <Heading priority="5" size={2} color="white" fontWeight={2} lineHeight={2}>Quick Links</Heading>
                
                <QuickListStyle>
                    <Navbar direction="column" size="sm">
                        <ListItem text="Our Solutions" href="https://www.youtube.com" linkType="footer"/>
                        <ListItem text="Our Team" href="https://www.youtube.com" linkType="footer"/>
                        <ListItem text="FAQ" href="https://www.youtube.com" linkType="footer"/>
                        <ListItem text="Privacy Policy" href="https://www.youtube.com" linkType="footer"/>
                        <ListItem text="Contact Us" href="https://www.youtube.com" linkType="footer"/>
                    </Navbar>
                </QuickListStyle>
             </QuickHeaderStyling>

             <MoreHeaderStyling>
                <Heading priority="5" size={2} color="white" fontWeight={2} lineHeight={2}>More Links</Heading>
                
                <QuickListStyle>
                    <Navbar direction="column" size="sm">
                        <ListItem text="GitLab" href="https://www.youtube.com" linkType="footer"/>
                        <ListItem text="Nginx" href="https://www.youtube.com" linkType="footer"/>
                        <ListItem text="Kubernetes" href="https://www.youtube.com" linkType="footer"/>
                        <ListItem text="Jenkins" href="https://www.youtube.com" linkType="footer"/>
                        <ListItem text="CentOS" href="https://www.youtube.com" linkType="footer"/>
                    </Navbar>
                </QuickListStyle>
             </MoreHeaderStyling>
                
             <ContactStyling>
                <Heading priority="5" size={2} color="white" fontWeight={2} lineHeight={2}>Contact</Heading>
                
                <ContactListStyle>
                    <Navbar direction="column" size="sm">
                        <ListItem text="Call: 08001-(Toll free) " href="https://www.youtube.com" linkType="footer"/>
                        <ListItem text="WhatsApp: 0817-76-" href="https://www.youtube.com" linkType="footer"/>
                        <ListItem text="info@gmail.com" href="https://www.youtube.com" linkType="footer"/>
                    </Navbar>
                </ContactListStyle>
             </ContactStyling>

          </AboveFooterStyle>
          <div style={{width: "100%", backgroundColor: "#808080", height: "1px", margin: "0px 0px 0px"}}/>
          <BelowFooterStyle>
            <Text lineHeight="6rem" color="white" size="md">© 2022 Yellowbees.io. All rights reserved.</Text>
          </BelowFooterStyle>
       </FooterStyling>
    );
};


export default Footer;














