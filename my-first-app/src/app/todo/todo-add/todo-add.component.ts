import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  template: `
    <input [(ngModel)]="newTodo" placeholder="New todo">
    <button (click)="addNewTodo()">Add</button>
  `
})
export class TodoAddComponent {
  newTodo = '';
  @Output() addTodo = new EventEmitter<string>();

  addNewTodo() {
    if (this.newTodo.trim()) {
      this.addTodo.emit(this.newTodo);
      this.newTodo = '';
    }
  }
}