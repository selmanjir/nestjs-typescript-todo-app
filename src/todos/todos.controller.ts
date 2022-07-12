import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Todo,TodosStatus } from './todos.model';
import { TodosService } from './todos.service';
import { v4 as uuidv4 } from 'uuid';
import { CreateTodoDto } from './dto/create-todo-dto';

@Controller('todos')
export class TodosController {
    constructor(private todosService: TodosService) {}

    @Get()
    getAllTodos(): Todo[] {
        return this.todosService.getAllTodos();
    }

    @Get('/:id')
    getTodoById(@Param('id') id: string ): Todo {
        return this.todosService.getTodoById(id)
    }
    
    @Post()
    createTodo(
        @Body() createTodoDto: CreateTodoDto,): Todo {
        return this.todosService.createTodo(createTodoDto)
    }

    @Patch('/:id/status')
    updateTodoStatus(
        @Param('id') id: string,
        @Body('status') status: TodosStatus
    ): Todo {
        return this.todosService.updateTodoStatus(id, status);
    }

    @Delete('/:id')
    deleteTodo(@Param('id') id:string): void {
        return this.todosService.deleteTodo(id);
    }
}
