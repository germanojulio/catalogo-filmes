import React, { useEffect, useState } from 'react';
import { getMoviesByGenre } from '../services/api';
import { Link } from 'react-router-dom';
import './GenresMovies.css';

const GenresMovies = () => {
  const [movies, setMovies] = useState([]);
  const [genreId, setGenreId] = useState('28');

  useEffect(() => {

    const fetchMoviesByGenre = async () => {
      const moviesByGenre = await getMoviesByGenre(genreId);
      console.log('Filmes por gênero recebidos:', moviesByGenre);
      setMovies(moviesByGenre); 
    };

    fetchMoviesByGenre();
  }, [genreId]);

  const handleGenreChange = (e) => {
    setGenreId(e.target.value); 
  };

  return (
    <div>
      <h1>Filmes por Gênero</h1>
      <select onChange={handleGenreChange} value={genreId}>
        <option value="28">Ação</option>
        <option value="35">Comédia</option>
        <option value="18">Drama</option>
        <option value="10749">Romance</option>
        <option value="27">Terror</option>
        <option value="53">Suspense</option>
        <option value="878">Ficção Científica</option>
        <option value="12">Aventura</option>
        <option value="16">Animação</option>
 
      </select>

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
          <p>Carregando filmes...</p>
        )}
      </div>
    </div>
  );
};

export default GenresMovies;