import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
    let rt = '';
    this.showInfo ? (rt = 'blue') : (rt = 'red');
    return rt;
  }

  getClass() {
    const className = this.directive[this.currentClassIndex];
    return { [className]: true };
  }

  onClick() {
    this.currentClassIndex =
      (this.currentClassIndex + 1) % this.directive.length;
  }
}
