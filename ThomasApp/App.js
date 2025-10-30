import * as React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Login from './pages/Login';
import MovieDetails from './pages/MovieDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginLeft: 2 }}>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Login</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <Image
                source={require('./assets/kitty.jpg')}
                style={{ width: 40, height: 37, borderRadius: 17, marginRight: 1 }}
              />
            ),
          })}
        />
        <Stack.Screen name="Catalog" component={Catalog} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
