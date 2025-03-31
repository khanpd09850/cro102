import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../screens/CartContext";
import { Ionicons } from "@expo/vector-icons";

const CartScreen = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const navigation = useNavigation();

  // Tính tổng giá trị giỏ hàng
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Giỏ hàng</Text>

      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Giỏ hàng trống</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>
                    {item.price.toLocaleString()}₫ x {item.quantity}
                  </Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.btn}>
                      <Ionicons name="remove-circle-outline" size={24} color="red" />
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.btn}>
                      <Ionicons name="add-circle-outline" size={24} color="green" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                  <Ionicons name="trash-outline" size={24} color="black" />
                </TouchableOpacity>
              </View>
            )}
          />

          {/* Hiển thị tổng giá và nút thanh toán */}
          <View style={styles.footer}>
            <Text style={styles.totalText}>Tổng cộng: {totalPrice.toLocaleString()}₫</Text>
            <TouchableOpacity
              style={[styles.checkoutButton, cart.length === 0 && styles.disabledButton]}
              onPress={() => navigation.navigate("Checkout", { total: totalPrice })}
              disabled={cart.length === 0}
            >
              <Text style={styles.checkoutText}>Thanh Toán</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  emptyText: { textAlign: "center", fontSize: 16, color: "gray" },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  productImage: { width: 60, height: 60, resizeMode: "contain" },
  productInfo: { flex: 1, marginLeft: 10 },
  productName: { fontSize: 16, fontWeight: "bold" },
  productPrice: { fontSize: 14, color: "green", marginVertical: 5 },
  quantityContainer: { flexDirection: "row", alignItems: "center" },
  btn: { marginHorizontal: 5 },
  quantity: { fontSize: 18, fontWeight: "bold" },

  // Phần tổng tiền và nút thanh toán
  footer: {
    marginTop: 15,
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: "#ff6600",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  checkoutText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
});
