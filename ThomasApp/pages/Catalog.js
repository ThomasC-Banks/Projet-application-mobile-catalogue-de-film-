import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const API_KEY = '14eab7ac5e6cb898f642faf692738212';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export default function Catalog() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]); 
  const [searchText, setSearchText] = useState(''); 
  const [loading, setLoading] = useState(true); 

  // Charger les films au démarrage
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setMovies(data.results);
        setFilteredMovies(data.results);
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  // Filtrer les films selon la recherche
  const handleSearch = (text) => {
    setSearchText(text);
    if (text === '') {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  // Affichage pendant le chargement
  if (loading) {
    return (
      <LinearGradient colors={['#ff0000', '#800000', '#000000']} style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </LinearGradient>
    );
  }
// Barre de recherche,liste de film
  return (
    <LinearGradient colors={['#ff0000', '#800000', '#000000']} style={styles.container}>
      <Text style={styles.title}>Movie Catalog</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search for a movie..."
        placeholderTextColor="#ccc"
        value={searchText}
        onChangeText={handleSearch}
      />

      {filteredMovies.length === 0 ? (
        <Text style={styles.noResults}>No movies found</Text>
      ) : (
        <FlatList
          data={filteredMovies}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <View style={styles.movieCard}>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={styles.poster}
              />
              <Text style={styles.movieTitle} numberOfLines={2}>
                {item.title}
              </Text>
            </View>
          )}
        />
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchInput: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#fff',
    marginBottom: 20,
  },
  movieCard: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  movieTitle: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  noResults: {
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
  },
});
