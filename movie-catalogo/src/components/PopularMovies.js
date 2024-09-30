import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/api';
import { Link } from 'react-router-dom';
import './PopularMovies.css';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]); 

  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();
      console.log('Filmes populares recebidos:', popularMovies);
      setMovies(popularMovies); 
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Filmes Populares</h1>
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
}

export default PopularMovies;