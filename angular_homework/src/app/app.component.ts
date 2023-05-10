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
}
