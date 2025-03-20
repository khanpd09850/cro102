import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Bai2() {
  const data = [
    {
      title: "Lịch trình",
      event: [
        {
          title1: "Địa điểm",
          content: "VietNam",
        },
        {
          title1: "Thời gian",
          content: "9 AM-12 AM",
        },
        {
          title1: "Phương tiện",
          content: "Taxi",
        },
        { title1: "Thời gian", content: "21h - 22h" },
      ],
      image: {
        title2: "Hinh anh",
        content: "img",
      },
    },
    {
      title: "Khách sạn",
      event: [
        {
          title1: "Tên khách sạn",
          content: "Hotel",
        },
        {
          title1: "Giờ mở cửa",
          content: "10h30",
        },
        {
          title1: "Địa điểm",
          content: "Đà Nẵng",
        },
      ],
      button: {
        title: "Chi tiet",
      },
    },
  ];

  return (
    <ScrollView>
      <View style={style.container}>
        {data.map((Section, index) => renderSection(Section, index))}
      </View>
    </ScrollView>
  );
}

const renderSection = (section, index) => {
  const { title, event, button, image } = section;

  return (
    <View key={index.toString()} style={style.viewSection}>
      <Text style={style.titleSection}>{title}</Text>
      {event.map((event, index) => renderChild(event, index))}
      {button && (
        <TouchableOpacity
          style={{
            alignItems: "center",
            paddingVertical: 10,
            marginTop: 20,
            borderRadius: 10,
            backgroundColor: "skyblue",
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{button.title}</Text>
        </TouchableOpacity>
      )}
      {image && (
        <View style={style.viewChild}>
          <Text style={{ color: "black", fontSize: 19, marginBottom: 10 }}>
            {image.title2}
          </Text>
          <Image source={require("./assets/sea.png")} style={style.img} />
        </View>
      )}
    </View>
  );
};

const renderChild = (event, index) => {
  const { title1, content } = event;
  return (
    <View key={index.toString()} style={[style.viewChild, style.shadow]}>
      <Text style={{ color: "black", fontSize: 19 }}>{title1}</Text>
      <Text style={{ color: "gray", fontSize: 17 }}>{content}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  viewSection: {
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
  },
  viewChild: {
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  img: {
    width: "90%",
    height: 200,
    resizeMode: "cover",
    marginHorizontal: "auto",
  },
  titleSection: {
    fontSize: 24,
    fontWeight: "bold",
  },


});
