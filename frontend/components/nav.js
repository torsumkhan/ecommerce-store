import Link from "next/link";
import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";

export default function Nav() {
  return (
    <StyledNav>
      <Link href={"/"}>
        <img src="/_next/static/media/KURSI_LOGO.3cbf7373.png" />
      </Link>
      <NavItems>
        <div>
          <FiShoppingBag />
        </div>
      </NavItems>
    </StyledNav>
  );
}

const StyledNav = styled.div`
  min-height: 13vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  div {
    margin: 0rem 10%;
  }
  img {
    width: 100px;
    margin: 0rem 10%;
    cursor: pointer;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  svg {
    font-size: 1.2rem;
  }
`;
