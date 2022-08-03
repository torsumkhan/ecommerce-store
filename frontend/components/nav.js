import React, { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";
import Cart from "./cart";
import User from "./user.js";
import ShopContext from "../lib/context";
import { useUser } from "@auth0/nextjs-auth0";
const { AnimatePresence } = require("framer-motion");

export default function Nav() {
  const { showCart, setShowCart, totalQty } = useContext(ShopContext);
  const { user, error, isLoading } = useUser();

  return (
    <StyledNav>
      <Link href={"/"}>
        <img src="/_next/static/media/KURSI-transparent.ec0cc24f.png" />
      </Link>
      <NavItems>
        <User />
        <div>
          {totalQty > 0 && <span>{totalQty}</span>}
          <FiShoppingBag onClick={() => setShowCart(true)} />
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
  padding: 0rem 6rem;

  /* div {
    padding-right: 10%;
  } */
  img {
    width: 120px;

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
    gap: 3rem;
    align-items: center;
  }
  svg {
    font-size: 1.2rem;
    cursor: pointer;
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
