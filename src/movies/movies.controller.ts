import { Controller, Get, Post, Delete, Patch } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return 'Здесь будут возвращаться все фильмы.';
    }

    @Get('/:id')
    getOne(@Param('id') id: number) {
        return `Здесь будет возвращаться один фильм. Его id: ${id}.`;
    }

    @Post()
    create() {
        return 'Эта функция создает новый фильм.';
    }

    @Delete()
    deleteAll() {
        return 'Эта функция удаляет все фильмы.';
    }

    @Delete('/:id')
    deleteOne(@Param('id') id: number) {
        return `Эта функция удаляет один фильм с id: ${id}.`;
    }

    @Patch('/:id')
    patch(@Param('id') id: number) {
        return `Эта функция обновляет один фильм с id: ${id}.`;
    }
}
