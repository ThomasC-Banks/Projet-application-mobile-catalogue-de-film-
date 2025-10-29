const API_KEY = '14eab7ac5e6cb898f642faf692738212';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR`;

useEffect(() => {
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
    console.log(data.results); 
    setMovies(data.results);
}   )
    .catch(error => console.error(error));
}, []);