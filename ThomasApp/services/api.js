import { TMDB_API_KEY, TMDB_BASE_URL } from '@env';

const API_URL = `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=fr-FR`;

useEffect(() => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      setMovies(data.results);
    })
    .catch((error) => console.error(error));
}, []);
