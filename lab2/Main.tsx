import React, { useState, useCallback, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

const Main = () => {
  const [name, setName] = useState("");
  const [linkImage, setLinkImage] = useState("");
  const [footerBg, setFooterBg] = useState("#333");
  const [updateTime, setUpdateTime] = useState("");


  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  };

  useEffect(() => {
    setUpdateTime(getCurrentTime());
  }, []);

  const onUpdateInfor = useCallback((newName: string, newLink: string) => {
    setName(newName);
    setLinkImage(newLink);
    setUpdateTime(getCurrentTime());
  }, []);

  const onClickChangeBgFooter = useCallback(() => {
    const randomColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setFooterBg(randomColor);
  }, []);

  return (
    <View style={styles.container}>
      <Header name={name} linkImage={linkImage} />
      <Body onUpdateInfor={onUpdateInfor} onClickChangeBgFooter={onClickChangeBgFooter} />
      <Footer backgroundColor={footerBg} updateTime={updateTime} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "space-between" },
});

export default Main;
