import styled from "styled-components";
import Image from "next/image";

const Height = {
  sm: "var(--image-height-sm)",
  md: "var(--image-height-md)",
  lg: "var(--image-height-lg)",
  xl: "var(--image-height-xl)",
  xxl: "var(--image-height-xxl)",
};

const ImageStyle = styled.img`
  height: ${(props) => Height[props.size]};
  border-radius: ${(props) => props.borderRadius?"100%":null};
`;

const Image123 = ({ src, alt, size, height, borderRadius, width }) => {
  return (
    <ImageStyle height={height} width={width} borderRadius={borderRadius} size={size} src={src} alt={alt} />
  );
};



Image.defaultProps = {
  src: "beeImg.png",
  alt: "Bees_img",
  size: "md",
};
export default Image123;

export const ImageStyleWrapper = styled.div`
  posititon: relative;
`;

export function Img({ height, src, width, priority, alt }) {
  return (
    <ImageStyleWrapper>
      <Image
        src={src}
        height={height}
        width={width}
        priority={priority}
        alt={alt}
      ></Image>
    </ImageStyleWrapper>
  );
}
