import React, { useRef } from "react";
import { Animated, FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 70;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const CATEGORY_FIXED_POSITION = HEADER_MIN_HEIGHT - 10; // Vị trí cố định của danh mục

const DATA = [
    { id: "1", category: "Product Design", title: "Design System", author: "Brandon", quizCount: 10, color: "#4F46E5" },
    { id: "2", category: "Development", title: "React Native 101", author: "Jennifer", quizCount: 16, color: "#2563EB" },
    { id: "3", category: "Project Management", title: "Agile Basics", author: "Ewa", quizCount: 31, color: "#DC2626" },
    { id: "4", category: "Project Management", title: "Agile Basics", author: "Ewa", quizCount: 31, color: "#DC2626" },
];

export default function ScrollHeaderScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const avatarOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.5, 0],
    extrapolate: "clamp",
  });

  const titleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.5, 0],
    extrapolate: "clamp",
  });

  const categoryTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -CATEGORY_FIXED_POSITION],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <View style={styles.headerContent}>
          <Animated.Image
          source={require("../assets/avata.png")}
          style={[styles.avatar, { opacity: avatarOpacity }]}
/>

          <Animated.Text style={[styles.headerText, { opacity: titleOpacity }]}>
            Mornin' Mark!{"\n"}Ready for a quiz?
          </Animated.Text>
        </View>
      </Animated.View>

      <Animated.View
        style={[
          styles.categoryContainer,
          { transform: [{ translateY: categoryTranslateY }] },
        ]}
      >
        <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Popular</Text></TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Product Design</Text></TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Development</Text></TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Project Management</Text></TouchableOpacity>
      </Animated.View>

      
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT + 50 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        ListHeaderComponent={() => ( // Thêm tiêu đề danh sách
          <Text style={styles.listTitle}>Popular Quizes</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>By {item.author}</Text>
            </View>
            <View style={[styles.quizCountBadge, { backgroundColor: item.color }]}>
              <Text style={styles.quizCount}>{item.quizCount}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#006D3D",
    paddingHorizontal: 20,
    paddingBottom: 10,
    zIndex: 10,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  categoryContainer: {
    position: "absolute",
    top: HEADER_MAX_HEIGHT - 70, // Ban đầu nằm dưới tiêu đề
    left: 20,
    right: 20,
    flexDirection: "row",
    backgroundColor: "green",
    borderRadius: 30,
    elevation: 5,
    zIndex: 10,
  },
  categoryButton: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    color: "#006D3D",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  category: { fontSize: 14, color: "#888" },
  title: { fontSize: 18, fontWeight: "bold" },
  author: { fontSize: 14, color: "#666" },
  quizCountBadge: {
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  quizCount: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  listTitle: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    margin:20

  }
});
