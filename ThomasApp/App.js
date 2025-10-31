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
              <Image
                source={require('./assets/kitty.jpg')}
                style={{ width: 40, height: 37, borderRadius: 17, marginRight: 1 }}
              />
            ),
          })}
        />

        <Stack.Screen
          name="Catalog"
          component={Catalog}
          options={({ navigation }) => ({
            title: 'Movie Catalog',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{ marginRight: 1, padding: 1 }}
              >
                <Text style={{ color: '#000000ff', fontWeight: 'bold' }}>Login</Text>
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

