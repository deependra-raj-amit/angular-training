import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <h2>Todo List</h2>
    <app-todo-add (addTodo)="onAddTodo($event)"></app-todo-add>
    <app-todo-item 
      *ngFor="let todo of todos" 
      [todo]="todo"
      (delete)="onDeleteTodo(todo)">
    </app-todo-item>
  `
})
export class TodoListComponent {
  todos: string[] = [];

  onAddTodo(newTodo: string) {
    this.todos.push(newTodo);
  }

  onDeleteTodo(todoToDelete: string) {
    this.todos = this.todos.filter(todo => todo !== todoToDelete);
  }
}