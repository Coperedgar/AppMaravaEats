import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import OtherScreen from './screens/OtherScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import FondaScreen from './screens/FondaScreen';
import RestauranteScreen from './screens/RestauranteScreen';
import ComidaRapidaScreen from './screens/ComidaRapidaScreen';
import HeladoScreen from './screens/HeladoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Other" component={OtherScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="FondaScreen" component={FondaScreen} />
        <Stack.Screen name="RestauranteScreen" component={RestauranteScreen} />
        <Stack.Screen name="ComidaRapidaScreen" component={ComidaRapidaScreen} />
        <Stack.Screen name="heladoScreen" component={HeladoScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
