import React, { createContext, useContext, useState } from "react";
import ProductDetails from "../pages/product/[slug]";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [qty, SetQty] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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
    setTotalQty((prevTotalQty) => prevTotalQty + quantity);

    setTotalPrice((prevTotal) => prevTotal + product.Price * quantity);
    const exist = cartItems.find((item) => item.Slug === product.Slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.Slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  const onRemove = (product) => {
    setTotalPrice((prevTotalQty) => prevTotalQty - product.Price);

    setTotalQty((prevTotal) => prevTotal - 1);
    //Check if product exists
    const exist = cartItems.find((item) => item.Slug === product.Slug);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.Slug !== product.Slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.Slug === product.Slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        SetQty,
        increaseQty,
        decreaseQty,
        setShowCart,
        showCart,
        cartItems,
        addtoCart,
        totalQty,
        totalPrice,
        onRemove,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
