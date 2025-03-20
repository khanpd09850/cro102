import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface HeaderProps {
  name: string;
  linkImage: string;
}

const Header = React.memo(({ name, linkImage }: HeaderProps) => {
  return (
    <View style={[styles.header, styles.container]}>
      <Image
        source={linkImage ? { uri: linkImage } : require("../assets/avata.png")}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.text}>Chào ngày mới</Text>
        <Text style={styles.name}>{name || "Chưa có tên"}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 40,
  },
  header: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: "#555",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Header;
