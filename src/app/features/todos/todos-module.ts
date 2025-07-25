import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoInput } from './components/todo-input/todo-input';
import { TodoList } from './components/todo-list/todo-list';

@NgModule({
  declarations: [TodoInput, TodoList],
  imports: [CommonModule, FormsModule],
  exports: [TodoInput, TodoList],
})
export class TodosModule {}
