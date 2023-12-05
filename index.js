import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { name as appName } from './app.json';

import App from './App';
import AdicionarServicoScreen from './src/AdicionarServicoScreen';
import ListarServicoScreen from './src/ListarServicoScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PHSystem Tecnologia">
        <Stack.Screen name="PHSystem Tecnologia & PDVSeven" component={App} />
        <Stack.Screen
          name="AdicionarServico"
          component={AdicionarServicoScreen}
        />
        <Stack.Screen
          name="ListarServico"
          component={ListarServicoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => Navigator);
