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

  showNameAndType() {
    return `My name is ${this.myName} and my type is ${this.myType}`;
  }

  onPassUpdate(event: any) {
    this.myName = event.target.value;
  }
}
