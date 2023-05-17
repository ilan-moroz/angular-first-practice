import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  mission = '';
  start_time = '';
  finish_time = '';
  price = '';
  constructor(private formService: FormService) {}

  ngOnInit() {}
}
