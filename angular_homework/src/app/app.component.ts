import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'angular_colors';
  myName = 'Shnitzel';
  myType = 'Gaver';
  type = 'password';
  myAge = 0;
  myColor = '';
  txtColor = 'Blue';
  title2 = 'ng if directive';
  showInfo = true;
  directive = ['red_box', 'green_box', 'yellow_box'];
  currentClassIndex = 0;
  fruits_ar = ['apple', 'banana', 'kiwi', 'orange'];
  fruits_ar2 = [
    'apple',
    'banana',
    'kiwi',
    'orange',
    'grapefruit',
    'grape',
    'strawberry',
    'watermelon',
  ];
  title3 = 'Alias events and props output and input';
  listFruits_ar = ['apple', 'mango'];
  // fruit_input = '';
  title4 = 'Hooks life cycle';
  fruits_ar3 = ['banana', 'melon', 'orange'];
  fruit1 = 'apple';
  fruit2 = 'banana';
  constructor() {}
  ngOnInit() {
    console.log('on init');
  }

  changeSomething() {
    this.fruit2 = 'grapes';
    this.title4 = 'change';
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  showNameAndType() {
    return `My name is ${this.myName} and my type is ${this.myType}`;
  }

  onPassUpdate(event: any) {
    this.myName = event.target.value;
  }

  onBtnClick() {
    this.showInfo = !this.showInfo;
  }

  getShowInfoColor() {
    return this.showInfo ? 'blue' : 'red';
  }

  getClass() {
    const className = this.directive[this.currentClassIndex];
    return { [className]: true };
  }

  onClick() {
    this.currentClassIndex =
      (this.currentClassIndex + 1) % this.directive.length;
  }

  // addProduct() {
  //   this.listFruits_ar.push(this.fruit_input);
  // }

  addProductFromApp(val: any) {
    this.listFruits_ar.push(val);
  }
}
