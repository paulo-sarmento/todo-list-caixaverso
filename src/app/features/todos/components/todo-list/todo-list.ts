import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  @Input() todos: string[] = [];
  @Output() onRemoveTodo = new EventEmitter<number>();
}
