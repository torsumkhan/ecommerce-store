import { useContext } from "react";
import ShopContext from "../lib/context";
import styled from "styled-components";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import getStripe from "../lib/getStripe";

const { motion } = require("framer-motion");

export default function Cart() {
  const { onRemove, cartItems, setShowCart, addtoCart, totalPrice } =
    useContext(ShopContext);

  const handleCheckout = async () => {
    const stripePromise = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    await stripePromise.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div>
      <CartWraper
        onClick={() => setShowCart(false)}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        <StyledCart
          onClick={(e) => e.stopPropagation()}
          initial={{ x: "50%" }}
          animate={{ x: "0%" }}
          exit={{ x: "50%" }}
          transition={{ type: "tween" }}
        >
          {cartItems.length < 1 && (
            <StyledCartHeader>
              <h2>Your cart is empty</h2>
            </StyledCartHeader>
          )}

          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              return (
                <StyledCard key={item.Slug}>
                  <img src={item.Image.data.attributes.formats.small.url} />
                  <StyledItemInfo>
                    <h3>{item.Title}</h3>
                    <p>{item.Description}</p>
                    <h2>${item.Price}</h2>
                    <StyledQuantity>
                      <span>Quantity</span>
                      <button onClick={() => addtoCart(item, 1)}>
                        <AiFillPlusCircle />
                      </button>
                      <p>{item.quantity}</p>
                      <button onClick={() => onRemove(item)}>
                        <AiFillMinusCircle />
                      </button>
                    </StyledQuantity>
                  </StyledItemInfo>
                </StyledCard>
              );
            })}
          <TotalPrice>
            {cartItems.length >= 1 && (
              <div>
                <StyledSubTotal>
                  <h4>Subtotal</h4>
                  <h3>${totalPrice}</h3>
                </StyledSubTotal>
                <button onClick={handleCheckout}>Continue to checkout</button>
              </div>
            )}
          </TotalPrice>
        </StyledCart>
      </CartWraper>
    </div>
  );
}

const CartWraper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

const StyledCart = styled(motion.div)`
  width: 35%;
  background-color: white;
  overflow-y: scroll;
  position: relative;
  border-radius: 8px;
`;

const StyledCartHeader = styled(motion.div)`
  background: #0058a3;
  height: 24vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: white;
    padding: 0 4rem;
  }
`;

const StyledItemInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const StyledCard = styled(motion.div)`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 2rem;
  border-bottom: 1px solid #959595;
  overflow: hidden;
  img {
    width: auto;
    height: 80%;
  }
`;

const StyledQuantity = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0;
  margin: 1rem 0rem;
  button {
    background-color: transparent;
    border: none;
    display: flex;
    font-size: 1.2rem;
    cursor: pointer;
  }
  span {
    margin: 0 0.2rem;
  }
  h2 {
    font-size: 1rem;
  }
  p {
    width: 1rem;
    text-align: center;
    margin: 0 0.2rem;
  }
`;

const TotalPrice = styled(motion.div)`
  margin: 6rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    background-color: black;
    color: white;
    width: 100%;
    margin-top: 3rem;
    padding: 2rem;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.8rem;
    cursor: pointer;
  }
`;

const StyledSubTotal = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  h4 {
    font-size: 0.8rem;
  }
  h3 {
    font-size: 1.4rem;
  }
`;
