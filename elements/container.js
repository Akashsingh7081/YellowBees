import React from "react";
import styled from "styled-components";

const Container = styled.div`
   width: 100%;
  margin: 0 auto;
`;

export default function container({ children }) {
  return <Container>{children}</Container>;
}
