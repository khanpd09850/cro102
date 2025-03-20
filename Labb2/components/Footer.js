import React from "react";
import { View, Text } from "react-native";

const Footer = ({ style, footerColor, lastTimeUpdate }) => {
  console.log("Re-render foooter");
  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 20,
          backgroundColor: footerColor,
        },
        style,
      ]}
    >
      <Text style={{ fontSize: 17 }}>
        Thời gian bạn cập nhập thông tin:{"   "} {lastTimeUpdate}
      </Text>
    </View>
  );
};
const MemoFoot = React.memo(Footer);

export default MemoFoot;