import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../../services/fruits.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent implements OnInit {
  // listFruits_ar = ['apple', 'kiwi'];
  // constructor(private _fruitSer: FruitsService) {
  //   this.listFruits_ar = this._fruitSer.getFruits();
  // }
  drinks_ar: any = [];
  listFruits_ar: string[];
  constructor(private _fruitSer: FruitsService) {
    this.listFruits_ar = this._fruitSer.getFruits();
    this.drinks_ar = this._fruitSer.drinks_ar;
  }
  ngOnInit() {}
}
