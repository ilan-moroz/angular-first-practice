import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges, DoCheck {
  @Input() fruitName = '';
  fruit_input = '';
  constructor() {}

  ngOnChanges() {
    console.log('on change input');
  }

  ngOnInit() {
    console.log('on init input');
  }

  ngDoCheck() {
    console.log('on check input' + this.fruitName);
  }
  changeProd() {
    //this.fruit input = "test"
    this.fruitName = ' momo';
  }
}
