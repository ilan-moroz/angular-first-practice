import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FruitsService {
  fruits_ar: string[] = [];
  constructor() {
    this.fruits_ar = ['melon', 'mango', 'orange'];
  }

  getFruits() {
    return this.fruits_ar;
  }
  addFruits(_val: any) {
    this.fruits_ar.push(_val);
  }
}
