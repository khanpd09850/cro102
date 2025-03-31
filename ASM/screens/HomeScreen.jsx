import React, { useState, useEffect } from "react";
import {View,Text,FlatList,Image,TouchableOpacity,StyleSheet,ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const categories = [
  { id: "1", name: "Tất cả", filter: "all" },
  { id: "2", name: "Hàng mới về", filter: "new" },
  { id: "3", name: "Ưa sáng", filter: "light" },
  { id: "4", name: "Ưa bóng", filter: "shade" },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trang Chủ</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Ionicons name="cart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

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
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>
        {item.price ? item.price.toLocaleString() + "₫" : "Chưa có giá"}
      </Text>
    </TouchableOpacity>
  )}
/>

      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddProduct")}
      >
        <Ionicons name="add-circle-outline" size={60} color="green" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

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
  filterContainer: { paddingVertical: 10, paddingHorizontal: 10 },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#009245",
    marginRight: 10,
  },
  filterButtonSelected: { backgroundColor: "#009245" },
  filterText: { fontSize: 14, color: "#009245" },
  filterTextSelected: { color: "#fff", fontWeight: "bold" },
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
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
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
