
import styled from "styled-components";
import Image from "../elements/imageWrapper";
import Text from "../elements/text";

const LogoStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Logo = ({ size, src, alt, txt}) => {
  return (
    <LogoStyle size={size} >
      <Image src={src} slt={alt} size={size} />
      <Text size={size}>{txt}</Text>
    </LogoStyle>
  );
};

Logo.defaultProps = {
  size : "lg",
}

export default Logo;
