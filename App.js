import { View, Text, StyleSheet,} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Main from './screens/main.js'
import About from './screens/about'

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = 'Ousl Credit Cal' 
          component = {Main}
          options={{
            title: 'OUSL Credit Cal',
            headerStyle: {
              backgroundColor: '#C5B3FF',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen 
          name = 'About' 
          component = {About}
          options={{
            title: 'About',
            headerStyle: {
              backgroundColor: '#C5B3FF',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

});