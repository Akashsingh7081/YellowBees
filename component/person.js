import styled from "styled-components";
import ImageWrapper from "../elements/imageWrapper";
import Text from "../elements/text";

const StyledPerson = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  align-items: center;
`;
const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  clip-path: polygon(24% 8%, 79% 8%, 100% 50%, 79% 95%, 25% 95%, 0 50%);
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  align-items: center;
`;

const Person = ({ src, name, alt, size, designation }) => {
  return (
    <StyledPerson>
      <StyledImage>
        <ImageWrapper src={src} alt={alt} size={size} />
      </StyledImage>

      <StyledTitle>
        <Text size="lg" fontWeight="600" lineHeight="3.5rem" color="black">
          {name}
        </Text>
        <Text size={size} lineHeight="1rem">
          {designation}
        </Text>
      </StyledTitle>
    </StyledPerson>
  );
};

export default Person;
