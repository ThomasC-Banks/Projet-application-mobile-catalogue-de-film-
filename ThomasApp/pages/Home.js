import React, { useRef, useEffect } from 'react';
import { Text, StyleSheet, Image, Button, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

// Petit composant pour un fantôme animé
function FloatingGhost({ size, delay }) {
  const anim = useRef(new Animated.Value(0)).current;
  const startX = Math.random() * (width - size);

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.delay(delay),
        Animated.loop(
          Animated.sequence([
            Animated.timing(anim, {
              toValue: 1,
              duration: 6000 + Math.random() * 2000,
              useNativeDriver: true,
            }),
            Animated.timing(anim, {
              toValue: 0,
              duration: 0,
              useNativeDriver: true,
            }),
          ])
        ),
      ]).start();
    };
    animate();
  }, [anim, delay]);

  const translateY = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [height, -100], // de bas en haut
  });

  return (
    <Animated.Image
      source={require('../assets/ghost.png')}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        left: startX,
        transform: [{ translateY }],
        opacity: 0.8,
      }}
    />
  );
}

export default function Home({ navigation }) {
  return (
    <LinearGradient colors={['#ff0000', '#6a0dad', '#000000']} style={styles.container}>
      {/* Quelques fantômes qui flottent */}
      <FloatingGhost size={50} delay={0} />
      <FloatingGhost size={40} delay={1000} />
      <FloatingGhost size={60} delay={2000} />
      <FloatingGhost size={45} delay={3000} />
      <FloatingGhost size={35} delay={1500} />

      <Text style={styles.text}>Welcome</Text>
      <Button
        title="View Catalog"
        color="#9e878a"
        onPress={() => navigation.navigate('Catalog')}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

