import React, { useRef, useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity, Animated, Dimensions, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

// Composant pour un fantôme animé
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
    outputRange: [height, -100],
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
      {/* Fantômes flottants */}
      <FloatingGhost size={50} delay={0} />
      <FloatingGhost size={40} delay={1000} />
      <FloatingGhost size={60} delay={2000} />
      <FloatingGhost size={45} delay={3000} />
      <FloatingGhost size={35} delay={1500} />

      {/* Contenu centré avec seulement les boutons */}
      <View style={styles.centerContent}>
        {/* Bouton View Catalog */}
        <TouchableOpacity
          style={styles.catalogButton}
          onPress={() => navigation.navigate('Catalog')}
        >
          <Text style={styles.catalogText}>View Catalog</Text>
        </TouchableOpacity>

        {/* Bouton Login */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  catalogButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 20,
  },
  catalogText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  loginText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});