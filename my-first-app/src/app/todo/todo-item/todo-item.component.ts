import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
      <span>{{ todo }}</span>
      <button (click)="deleteItem()">Delete</button>
    </div>
  `,
  styles: [`
    .todo-item {
      display: flex;
      justify-content: space-between;
      margin: 5px 0;
      padding: 5px;
      border: 1px solid #ddd;
    }
  `]
})
export class TodoItemComponent {
  // @Input() todo?: string;
  // @Input() todo!: string;
  @Input() todo: string = '';
  @Output() delete = new EventEmitter<string>();

  deleteItem() {
    this.delete.emit(this.todo);
  }
}