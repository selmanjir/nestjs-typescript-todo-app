import { TodosStatus } from '../todos.model';

export class GetTodosFilterDto {
    search: string;
    status: TodosStatus;
}