import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit {
  fruit_input = 'melon';
  @Output() addProdEvent = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  addProduct() {
    this.addProdEvent.emit(this.fruit_input);
  }
}
