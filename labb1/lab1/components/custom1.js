// import React from "react";
// import { View, Text, StatusBar, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// export default function Bai2() {
//   const data = [
//     {
//       title: "Section 1",
//       titleStyle: { color: "blue" },
//       events: [
//         {
//           title: "Event 1",
//           content: "This is the content for event 1",
//           titleStyle: { fontWeight: "bold" },
//           contentStyle: { color: "gray" },
//         },
//         {
//           title: "Event 2",
//           content: "This is the content for event 2",
//           titleStyle: { fontWeight: "bold" },
//           contentStyle: { color: "gray" },
//         },
//       ],
//     },
//     {
//       title: "Section 2",
//       titleStyle: { color: "green" },
//       events: [
//         {
//           title: "Event 3",
//           content: "This is the content for event 3",
//           titleStyle: { fontWeight: "bold" },
//           contentStyle: { color: "gray" },
//         },
//       ],
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />
//       <Text style={styles.heading}>Bai2</Text>

//       {data.map((sectionData, index) => renderSection(sectionData, index))}
//     </View>
//   );
// }

// const renderSection = (data, index) => {
//   const { title, events, titleStyle } = data;
//   return (
//     <View key={index.toString()} style={styles.section}>
//       <Text style={[styles.titleSection, titleStyle]}>{title}</Text>
//       <View style={[styles.sectionBody, styles.shadow]}>
//         {events?.map((eventData, eventIndex) =>
//           renderChild(eventData, eventIndex)
//         )}
//       </View>
//     </View>
//   );
// };

// const renderChild = (data, index) => {
//   const {
//     content,
//     contentStyle,
//     titleStyle,
//     title,
//     contentComponent,
//     eventComponent,
//   } = data;
//   return (
//     <View key={index.toString()} style={styles.containerChild}>
//       {eventComponent || (
//         <>
//           <Text style={[styles.titleChild, titleStyle]}>{title}</Text>
//           {contentComponent || (
//             <Text style={[styles.contentChild, contentStyle]}>{content}</Text>
//           )}
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f0f0f0",
//     paddingTop: 20,
//     paddingHorizontal: 10,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   section: {
//     marginBottom: 15,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     padding: 10,
//   },
//   titleSection: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   sectionBody: {
//     marginTop: 10,
//     padding: 10,
//     borderRadius: 8,
//     backgroundColor: "#fafafa",
//   },
//   shadow: {
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   containerChild: {
//     marginBottom: 10,
//   },
//   titleChild: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   contentChild: {
//     fontSize: 14,
//     color: "#555",
//   },
// });
