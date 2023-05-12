import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../../services/fruits.service';
import { sortBy } from 'lodash';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent implements OnInit {
  listFruits_ar = ['apple', 'kiwi'];
  drinks_ar: any = [];
  constructor(private _fruitSer: FruitsService) {
    this.listFruits_ar = this._fruitSer.getFruits();
    this.drinks_ar = this._fruitSer.drinks_ar;
    this.drinks_ar = sortBy(this._fruitSer.drinks_ar, 'price');
  }
  ngOnInit() {}
}
