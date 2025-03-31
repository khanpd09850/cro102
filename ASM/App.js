import React from "react";
import { CartProvider } from "./screens/CartContext";
import AppNavigator from "./navigator/appNavigator";

const App = () => {
  return (
    <CartProvider>
      <AppNavigator />
    </CartProvider>
  );
};

export default App;
