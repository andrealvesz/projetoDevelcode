import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { Preload } from '../pages/Auth/Preload';
import { ListarUsuario } from '../pages/Auth/ListarUsuario';
import { CadastrarUsuario } from '../pages/Auth/CadastrarUsuario';

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Preload">
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="ListarUsuario" component={ListarUsuario} />
      <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} />
    </Stack.Navigator>
  );
};
