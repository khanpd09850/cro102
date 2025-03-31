import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AnimatedFlatListScreen from './screens/AnimatedFlatListScreen';
import ScrollHeaderScreen from './screens/ScrollHeaderScreen';
import bai1 from './screens/bai1';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Bai1" component={bai1} />
      <Stack.Screen name="ScrollHeader" component={ScrollHeaderScreen} />
      <Stack.Screen name="AnimatedFlatList" component={AnimatedFlatListScreen} />
      
      
      
      
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}