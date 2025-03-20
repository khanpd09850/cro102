import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = ({ style, user }) => {
  console.log("Re-render header");
  return (
    <View style={[styles.container, style]}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>Chào ngày mới</Text>
        <Text style={styles.username}>{user.name}</Text>
      </View>
    </View>
  );
};

const MemoHead = React.memo(Header);

export default MemoHead;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  avatar: {
    height: "80%",
    width: "30%",
    resizeMode: "contain",
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 16,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
