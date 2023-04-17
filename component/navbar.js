import styled from "styled-components";
import Button from "./Button/index";
const FontSize = {
  sm: {
    fontSize: "var(--font-size-sm)",
    height: "var(--height-size-sm)",
    },
   md: {
    fontSize: "var(--font-size-md)",
    height: "var(--height-size-md)",
    },
   lg: {
    fontSize: "var(--font-size-lg)",
    height: "var(--height-size-lg)",
   }
};


const ListStyle = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: ${(props) => props.direction};
  margin: 0;
  padding: 0;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
   // height: 18.7rem;
   height: ${(props) => FontSize[props.size].height};
  }
`;

const List = ({ size,direction, ...props }) => {
  return (
    <ListStyle size={size} direction={direction}>
      {props.children}
    </ListStyle>
  );
};

List.defaultProps = {
  size: "md",
  flexDirection: "row"
};
export default List;



























/*

import styled from "styled-components";
import Button from "./Button/index";
const FontSize = {
    sm: {
        // default: "var(--primary)",
        // hover: "var(--primary-hover)",
        // color: "var(--white)",
        fontSize: "var(--font-size-sm)",
        height: "var(--height-size-sm)",
    },
    md: {
        fontSize: "var(--font-size-md)",
        height: "var(--height-size-md)",
    },
    lg: {
        fontSize: "var(--font-size-lg)",
        height: "var(--height-size-lg)",
    }
    // sm: "var(--font-size-sm)",
    // md: "var(--font-size-md)",
    // lg: "var(--font-size-lg)",
};
const ListStyle = styled.ul`
  list-style-type: none;
  display: flex;
  //font-size: ${(props) => FontSize[props.size]};
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: ${(props) => props.direction};
  margin: 0;
  padding: 0;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // height: 300px;
    height: ${(props) => FontSize[props.size].height};
  }
`;

const List = ({ size,direction, ...props }) => {
  return (
    <ListStyle size={size} direction={direction}>
      {props.children}
    </ListStyle>
  );
};

List.defaultProps = {
  size: "md",
  flexDirection: "row"
};
export default List;







*/
