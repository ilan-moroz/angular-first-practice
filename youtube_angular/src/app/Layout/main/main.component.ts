import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  myType = 'text';
  myPlaceHolder = 'User Name';
  myPass = '';

  onPassUpdate(event: any) {
    this.myPass = event.target.value;
    console.log(this.myPass);
  }
}
