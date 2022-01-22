/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './screens/Home';
import Modal from './screens/Modal';
import DrawerLayouts from './screens/DrawerLayouts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Modal" component={Modal} />
        <Stack.Screen name="DrawerLayout" component={DrawerLayouts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
