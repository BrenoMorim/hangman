import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Jogo from './views/Jogo';
import PaginaInicial from './views/PaginaInicial';

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="PaginaInicial" component={PaginaInicial} options={{ headerShown: false }} />
        <Tab.Screen name="Jogo" component={Jogo} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}