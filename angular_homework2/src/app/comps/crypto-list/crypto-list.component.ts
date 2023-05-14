import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css'],
})
export class CryptoListComponent implements OnInit {
  coins_ar: any = [];
  constructor(private _cryptoServ: CryptoService) {}

  ngOnInit() {
    this._cryptoServ.getTestData().subscribe((data: any) => {
      console.log(data);
    });
    this._cryptoServ.makeApiRequest().subscribe((data) => {
      console.log(data);
      this.coins_ar.push(...Object.values(data));
      console.log(this.coins_ar);
    });
  }
}
