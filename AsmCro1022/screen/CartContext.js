import React, { createContext, useState, useContext } from "react";

// Tạo Context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity, selected: false }];
      }
    });
  };

  // Hàm tính tổng tiền
  const getTotalPrice = () => {
    return cart
      .filter((item) => item.selected)
      .reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotalPrice, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook để dùng context dễ dàng hơn
export const useCart = () => useContext(CartContext);
