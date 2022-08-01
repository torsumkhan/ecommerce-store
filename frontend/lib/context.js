import React, { createContext, useContext, useState } from "react";
import ProductDetails from "../pages/product/[slug]";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [qty, SetQty] = useState(1);
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

  const addtoCart = (product, quantity) => {
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        setShowCart,
        showCart,
        cartItems,
        addtoCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
