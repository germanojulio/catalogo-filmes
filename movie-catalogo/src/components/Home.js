import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="home-container">
        <header className="header">
        <h1>Bem-vindo ao catálogo de filmes</h1>
        <p>Encontre os filmes mais populares, navegue por seus gêneros favoritos ou pesquise por um título específico.</p>
        </header>
        
        <div className="button-container">
          <Link to="/popular"><button>Filmes Populares</button></Link>
          <Link to="/genres"><button>Filmes por Gênero</button></Link>
          <Link to="/search"><button>Pesquisar Filme</button></Link>
        </div>
      </div>
    );
  };

export default Home;