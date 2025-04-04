import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent {
  @Input() title: string = "Default Title";
  @Output() buttonClicked = new EventEmitter<string>();

  onButtonClick() {
    this.buttonClicked.emit("Button was clicked!");
  }
}