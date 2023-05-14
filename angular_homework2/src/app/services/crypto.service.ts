import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  data = '';
  getTestData() {
    this.data = new Observable((obs) => {
      setTimeout(() => {
        obs.next('bit 1000');
      }, 1000);
      setTimeout(() => {
        obs.next('bit value 1002');
      }, 2000);
      setTimeout(() => {
        obs.next('bit value 3000');
      }, 3000);
    });
    return this.data;
  }
  constructor() {}
}
