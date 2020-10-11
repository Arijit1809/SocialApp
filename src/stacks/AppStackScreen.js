import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStackScreens from "./AuthStackScreen"

export default AppStackScreens=()=>{
    const AppStack = createStackNavigator()

    return(
        <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="Auth" component = {AuthStackScreens}/> 
        </AppStack.Navigator>
    )
}