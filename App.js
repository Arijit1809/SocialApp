import React from 'react'
import {NavigationContainer} from '@react-navigation/native'

import {UserProvider} from './src/context/UserContext'
import AppStackScreens from "./src/stacks/AppStackScreen"

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <AppStackScreens/>
      </NavigationContainer>
    </UserProvider>
    
  );
}

 