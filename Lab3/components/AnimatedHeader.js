// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import Animated, { useAnimatedStyle, interpolate, useSharedValue } from 'react-native-reanimated';

// const HEADER_HEIGHT = 100;

// const AnimatedHeader = ({ scrollY }) => {
//   const animatedStyle = useAnimatedStyle(() => {
//     const height = interpolate(scrollY.value, [0, 200], [HEADER_HEIGHT, 50]);
//     const opacity = interpolate(scrollY.value, [0, 200], [1, 0]);
//     const scale = interpolate(scrollY.value, [0, 200], [1, 0.6]);

//     return {
//       height,
//       opacity,
//     };
//   });

//   const imageStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ scale: interpolate(scrollY.value, [0, 200], [1, 0.6]) }],
//     };
//   });

//   return (
//     <Animated.View style={[styles.header, animatedStyle]}>
//       <Animated.Image source={{ uri: 'https://via.placeholder.com/100' }} style={[styles.avatar, imageStyle]} />
//       <Animated.Text style={[styles.title, animatedStyle]}>Profile</Animated.Text>
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     height: HEADER_HEIGHT,
//     backgroundColor: '#2196F3',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 20,
//   },
//   avatar: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginBottom: 5,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// export default AnimatedHeader;