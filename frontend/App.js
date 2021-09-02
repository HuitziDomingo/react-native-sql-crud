import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, TaskFormScreen } from './screens'
import { TouchableOpacity, Text } from 'react-native'


const Stack = createNativeStackNavigator()


export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Tareas App',
            headerStyle: { backgroundColor: '#222f3e' }, headerTitleStyle: { color: '#fff' }, headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen')}>
                <Text style={{ color: '#fff', marginRight: 20, fontSize: 15 }}>Nuevo</Text>
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen
          name="TaskFormScreen"
          component={TaskFormScreen}
          options={{
            title: 'Agregar nueva tarea',
            headerStyle: { backgroundColor: '#222f3e' },
            headerTitleStyle: { color: '#fff' },
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
