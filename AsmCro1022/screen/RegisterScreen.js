import React from "react";
import { 
  View, Text, TextInput, TouchableOpacity, 
  Image, StyleSheet 
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header Image */}
      <View style={styles.header}>
        <Image source={require("../assets/back.png")} style={styles.headerImage} />
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Đăng ký</Text>
        <Text style={styles.subtitle}>Tạo tài khoản</Text>

        <TextInput style={styles.input} placeholder="Họ tên" />
        <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Số điện thoại" keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Mật khẩu" secureTextEntry />

        <Text style={styles.termsText}>
          Để đăng ký tài khoản, bạn đồng ý{" "}
          <Text style={styles.linkText}>Terms & Conditions</Text> and{" "}
          <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Đăng ký</Text>
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

        {/* Điều hướng sang màn hình đăng nhập */}
        <Text style={styles.loginText}>
          Tôi đã có tài khoản{" "}
          <Text style={styles.loginLink} onPress={() => navigation.navigate("Login")}>
            Đăng nhập
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    height: 90,
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    // resizeMode: "cover",
    // position: "absolute",
    // borderBottomLeftRadius: 80,
    // borderBottomRightRadius: 80,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#F5F5F5",
    width: 35,
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  backText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  formContainer: {
    padding: 20,
    marginTop: -30, // Kéo phần form lên gần header hơn
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  termsText: {
    textAlign: "center",
    fontSize: 14,
    color: "gray",
    marginBottom: 20,
  },
  linkText: {
    color: "#009245",
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "#009245",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  registerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16,
    color: "gray",
  },
  socialLogin: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  loginText: {
    textAlign: "center",
    fontSize: 14,
    color: "gray",
  },
  loginLink: {
    color: "#009245",
    fontWeight: "bold",
  },
});

export default RegisterScreen;
