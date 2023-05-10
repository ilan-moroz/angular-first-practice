import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGreen]',
})
// מייבא את היכולת של הוק לפעול במחלקה
export class GreenDirective implements OnInit {
  // הפרייבט מאפשר להתשמש במשתנה שהעברנו לקונסטרקטור בכל מקום במחלקה גם במיטודות אחרות
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // פקודה של דיבור עם האלמנט שעליו יהיה את הדרקטייב שיהפוך את הרקע שלו לירוק
    this.elementRef.nativeElement.style.background = 'yellowgreen';
  }
}
