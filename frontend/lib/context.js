import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [qty, SetQty] = useState(2);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const increaseQty = () => {
    SetQty((previousQty) => previousQty + 1);
  };

  const decreaseQty = () => {
    SetQty((previousQty) => {
      if (previousQty - 1 < 1) return 1;
      return previousQty - 1;
    });
  };

  return (
    <ShopContext.Provider
      value={{ qty, increaseQty, decreaseQty, showCart, cartItems }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
