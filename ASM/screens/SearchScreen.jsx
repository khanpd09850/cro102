import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [history, setHistory] = useState(["Spider Plant", "Song of India"]);
  const [results, setResults] = useState([]);

  const sampleData = [
    {
      id: "1",
      name: "Spider Plant",
      price: "250.000đ",
      stock: "Còn 156 sp",
      image: require("../assets/back.png"),
    },
    {
      id: "2",
      name: "Song of India",
      price: "150.000đ",
      stock: "Còn 200 sp",
      image: require("../assets/back.png"),
    },
    {
      id: "3",
      name: "Planta Trắng",
      price: "300.000đ",
      stock: "Còn 120 sp",
      image: require("../assets/back.png")
    }
  ];

  const handleSearch = () => {
    if (!searchText.trim()) return;
    setResults(sampleData.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase())));
    if (!history.includes(searchText)) {
      setHistory([searchText, ...history]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Thanh tìm kiếm */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Text>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Lịch sử tìm kiếm */}
      {results.length === 0 && (
        <FlatList
          data={history}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSearchText(item)}>
              <Text style={styles.historyItem}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Danh sách kết quả */}
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultItem} onPress={() => navigation.navigate("ProductDetail", { product: item })}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <Text style={styles.productStock}>{item.stock}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff",  marginTop: 30, paddingLeft:10 },
  searchContainer: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  input: { flex: 1, borderWidth: 1, padding: 8, borderRadius: 8, marginRight: 8 },
  searchButton: { padding: 8 },
  historyItem: { padding: 8, fontSize: 16, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  resultItem: { flexDirection: "row", alignItems: "center", padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  image: { width: 50, height: 50, marginRight: 10, borderRadius: 5 },
  productName: { fontSize: 16, fontWeight: "bold" },
  productPrice: { color: "green", fontSize: 14 },
  productStock: { fontSize: 12, color: "gray" }
});

export default SearchScreen;
