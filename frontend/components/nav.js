import React, { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";
import Cart from "./cart";
import ShopContext from "../lib/context";
const { AnimatePresence } = require("framer-motion");

export default function Nav() {
  const { showCart, setShowCart, totalQty } = useContext(ShopContext);
  return (
    <StyledNav>
      <Link href={"/"}>
        <img src="/_next/static/media/KURSI-transparent.ec0cc24f.png" />
      </Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          {totalQty > 0 && <span>{totalQty}</span>}
          <FiShoppingBag />
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </StyledNav>
  );
}

const StyledNav = styled.div`
  min-height: 10vh;
  display: flex;

  justify-content: space-between;
  align-items: center;

  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  /* div {
    padding-right: 10%;
  } */
  img {
    width: 120px;
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
  span {
    background: red;
    color: white;
    width: 1.3rem;
    height: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    font-size: 0.6rem;
    right: -10%;
    top: -80%;
    pointer-events: none;
  }
`;
