import Link from "next/link";
import styled from "styled-components";

const LinkSectionStyle = {
  default: {
    fontSize: "var(--font-size-sm)",
    color: "blue",
  },
  header: {
    fontSize: "var(--font-size-sm)",
    color: "black",
  },
  footer: {
    fontSize: "var(--font-size-footer)",
    color: "white",
    fontWeight: "300",
  },
};

export const StyledLink = styled(Link)`
     font-size: ${(props) => LinkSectionStyle[props.linkType].fontSize };
     color: ${(props) => LinkSectionStyle[props.linkType].color };
    // font-weight:  fontWeight ? ${() => LinkSectionStyle["footer"].fontWeight} : 700;
     font-weight: ${ (props) => LinkSectionStyle[props.linkType].fontWeight ? LinkSectionStyle[props.linkType].fontWeight : "400"};
`;

StyledLink.defaultProps = {
  linkType: "default"
}

const ListItem = ({ text, href ,linkType}) => {
  return <StyledLink href={href} linkType={linkType}>{text}</StyledLink>;
};

export default ListItem;
