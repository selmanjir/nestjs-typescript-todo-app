import { Get, Injectable } from '@nestjs/common';
import { Todo, TodosStatus } from './todos.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTodoDto } from './dto/create-todo-dto';

@Injectable()
export class TodosService {
    private todos: Todo[] = [];

    getAllTodos(): Todo[] {
        return this.todos;
    }
    createTodo( createTodoDto: CreateTodoDto ): Todo {

        const { title, description } = createTodoDto;

        const todo: Todo = {
        id: uuidv4(),
        title,
        description,
        status: TodosStatus.OPEN
        }

        this.todos.push(todo);

        return todo;
    }
    getTodoById (id: string): Todo {
        return this.todos.find((todo) => todo.id === id);
    }
    updateTodoStatus(id: string, status: TodosStatus): Todo{
        const todo = this.getTodoById(id)
        todo.status = status

        return todo;
    }
    deleteTodo(id: string): void {
        this.todos = this.todos.filter((todo) => todo.id !== id)
    }
}
