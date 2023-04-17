import Logo from "../../component/logo";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";

export const HeaderStyle= styled.div`
   width: 90%;
    padding: 1rem 0;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export default function Header() {
  return (
    <HeaderStyle>
      <Logo
        src="/images/beeImg.png"
        alt="bee_pic"
        size="md"
        txt="Connect. Contribute. Conquer"
      />
      <HeaderMenu />

    </HeaderStyle>
  );
}
