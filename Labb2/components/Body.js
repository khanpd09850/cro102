import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

export default Body = ({ style, handldeRandomColor, user, handleUpdateInfor }) => {
  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState(user.avatar);

  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nhập tên mới"
        style={styles.input}
      />
      <TextInput
        value={avatar}
        onChangeText={setAvatar}
        placeholder="Địa chỉ avatar mới"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleUpdateInfor({ name, avatar })}>
        <Text style={styles.buttonText}>Cập nhật thông tin</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handldeRandomColor}>
        <Text style={styles.buttonText}>Đổi màu Footer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  button: {
    borderWidth: 2,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "blue",
    borderColor: "#108fe8",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
