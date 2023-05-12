import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FruitsService {
  fruits_ar: string[] = [];
  drinks_ar;
  constructor() {
    this.fruits_ar = ['melon', 'mango', 'orange'];
    this.drinks_ar = [
      { name: 'beer', price: 3, alcohol: 0.05, expired: '2021-05-10' },
      { name: 'cola', price: 2.5, alcohol: 0, expired: '2020-05-10' },
    ];
  }

  getFruits() {
    return this.fruits_ar;
  }
  addFruits(_val: any) {
    this.fruits_ar.push(_val);
  }
}
