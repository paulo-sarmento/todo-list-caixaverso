import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected title = 'todo-list';
  todos: string[] = [];

  addTodo(todoText: string) {
    const trimmedTodoText = todoText.trim();

    if (trimmedTodoText) {
      this.todos.push(trimmedTodoText);
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
