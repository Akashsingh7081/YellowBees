import styled from "styled-components";
import  Link  from "next/link";

const Color = {
  primary: {
    default: "var(--primary)",
    hover: "var(--darkgray)",
    textcolor: "var(--textcolor)",
  },
  secondary: {
    default: "var(--secondary)",
    hover: "var(--tertiary)",
    textcolor: "var(--textcolor)",
  },
  tertiary: {
    default: "var( --tertiary)",
    hover: "var(--success)",
    textcolor: "var(--secondary)",
  },

};

const fontsize = {
  xs: {
    default: "var(--font-size-xs)",
  },
  sm: {
    default: "var(--font-size-sm)",
  },
  md: {
    default: "var(--font-size-md)",
  },
  lg: {
    default: "var(--font-size-lg)",
  },
  xl: {
    default: "var(--font-size-xl)",
  },
};

const Button = styled.div`
  background-color: ${(props) => Color[props.variant].default};
  padding: ${(props) => fontsize[props.size].default};
  border: none;
  &:hover {
    background-color: ${(props) => Color[props.variant].hover};
  }
  color: ${(props) => Color[props.variant].textcolor};
  border-radius: ${(props) => fontsize[props.size].default};

  @media (max-width: 450px){
    width: 100%;
  }

`;



const ButtonComp = ({ children,text, variant, size, href }) => {
  return ( 
    <Button
      as={href ? Link : "button"}
      href={href}
      variant={variant}
      size={size}
    >
      {children}
    </Button>
  );
};

Button.defaultProps = {
  variant: "secondary",
};

export default ButtonComp;
