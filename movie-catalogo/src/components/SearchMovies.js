import React, { useState } from 'react';
import { searchMoviesByTitle } from '../services/api';
import { Link } from 'react-router-dom';
import './SearchMovies.css';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); 

  const handleSearch = async () => {
    if (query.trim() === '') {
      alert('Por favor, digite um título de filme para pesquisar.');
      return;
    }
    setLoading(true); 
    
    const results = await searchMoviesByTitle(query);
    setMovies(results);
    setLoading(false); 
  };

  return (
    <div className="search-container">
      <h1>Pesquisar Filmes</h1>
      <input
        type="text"
        placeholder="Digite o título do filme"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Pesquisar</button>

      {loading ? (
        <p>Carregando filmes...</p>
      ) : (
        <div className="movies-grid">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-poster"
                  />
                  <h3 className="movie-title">{movie.title}</h3>
                </Link>
              </div>
            ))
          ) : (
            <p>Nenhum filme encontrado</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchMovies;