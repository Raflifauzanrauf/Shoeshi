import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import DetailScreen from '../screens/DetailScreen';
import CartScreen from '../screens/CartScreen';


const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain"  component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProductScreen"  component={ProductScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DetailScreen"  component={DetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CartScreen"  component={CartScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
