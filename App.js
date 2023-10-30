import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PickShop from './screens/PickShop';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    // <NavigationContainer >
    //   <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name='Home' component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <PickShop />
  );
}