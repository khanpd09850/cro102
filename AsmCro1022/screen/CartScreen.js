import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const initialCart = [
  { id: "101", name: "Spider Plant", price: 250000, quantity: 2, image: require("../assets/back.png"), category: "shade", selected: false },
];

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState(initialCart);

  // Tính tổng tiền
  const totalPrice = cart
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Chọn/Bỏ chọn sản phẩm
  const toggleSelect = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, selected: !item.selected } : item));
  };

  // Xóa một sản phẩm
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Xóa tất cả sản phẩm đã chọn
  const removeSelectedItems = () => {
    Alert.alert(
      "Xác nhận xóa đơn hàng?",
      "Thao tác này sẽ không thể khôi phục.",
      [
        { text: "Hủy bỏ", style: "cancel" },
        { text: "Đồng ý", onPress: () => setCart(cart.filter(item => !item.selected)) },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>GIỎ HÀNG</Text>
        {cart.length > 0 && (
          <TouchableOpacity onPress={removeSelectedItems}>
            <Ionicons name="trash-outline" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>

      {/* Danh sách sản phẩm */}
      {cart.length === 0 ? (
        <Text style={styles.emptyCart}>Giỏ hàng của bạn hiện đang trống</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <TouchableOpacity onPress={() => toggleSelect(item.id)}>
                <Ionicons
                  name={item.selected ? "checkbox-outline" : "square-outline"}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
              <Image source={item.image} style={styles.image} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price.toLocaleString()}₫</Text>
              </View>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => removeItem(item.id)}>
                <Text style={styles.deleteText}>Xóa</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {/* Tổng tiền và thanh toán */}
      {cart.length > 0 && totalPrice > 0 && (
        <View style={styles.footer}>
          <Text style={styles.totalText}>Tạm tính</Text>
          <Text style={styles.totalPrice}>{totalPrice.toLocaleString()}₫</Text>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Tiến hành thanh toán</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  headerTitle: { fontSize: 18, fontWeight: "bold" },
  emptyCart: { textAlign: "center", marginTop: 50, fontSize: 16, color: "gray" },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  image: { width: 50, height: 50, marginLeft: 10, borderRadius: 5 },
  itemDetails: { flex: 1, marginLeft: 10 },
  itemName: { fontSize: 16, fontWeight: "bold" },
  itemPrice: { fontSize: 14, color: "green" },
  quantity: { fontSize: 16, marginRight: 10 },
  deleteText: { color: "red", fontSize: 16 },
  footer: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    alignItems: "center",
  },
  totalText: { fontSize: 16 },
  totalPrice: { fontSize: 18, fontWeight: "bold", color: "green", marginVertical: 5 },
  checkoutButton: {
    backgroundColor: "#009245",
    padding: 12,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
  },
  checkoutText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
