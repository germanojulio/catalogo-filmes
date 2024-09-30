import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TMDbService {
    private apiKey = '4800b824f17e3f066264b6d274f41547';
    private baseUrl = 'https://api.themoviedb.org/3';

    async getPopularMovies() {
        try {
            const response = await axios.get(`${this.baseUrl}/movie/popular`, {
                params: {
                    api_key: this.apiKey,
                    language: 'pt-BR',
                },
            })
            return response.data.results;
        }catch (error) {
            console.error('Erro ao buscar filmes populares', error);
            throw error;
        }
    }
    async searchMovies(query: string) {
        try {
          const response = await axios.get(`${this.baseUrl}/search/movie`, {
            params: {
              api_key: this.apiKey,
              query,
              language: 'pt-BR',
            },
          });
          return response.data;
        } catch (error) {
          console.error('Erro ao buscar filmes por título:', error);
          throw error;
        }
      }
    async getMoviesByGenre(genreId: string) {
        try {
            const response = await axios.get(`${this.baseUrl}/discover/movie`, {
                params: {
                    api_key: this.apiKey,
                    with_genres: genreId,
                    language: 'pt-BR',
                },
            });
            return response.data.results;
        }catch (error) {
            console.error('Erro ao buscar filmes pelo gênero', error);
            throw error;
        }
    }
    async getMovieDetails(id: string) {
        try {
            const response = await axios.get(`${this.baseUrl}/movie/${id}`, {
                params: {
                    api_key: this.apiKey,
                    append_to_response: 'videos',
                    language: 'pt-BR',
                },
            });
            return response.data;
        }catch (error) {
            console.error('Erro ao buscar os detalhes do filme', error);
            throw error;
        }
    }
}
