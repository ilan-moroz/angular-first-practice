import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  data: any;
  bitUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
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
  makeApiRequest() {
    return this.http.get(this.bitUrl);
  }
  constructor(private http: HttpClient) {}
}
