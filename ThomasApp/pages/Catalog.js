import React, { useEffect, useState } from 'react';
import {StyleSheet,Text,View,Image,FlatList,ActivityIndicator,TextInput,TouchableOpacity,Dimensions,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const API_KEY = '14eab7ac5e6cb898f642faf692738212';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

const { width } = Dimensions.get('window');
const NUM_COLUMNS = 3;
const ITEM_MARGIN = 8;
const ITEM_WIDTH = (width - ITEM_MARGIN * (NUM_COLUMNS * 2)) / NUM_COLUMNS;
const ITEM_HEIGHT = ITEM_WIDTH * 1.5;

export default function Catalog({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);

  // Charger les films depuis l’API TMDB
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

  // Recherche simple
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

  // Affichage principal
  return (
    <LinearGradient colors={['#ff0000', '#6a0dad', '#000000']} style={styles.container}>
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
          numColumns={NUM_COLUMNS}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.movieCard}
              onPress={() => navigation.navigate('MovieDetails', { movie: item })}
            >
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={styles.poster}
                resizeMode="cover"
              />
              <Text style={styles.movieTitle} numberOfLines={2}>
                {item.title}
              </Text>
            </TouchableOpacity>
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
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 100,
  },
  movieCard: {
    width: ITEM_WIDTH,
    margin: ITEM_MARGIN,
    alignItems: 'center',
  },
  poster: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
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