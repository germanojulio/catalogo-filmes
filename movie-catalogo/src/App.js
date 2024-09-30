import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Home from './components/Home'; 
import PopularMovies from './components/PopularMovies'; 
import GenresMovies from './components/GenresMovies'; 
import SearchMovies from './components/SearchMovies';
import MovieDetails from './components/MovieDetails';

const App = () => {
  return (
    <Router>
      <div className="header-button">
        <nav>
          <Link to="/">Início</Link>
          <Link to="/popular">Filmes populares</Link>
          <Link to="/genres">Filmes por gênero</Link>
          <Link to="/search">Filmes por título</Link>
        </nav>
      </div> 
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<PopularMovies />} />
          <Route path="/genres" element={<GenresMovies />} />
          <Route path="/search" element={<SearchMovies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;