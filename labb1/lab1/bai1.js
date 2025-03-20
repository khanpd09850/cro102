import { View, Text, Pressable, Image, StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Bai1({}) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <StatusBar style="light" hidden={false} />
      <View style={styles.rowContainer}>
        <LeftComponent />
        <CenterComponent name="Header" />
        <RightComponent />
      </View>

      <View style={styles.rowContainer}>
        <LeftComponent />
        <CenterComponent name="Trang chủ" />
        <View style={{ flex: 1 }}><Text>{""}</Text></View>
      </View>

      <View style={styles.rowContainer}>
        <LeftComponent />
        <CenterComponent name="" />
        <View style={{ flex: 1 }}><Text>{""}</Text></View>
      </View>
    </View>
  );
}

const LeftComponent = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Pressable onPress={() => {}} style={{ justifyContent: "center", alignItems: "center" }}>
        <Ionicons name="arrow-back" size={30} color="blue" style={{ borderRadius: 15, borderWidth: 1 }} />
      </Pressable>
    </View>
  );
};

const CenterComponent = ({ name }) => {
  return (
    <View style={{ flex: 4, alignItems: "center", alignSelf: "center" }}>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", color: "black" }}>
        {name}
      </Text>
    </View>
  );
};

const RightComponent = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("./assets/man.png")}
        style={{ width: 30, height: 30, resizeMode: "cover", borderRadius: 30 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    paddingVertical: 5,
  },
});
