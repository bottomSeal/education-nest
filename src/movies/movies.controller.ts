import { Controller, Get, Post, Delete, Patch } from '@nestjs/common';
import { Body, Param, Query } from '@nestjs/common/decorators';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return 'Здесь будут возвращаться все фильмы.';
    }

    @Get('search')
    search(@Query("name") name: string){
        return `Мы ищем фильм с названием: ${name}`
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return `Здесь будет возвращаться один фильм. Его id: ${id}.`;
    }

    @Post()
    create(@Body() moviaData) {
        console.log(moviaData);
        return moviaData;
    }

    @Delete()
    deleteAll() {
        return 'Эта функция удаляет все фильмы.';
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number) {
        return `Эта функция удаляет один фильм с id: ${id}.`;
    }

    @Patch(':id')
    patch(@Param('id') id: number, @Body() updateData) {
        return {
            movieId: id,
            ...updateData
        };
    }
}
