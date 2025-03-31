import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

const AnimatedListItem = ({ item, isVisible }) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isVisible ? 1 : 0, { duration: 500 }),
      transform: [{ scale: withTiming(isVisible ? 1 : 0.8, { duration: 500 }) }],
    };
  }, [isVisible]);

  return (
    <Animated.View style={[styles.item, animatedStyle]}>
      <Text style={styles.text}>{item.title}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#4CAF50',
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default React.memo(AnimatedListItem);