import { Get, Injectable } from '@nestjs/common';
import { Todo, TodosStatus } from './todos.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodosService {
    private todos: Todo[] = [];
    getAllTodos() {
        return this.todos;
    }
    createTodo(title: string, description: string) {
        const todo: Todo = {
        id: uuidv4(),
        title,
        description,
        status: TodosStatus.OPEN
        }

        this.todos.push(todo);
        return todo;
    }
}
