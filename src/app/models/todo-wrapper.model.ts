export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoWrapper {
  todosList: Todo[];
  completedTodosList: Todo[];
}
