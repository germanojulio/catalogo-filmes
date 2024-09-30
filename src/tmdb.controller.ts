import { Controller, Get, Param, Query } from "@nestjs/common";
import { TMDbService } from "./tmdb.service";

@Controller('tmdb')
export class TMDbController { 
    constructor(private readonly tmdbService: TMDbService) {}

    @Get('popular')
    async getPopularMovies() {
        return this.tmdbService.getPopularMovies();
    }
    
    @Get('search')
    async searchMovies(@Query('query') query: string) {
        return this.tmdbService.searchMovies(query);
    }

    @Get('genre/:genreId')
    async getMoviesByGenre(@Param('genreId') genreId: string) {
        return await this.tmdbService.getMoviesByGenre(genreId);
    }

    @Get('movie/:id')
    async getMovieDetails(@Param('id') id: string) {
        return this.tmdbService.getMovieDetails(id);
    }
}