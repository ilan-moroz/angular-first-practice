import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
})
export class FoodsComponent implements OnInit {
  foods_ar = ['cake', 'pizza', 'burger', 'salad', 'chocolate'];
  choosenFood: any = 0;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    let getId: any = this.route.snapshot.paramMap.get('id');
    this.choosenFood = this.foods_ar[getId];
  }
}
