import styled from "styled-components";

export const DynamicTag = styled.div`

color: ${(props) => props.color};
font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : "normal")};
line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}` : "normal")};


  line-height:  ${({ priority }) =>
    priority == 1
      ? "4.56rem"
      : priority == 2
      ? "4rem"
      : priority == 3
      ? "2.5rem"
      : priority == 4
      ? "2.5rem"
      : priority == 5
      ? "1.2rem"
      : priority == 6
      ? "26px"
      : "40px"};
      
    @media (max-width: 425px) {
      line-height:  ${({ priority }) =>
        priority == 1
          ? "2.5rem"
          : priority == 2
          ? "2.2rem"
          : priority == 3
          ? "2.5rem"
          : priority == 4
          ? "2rem"
          : priority == 5
          ? "1.2rem"
          : priority == 6
          ? "26px"
          : "24px"};
      }

  font-weight:  ${({ priority }) =>
    priority == 1
      ? "700"
      : priority == 2
      ? "700"
      : priority == 3
      ? "500"
      : priority == 4
      ? "400"
      : priority == 5
      ? "600"
      : priority == 6
      ? "400"
      : "100"};


font-size:  ${({ priority }) =>
  priority == 1
    ? "3.75rem"
    : priority == 2
    ? "2.5rem"
    : priority == 3
    ? "2.5rem"
    : priority == 4
    ? "1.5rem"
    : priority == 5
    ? "1rem"
    : priority == 6
    ? "18px"
    : "24px"};

  @media (max-width: 425px) {
    font-size:  ${({ priority }) =>
      priority == 1
        ? "1.875rem"
        : priority == 2
        ? "1.6rem"
        : priority == 3
        ? "2.5rem"
        : priority == 4
        ? "1.125rem"
        : priority == 5
        ? "1rem"
        : priority == 6
        ? "16px"
        : "24px"};
  }
  margin: 0px;
`;

export default function Heading({
  priority,
  color,
  fontWeight,
  lineHeight,
  children,
}) {
  return (
    <>
      <DynamicTag
        as={`h${priority}`}
        priority={priority}
        color={color}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
      >
        {children}
      </DynamicTag>
    </>
  );
}
