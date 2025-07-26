import { Injectable } from '@angular/core';
import { TodoWrapper } from '../models/todo-wrapper.model';

@Injectable({
  providedIn: 'root',
})
export class TodoStore {
  private todoId = 1;

  private state: TodoWrapper = {
    todosList: [],
    completedTodosList: [],
  };

  get todos() {
    return [...this.state.todosList];
  }

  get completedTodos() {
    return [...this.state.completedTodosList];
  }

  get countTodos() {
    return this.state.todosList.length;
  }

  get countCompletedTodos() {
    return this.state.completedTodosList.length;
  }

  addTodo(todoText: string) {
    const trimmed = todoText.trim();
    if (trimmed) {
      this.state.todosList = [
        ...this.state.todosList,
        { id: this.todoId++, text: trimmed, completed: false },
      ];
    }
  }

  removeTodo(index: number) {
    this.state.todosList.splice(index, 1);
  }

  completeTodo(index: number) {
    const [done] = this.state.todosList.splice(index, 1);
    if (done) {
      this.state.completedTodosList.push({ ...done, completed: true });
    }
  }
}
