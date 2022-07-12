export interface Todo{
    id: string;
    title: string;
    description: string;
    status: TodosStatus;
}
export enum TodosStatus {
    OPEN = 'OPEN',
    DONE = 'DONE'
}
