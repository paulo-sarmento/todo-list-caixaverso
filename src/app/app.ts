import { Component } from '@angular/core';
import { TodoStore } from './services/todo.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected title = 'todo-list';

  constructor(public todoStore: TodoStore) {}

  onAddTodo(todoText: string) {
    this.todoStore.addTodo(todoText);
  }

  onRemoveTodo(index: number) {
    this.todoStore.removeTodo(index);
  }

  onCompleteTodo(index: number) {
    this.todoStore.completeTodo(index);
  }
}
