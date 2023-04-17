import React from "react";
import styled from "styled-components";

const AboveStyle = styled.div`
  @media(max-width:425px)  {
    display: none;
  }
`;

const Above = ({ mediaQuery, children }) => {
  // const breakpoint = `{max-width: ${mediaQuery}px}`;

  return <AboveStyle mediaQuery={mediaQuery}>{children}</AboveStyle>;
};

export default Above;
