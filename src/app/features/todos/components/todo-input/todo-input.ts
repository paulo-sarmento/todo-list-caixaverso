import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  standalone: false,
  templateUrl: './todo-input.html',
  styleUrl: './todo-input.css',
})
export class TodoInput {
  todoText: string = '';

  @Output() onAddTodo = new EventEmitter<string>();
}
