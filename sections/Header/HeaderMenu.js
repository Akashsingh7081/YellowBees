import Button from "../../component/Button/index";
import Navbar from "../../component/navbar";
import ListItem from "../../elements/ListItem";
import React, { useState } from "react";
import styled from "styled-components";

const MenuComponent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 450px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background-color: white;
    position: fixed;
    transform: ${({ toggle }) =>
      toggle ? "translateX(0)" : "translateX(100%)"};
    top: 6rem;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    transition: transform 0.3s ease-in-out;
  }
`;

const ListStyle = styled.div`
  width: 40rem;
 // background-color: blue;
`;

const StyledBurger = styled.div`
  display: none;
  @media (max-width: 450px) {
    width: 1.8rem;
    height: 1.8rem;
    top: 2rem;
    right: 1.8rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ toggle }) => (toggle ? "#ccc" : "#333")};
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ toggle }) => (toggle ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ toggle }) =>
        toggle ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ toggle }) => (toggle ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ toggle }) => (toggle ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default function HeaderMenu() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <StyledBurger onClick={() => setToggle(!toggle)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <MenuComponent toggle={toggle}>
        <ListStyle>
          <Navbar size="sm">
            <ListItem
              text="About Us"
              href="https://www.youtube.com"
              linkType="header"
              />
            <ListItem text="Our Solution" href="https://www.youtube.com" linkType="header"/>
            <ListItem text="Team" href="https://www.youtube.com" linkType="header"/>
            <ListItem text="Reviews" href="https://www.youtube.com" linkType="header"/>
            <ListItem text="Event & Conference" href="https://www.youtube.com" linkType="header"/>
          </Navbar>
        </ListStyle>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button variant="secondary" size="sm" href="https://www.youtube.com/">
            Hire Engineers
          </Button>
        </div>
      </MenuComponent>
    </>
  );
}
