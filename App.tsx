// App.js
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // ✅ tambahkan ini
import BottomNavigation from './android/app/src/navigations/BottomNavigation';

export default function App() {
  return (
    <SafeAreaProvider> {/* ✅ bungkus aplikasi */}
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
