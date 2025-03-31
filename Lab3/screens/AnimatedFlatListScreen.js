import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import AnimatedListItem from '../components/AnimatedListItem';

const data = Array.from({ length: 20 }, (_, i) => ({ id: i.toString(), title: `Item ${i + 1}` }));

const AnimatedFlatListScreen = () => {
  const [visibleItems, setVisibleItems] = useState({});

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    const visibleMap = {};
    viewableItems.forEach(({ item }) => {
      visibleMap[item.id] = true;
    });
    setVisibleItems(visibleMap);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AnimatedListItem item={item} isVisible={visibleItems[item.id]} />}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AnimatedFlatListScreen;