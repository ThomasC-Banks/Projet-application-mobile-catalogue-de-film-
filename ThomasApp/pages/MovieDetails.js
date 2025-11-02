import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MovieDetails({ route }) {
  const { movie } = route.params; // récupère les infos envoyées depuis Catalog

  return (
    <LinearGradient colors={['#ff0000', '#6a0dad', '#000000']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
          style={styles.poster}
        />
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.overview}>{movie.overview || 'No description available.'}</Text>
        <Text style={styles.info}>Release date: {movie.release_date}</Text>
        <Text style={styles.rating}>{movie.vote_average.toFixed(1)}/10</Text>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { alignItems: 'center', padding: 20 },
  poster: { width: 250, height: 375, borderRadius: 10, marginBottom: 20 },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  overview: { color: '#ddd', fontSize: 16, textAlign: 'justify', marginBottom: 15 },
  info: { color: '#ccc', fontSize: 14, marginBottom: 5 },
  rating: {
  color: '#ffffffff',
  fontSize: 16,
  fontWeight: 'bold',
  marginTop: 8,
},
});
