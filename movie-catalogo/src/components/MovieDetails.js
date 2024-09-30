import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetails.css';

const MovieDetails = () => {
    const { id } = useParams(); 
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/tmdb/movie/${id}`);
            setMovie(response.data);
          } catch (error) {
            console.error('Erro ao buscar detalhes do filme:', error);
          }
        };
    
        fetchMovieDetails();
      }, [id]);
    
      if (!movie) {
        return <p>Carregando detalhes do filme...</p>;
      }

    const trailer = movie.videos.results.find(video => video.type === 'Trailer');

    return (
        <div className="movie-details-container">
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
          <p><strong>Sinopse:</strong> {movie.overview}</p>
          <p><strong>Data de Lançamento:</strong> {movie.release_date}</p>
          {trailer ? (
            <a href={`https://www.youtube.com/watch?v=${trailer.key}`} target="_blank" rel="noopener noreferrer">
              Assistir ao Trailer
            </a>
          ) : (
            <p>Trailer não disponível</p>
          )}
        </div>
      );
    };
    
    export default MovieDetails;