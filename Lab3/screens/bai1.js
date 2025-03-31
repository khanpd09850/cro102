import React, { useRef } from "react";
import { View, Animated, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export default function MoveBoxScreen() {
  const positionY = useRef(new Animated.Value(0)).current;

  const moveBox = () => {
    const randomY = Math.random() * (height - 500);

    Animated.timing(positionY, {
      toValue: randomY,
      duration: 800,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={moveBox}>
        <Text style={styles.buttonText}>MOVE</Text>
      </TouchableOpacity>

      <Animated.View style={[styles.box, { transform: [{ translateY: positionY }] }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  button: {
    position: "absolute",
    top: 50,
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "#002366",
    borderRadius: 10,
    marginTop: 20,
  },
});
