import styled from "styled-components";
const FontSize = {
  sm: "var(--text-fontSize-sm)",
  md: "var(--text-fontSize-md)",
  lg: "var(--text-fontSize-lg)",
  xl: "var(--text-fontSize-xl)",
};

const TextStyle = styled.p`
  font-size: ${(props) => FontSize[props.size]};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.fontWeight};
  margin: 0;
  color: ${(props) => props.color};
  display: flex;
  justify-content: flex-end;
`;

const Text = ({ size, color, lineHeight, fontWeight, ...props }) => {
  return (
    <TextStyle
      size={size}
      color={color}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
    >
      {props.children}
    </TextStyle>
  );
};
Text.defaultProps = {
  size: "lg",
  children: "Connect. Contribute. Conquer",
};
export default Text;
