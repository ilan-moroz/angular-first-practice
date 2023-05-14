import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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
  nameOnly: any = /^[a-zA-Z!@#%&*]{3,9999}$/;
  constructor(private router: Router) {}
  ngOnInit() {}

  onSub() {
    // console.log(this.para);
    // console.log(this.para.nativeElement.innerHTML);
    console.log(this.myForm);
    this.router.navigate(['/']);
  }
}
