import { Controller, Get, Post, Delete, Patch } from '@nestjs/common';
import { Body, Param, Query } from '@nestjs/common/decorators';
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
    getOne(@Param('id') id: string) : Movie{
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() movieData) {
        return this.moviesService.create(movieData);
    }

    @Delete()
    deleteAll() {
        return 'Эта функция удаляет все фильмы.';
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return this.moviesService.remove(id);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() updateData) {
        return this.moviesService.patch(id, updateData);
    }
}
