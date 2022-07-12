import { Body, Controller, Get, Post } from '@nestjs/common';
import { Todo,TodosStatus } from './todos.model';
import { TodosService } from './todos.service';
import { v4 as uuidv4 } from 'uuid';

@Controller('todos')
export class TodosController {
    constructor(private todosService: TodosService) {}

    @Get()
    getAllTodos(): Todo[] {
        return this.todosService.getAllTodos();
    }
    @Post()
    createTodo(
        @Body('title') title: string,
        @Body('description')  description: string 
        ): Todo {
        return this.todosService.createTodo(title, description)
    }
}
