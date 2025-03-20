import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface FooterProps {
  backgroundColor: string;
  updateTime: string;
}

const Footer = React.memo(({ backgroundColor, updateTime }: FooterProps) => {
  return (
    <View style={[styles.footer, { backgroundColor }]}>
      <Text style={styles.text}>Thời gian bạn cập nhật thông tin: {updateTime}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  footer: { padding: 15, alignItems: "center" },
  text: { fontSize: 14, color: "#fff" },
});

export default Footer;
