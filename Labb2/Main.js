import React, { useCallback, useEffect, useState, useMemo } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import MemoHead from "./components/Header";
import MemoFoot from "./components/Footer";
import Body from "./components/Body";

export default Main = () => {
  const colors = useMemo(() => ["white", "gray", "orange", "yellow"], []);

  const [user, setUser] = useState({
    name: "Kha",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/600px-Sign-check-icon.png",
  });

  const [lastTimeUpdate, setLastTimeUpdate] = useState("Bạn chưa cập nhật thông tin");
  const [footerColor, setFooterColor] = useState(colors[0]);

  const handleUpdateInfor = useCallback((updatedUser) => {
    setUser(updatedUser);
  }, []);

  const handleRandomColor = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setFooterColor(colors[randomIndex]);
  }, [colors]);

  const getCurrentDateTime = () => {
    const now = new Date();
    return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  };

  useEffect(() => {
    setLastTimeUpdate(getCurrentDateTime());
  }, [user]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <MemoHead style={styles.header} user={user} />
        <Body style={styles.body} handldeRandomColor={handleRandomColor} user={user} handleUpdateInfor={handleUpdateInfor} />
        <MemoFoot style={styles.footer} lastTimeUpdate={lastTimeUpdate} footerColor={footerColor} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: "#A1C2DE",
  },
  body: {
    flex: 5,
    backgroundColor: "#DFE9F0",
  },
  footer: {
    flex: 1,
  },
});
