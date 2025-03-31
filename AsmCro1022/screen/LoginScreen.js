import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert 
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "123456") {
      navigation.navigate("Category");
    } else {
      Alert.alert("Lỗi đăng nhập", "Email hoặc mật khẩu không đúng!");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Image */}
      <View style={styles.header}>
        <Image source={require("../assets/back.png")} style={styles.headerImage} />
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Chào mừng bạn</Text>
        <Text style={styles.subtitle}>Đăng nhập tài khoản</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Nhập email hoặc số điện thoại"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput 
          style={styles.input} 
          placeholder="Mật khẩu" 
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Hoặc</Text>

        {/* Social Login */}
        <View style={styles.socialLogin}>
          <TouchableOpacity>
            <Image source={require("../assets/gg.png")} style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require("../assets/fb.png")} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        {/* Chuyển sang màn hình đăng ký */}
        <Text style={styles.registerText}>
          Bạn không có tài khoản?{" "}
          <Text style={styles.registerLink} onPress={() => navigation.navigate("Register")}>
            Tạo tài khoản
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { width: "100%", height: 250 },
  headerImage: { width: "100%", height: "90%" },
  formContainer: { padding: 20, marginTop: -40 },
  title: { fontSize: 26, fontWeight: "bold", textAlign: "center" },
  subtitle: { fontSize: 16, textAlign: "center", color: "gray", marginBottom: 20 },
  input: { 
    height: 50, 
    borderWidth: 1, 
    borderColor: "#ddd", 
    borderRadius: 10, 
    paddingHorizontal: 15, 
    marginBottom: 15,
    fontSize: 16
  },
  loginButton: { 
    backgroundColor: "#009245", 
    paddingVertical: 15, 
    borderRadius: 10, 
    alignItems: "center", 
    marginBottom: 20 
  },
  loginText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  orText: { textAlign: "center", marginVertical: 10, fontSize: 16, color: "gray" },
  socialLogin: { flexDirection: "row", justifyContent: "center", marginBottom: 20 },
  socialIcon: { width: 40, height: 40, marginHorizontal: 10 },
  registerText: { textAlign: "center", fontSize: 14, color: "gray" },
  registerLink: { color: "#009245", fontWeight: "bold" },
});

export default LoginScreen;
