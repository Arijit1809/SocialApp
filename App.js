import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'

import AppStackScreens from "./src/stacks/AppStackScreen"

export default function App() {
  return (
    <NavigationContainer>
      <AppStackScreens/>
    </NavigationContainer>
  );
}

