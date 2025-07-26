import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../../../models/todo-wrapper.model';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  @Input() todos: Todo[] = [];

  @Output() onRemoveTodo = new EventEmitter<number>();
  @Output() onCompleteTodo = new EventEmitter<number>();
}
