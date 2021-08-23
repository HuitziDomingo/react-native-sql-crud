import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, TaskFormScreen } from './screens'


const Stack = createNativeStackNavigator()


export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
