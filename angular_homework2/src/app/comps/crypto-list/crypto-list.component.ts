import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css'],
})
export class CryptoListComponent implements OnInit {
  constructor(private _cryptoServ: CryptoService) {}

  ngOnInit() {
    this._cryptoServ.getTestData().subscribe((data: any) => {
      console.log(data);
    });
  }
}
