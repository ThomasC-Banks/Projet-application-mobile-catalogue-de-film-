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
          options={{
            title: 'CineVerse',
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTintColor: '#fff', 
            headerLeft: () => (
              <Image
                source={require('./assets/kitty.jpg')}
                style={{ width: 45, height: 35, borderRadius: 15, marginLeft: 0 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Catalog"
          component={Catalog}
          options={({ navigation }) => ({
            title: 'Movie Catalog',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{ marginRight: 10, padding: 5 }}
              >
                <Text style={{ color: '#000', fontWeight: 'bold' }}>Login</Text>
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
