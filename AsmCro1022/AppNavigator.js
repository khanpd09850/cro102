import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screen/LoginScreen";
import CategoryScreen from "./screen/CategoryScreen";
import CartScreen from "./screen/CartScreen";
import { CartProvider } from "./screen/CartContext";
import RegisterScreen from "./screen/RegisterScreen";
import ProductDetailScreen from "./screen/ProductDetailScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <CartProvider>
        <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  </NavigationContainer>
    </CartProvider>
    
  );
};

export default AppNavigator;
