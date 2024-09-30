import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/tmdb',
});

export const getPopularMovies = async () => {
  try {
    const response = await api.get('/popular');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar filmes populares.', error);
    return [];
  }
};

export const getMoviesByGenre = async (genreId) => {
  try {
    const response = await api.get(`/genre/${genreId}`); 
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar filmes por gênero:', error);
    return [];
  }
};

export const searchMoviesByTitle = async (query) => {
  try {
    const response = await api.get('/search', { 
      params: {
        query, 
      },
    });
    return response.data.results; 
  } catch (error) {
    console.error('Erro ao buscar filmes por título.', error);
    return [];
  }
};