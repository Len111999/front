import React, { createContext, useContext, useState } from 'react';

const CartProvider = createContext();

export const useCart = () => {
  return useContext(CartProvider);
};

export const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <CartProvider.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartProvider.Provider>
  );
};
