import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleBuy = () => {
    if (quantity > 0) {
      navigation.navigate("Cart", { product, quantity });
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{product.name}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Ionicons name="cart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Ảnh sản phẩm */}
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
      </View>

      {/* Danh mục sản phẩm */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryBadge}>Cây trồng</Text>
        <Text style={styles.categoryBadge}>Ưa bóng</Text>
      </View>

      {/* Giá sản phẩm */}
      <Text style={styles.price}>{product.price.toLocaleString()}đ</Text>

      {/* Thông tin sản phẩm */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Chi tiết sản phẩm</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Kích cỡ</Text>
          <Text style={styles.infoValue}>Nhỏ</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Xuất xứ</Text>
          <Text style={styles.infoValue}>Châu Phi</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Tình trạng</Text>
          <Text style={[styles.infoValue, { color: "green" }]}>
            Còn 156 sp
          </Text>
        </View>
      </View>

      {/* Chọn số lượng */}
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityLabel}>Đã chọn {quantity} sản phẩm</Text>
        <Text style={styles.totalPrice}>{(quantity * product.price).toLocaleString()}đ</Text>
      </View>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.counterButton} onPress={decreaseQuantity}>
          <Text style={styles.counterText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counterNumber}>{quantity}</Text>
        <TouchableOpacity style={styles.counterButton} onPress={increaseQuantity}>
          <Text style={styles.counterText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Nút chọn mua */}
      <TouchableOpacity
        style={[styles.buyButton, quantity === 0 && styles.buyButtonDisabled]}
        disabled={quantity === 0}
        onPress={handleBuy}
      >
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  headerTitle: { fontSize: 18, fontWeight: "bold", textTransform: "capitalize" },

  // Ảnh sản phẩm
  imageContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  image: { width: 250, height: 250, resizeMode: "contain" },

  // Danh mục sản phẩm
  categoryContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  categoryBadge: {
    backgroundColor: "#009245",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    marginRight: 5,
    fontSize: 14,
  },

  // Giá sản phẩm
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#009245",
    marginBottom: 15,
  },

  // Thông tin sản phẩm
  infoContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    marginBottom: 15,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  infoLabel: {
    fontSize: 14,
    color: "#555",
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "bold",
  },

  // Bộ đếm số lượng
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  quantityLabel: {
    fontSize: 14,
    color: "#333",
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#009245",
  },
  counterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  counterButton: {
    width: 35,
    height: 35,
    backgroundColor: "#009245",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  counterText: {
    fontSize: 18,
    color: "#fff",
  },
  counterNumber: {
    fontSize: 18,
    marginHorizontal: 15,
    fontWeight: "bold",
  },

  // Nút chọn mua
  buyButton: {
    backgroundColor: "#009245",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 5,
  },
  buyButtonDisabled: {
    backgroundColor: "#ccc",
  },
  buyButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
