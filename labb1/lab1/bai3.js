import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text } from "react-native";
import WrapInput from "./components/customtexinput";

const Bai3 = () => {
  const [value, setValue] = useState("");
  const [pass, setPass] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Hàm kiểm tra lỗi cho Username
  const checkUsernameError = (value) => {
    if (value.trim() === "") {
      return "Tên đăng nhập không được để trống";
    }
    return "";
  };

  const checkPasswordError = (value) => {
    if (value.trim() === "") {
      return "Mật khẩu không được để trống";
    }
    return "";
  };
  return (
    <View style={{ padding: 20 }}>
      <StatusBar barStyle="light-content" hidden={true} />

      <WrapInput
        title="Username"
        placeholder="Nhập tên đăng nhập"
        value={value}
        onChangText={(text) => {
          setValue(text);
          setUsernameError(checkUsernameError(text));
        }}
        error={usernameError}
      />
      <WrapInput
        title="Password"
        placeholder="Nhập mật khẩu"
        value={pass}
        onChangText={(text) => {
          setPass(text);
          setPasswordError(checkPasswordError(text));
        }}
        secureTextEntry={true}
        error={passwordError}
      />
    </View>
  );
};

export default Bai3;
