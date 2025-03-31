import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { Ionicons } from "@expo/vector-icons"; // Import icon

const ProfileScreen = ({ navigation }) => {
  const user = auth.currentUser;
  const [name, setName] = useState(user?.displayName || "Chưa cập nhật");
  const [email, setEmail] = useState(user?.email || "Không có email");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "Chưa cập nhật");
      setEmail(user.email || "Không có email");
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Alert.alert("Đăng xuất thành công");
      navigation.replace("Login");
    } catch (error) {
      Alert.alert("Lỗi", error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Ảnh đại diện từ assets */}
      <Image source={require("../assets/avata.png")} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>

      {/* Các chức năng */}
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("EditProfile")}>
        <Ionicons name="person-circle-outline" size={24} color="#007AFF" />
        <Text style={styles.optionText}>Chỉnh sửa tài khoản</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("Favorites")}>
        <Ionicons name="heart-outline" size={24} color="red" />
        <Text style={styles.optionText}>Danh sách yêu thích</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("OrderHistory")}>
        <Ionicons name="time-outline" size={24} color="#FFA500" />
        <Text style={styles.optionText}>Lịch sử mua hàng</Text>
      </TouchableOpacity>

      {/* Đăng xuất */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="white" />
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f5f5f5", alignItems: "center" },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 10, borderWidth: 2, borderColor: "#007AFF" },
  name: { fontSize: 20, fontWeight: "bold", color: "#333" },
  email: { fontSize: 16, color: "#666", marginBottom: 20 },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    width: "90%",
    marginVertical: 5,
    elevation: 3,
  },
  optionText: { marginLeft: 10, fontSize: 16, fontWeight: "500", color: "#333" },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    padding: 12,
    borderRadius: 10,
    width: "90%",
    marginTop: 20,
    justifyContent: "center",
  },
  logoutText: { color: "white", fontSize: 16, fontWeight: "bold", marginLeft: 10 },
});

export default ProfileScreen;
