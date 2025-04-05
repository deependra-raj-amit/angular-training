import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoAddComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TodoListComponent] 
})
export class TodoModule { }