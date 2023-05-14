import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @ViewChild('f') myForm: any;
  cake = 'vanilla';
  inputPass: any;
  inputPass2: any;
  ngOnInit() {}

  onSub() {
    // console.log(this.para);
    // console.log(this.para.nativeElement.innerHTML);
    console.log(this.myForm);
  }
}
