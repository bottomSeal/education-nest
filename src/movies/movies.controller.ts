import { Controller, Get, Post, Delete, Patch } from '@nestjs/common';
import { Body, Param, Query } from '@nestjs/common/decorators';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movies.entities';
import { MoviesService } from './movies.service'

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService:  MoviesService) {}

    @Get()
    getAll() : Movie[]{
        return this.moviesService.getAll();
    }

    @Get('search')
    search(@Query("name") name: string){
        return `Мы ищем фильм с названием: ${name}`
    }

    @Get(':id')
    getOne(@Param('id') id: number) : Movie{
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData);
    }

    @Delete()
    deleteAll() {
        return 'Эта функция удаляет все фильмы.';
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number) {
        return this.moviesService.remove(id);
    }

    @Patch(':id')
    patch(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
        return this.moviesService.patch(id, updateData);
    }
}
