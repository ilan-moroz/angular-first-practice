import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/services/fruits.service';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.css'],
})
export class InputUserComponent implements OnInit {
  fruit_input = 'melon';
  constructor(private _fruiteSer: FruitsService) {}

  ngOnInit() {}

  addFruit() {
    this._fruiteSer.addFruits(this.fruit_input);
    //alert(this.fruit_input)
  }
}
