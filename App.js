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
import AnimatedList from './screens/Lists/AnimatedList';
import ImageCard from './screens/Cards/ImageCard';
import DrawerLayouts from './screens/DrawerLayouts';
import Covid from './screens/Covid/HomeScreen';
import Wallet from './screens/wallet/WelcomeScreen';
import WalletHome from './screens/wallet/HomeScreen';
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
        <Stack.Screen name="AnimatedList" component={AnimatedList} options={{headerShown: true}} />
        <Stack.Screen name="CardImage" component={ImageCard} />
        <Stack.Screen name="Covid" component={Covid} />
        <Stack.Screen name="Wallet" component={Wallet} options={{headerShown: true}} />
        <Stack.Screen name="WalletHome" component={WalletHome} options={{headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
