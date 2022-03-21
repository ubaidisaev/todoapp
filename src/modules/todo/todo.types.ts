export interface ITodo {
    id: string,
    title: string,
    parent_id: string | null;
    child: (string|number)[];
    completed: boolean;
}

export interface ITodosState {
    [key: string]: ITodo
}

export interface IAddTodoAction {
    title: string;
    parent_id?: string;
}

