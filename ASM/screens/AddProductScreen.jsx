import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const AddProductScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Quyền bị từ chối", "Vui lòng cấp quyền truy cập thư viện ảnh!");
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Lỗi khi chọn ảnh: ", error);
      Alert.alert("Lỗi", "Không thể chọn ảnh, thử lại!");
    }
  };

  const handleAddProduct = async () => {
    if (!name || !price || !description || !image) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin và chọn ảnh sản phẩm!");
      return;
    }

    try {
      await addDoc(collection(db, "products"), {
        name,
        price: parseFloat(price),
        description,
        image,
        createdAt: new Date(),
      });

      Alert.alert("Thành công", "Sản phẩm đã được thêm!");
      setName("");
      setPrice("");
      setDescription("");
      setImage(null);
      navigation.goBack();
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm: ", error);
      Alert.alert("Lỗi", "Không thể thêm sản phẩm, thử lại sau!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tên sản phẩm</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên sản phẩm"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Giá sản phẩm</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập giá sản phẩm"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Mô tả</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Nhập mô tả sản phẩm"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        <Text style={styles.imagePickerText}>Chọn ảnh sản phẩm</Text>
      </TouchableOpacity>

      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}

      <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
        <Text style={styles.buttonText}>Thêm sản phẩm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  imagePicker: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  imagePickerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  imagePreview: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#28a745",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddProductScreen;
