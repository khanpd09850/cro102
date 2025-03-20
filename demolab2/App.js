import React, { useState } from "react";
import { View, Text, Button } from "react-native";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Giá trị count: {count}</Text>

      <Button title="Tăng 1" onPress={() => setCount(count + 1)} />

      <Button title="Tăng 2" onPress={() => setCount(count + 2)} />

      <Button title="Tăng 5" onPress={() => setCount(count + 5)} />
    </View>
  );
}

export default Count;
