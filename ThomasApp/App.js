// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dc94e6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return <Navigation />;
}