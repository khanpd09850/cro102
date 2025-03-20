import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";

interface BodyProps {
  onUpdateInfor: (name: string, linkImage: string) => void;
  onClickChangeBgFooter: () => void;
}

const Body = ({ onUpdateInfor, onClickChangeBgFooter }: BodyProps) => {
  const [name, setName] = useState("");
  const [linkImage, setLinkImage] = useState("");

  const handleUpdate = () => {
    if (!name || !linkImage) {
      alert("Không được để trống!");
      return;
    }
    onUpdateInfor(name, linkImage);
  };

  return (
    <View style={styles.body}>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên mới"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Dán địa chỉ avatar mới"
        value={linkImage}
        onChangeText={setLinkImage}
      />

      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>CẬP NHẬT THÔNG TIN</Text>
      </TouchableOpacity>

      <View style={{ height: 10 }} />

      <TouchableOpacity style={styles.button} onPress={onClickChangeBgFooter}>
        <Text style={styles.buttonText}>ĐỔI MÀU FOOTER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: { padding: 20, marginBottom: 270 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Body;
