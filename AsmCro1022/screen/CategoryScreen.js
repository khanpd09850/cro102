import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  { id: "1", name: "Tất cả", filter: "all" },
  { id: "2", name: "Hàng mới về", filter: "new" },
  { id: "3", name: "Ưa sáng", filter: "light" },
  { id: "4", name: "Ưa bóng", filter: "shade" },
];

const products = [
  { id: "101", name: "Spider Plant", price: 250000, image: require("../assets/back.png"), category: "shade" },
  { id: "102", name: "Song of India", price: 250000, image: require("../assets/back.png"), category: "shade" },
  { id: "103", name: "Pink Anthurium", price: 250000, image: require("../assets/back.png"), category: "shade" },
  { id: "201", name: "Planta Trắng", price: 250000, image: require("../assets/back.png"), category: "pots" },
];

const CategoryScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cây Trồng</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Ionicons name="cart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Danh mục lọc */}
      <View style={styles.filterContainer}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.filterButton,
                selectedCategory === item.filter && styles.filterButtonSelected,
              ]}
              onPress={() => setSelectedCategory(item.filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedCategory === item.filter && styles.filterTextSelected,
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Danh sách sản phẩm */}
      {loading ? (
        <ActivityIndicator size="large" color="#009245" style={styles.loading} />
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("ProductDetail", { product: item })}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price.toLocaleString()}₫</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
  },
  headerTitle: { fontSize: 18, fontWeight: "bold", textTransform: "uppercase" },
  filterContainer: {
    paddingVertical: 10,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#009245",
    marginRight: 10,
  },
  filterButtonSelected: {
    backgroundColor: "#009245",
  },
  filterText: { fontSize: 14, color: "#009245" },
  filterTextSelected: { color: "#fff", fontWeight: "bold" },
  loading: { flex: 1, justifyContent: "center" },
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "#F9F9F9",
    borderRadius: 8,
    alignItems: "center",
  },
  image: { width: 120, height: 120, borderRadius: 8 },
  name: { marginTop: 5, fontWeight: "bold", textAlign: "center" },
  price: { color: "green", marginTop: 3, fontSize: 14, fontWeight: "bold" },
});
