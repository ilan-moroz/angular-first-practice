import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRed]',
})
export class RedDirective implements OnInit {
  // הפרייבט מאפשר להתשמש במשתנה שהעברנו לקונסטרקטור בכל מקום במחלקה גם במיטודות אחרות
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // פקודה של דיבור עם האלמנט שעליו יהיה את הדרקטייב שיהפוך את הרקע שלו לירוק
    this.elementRef.nativeElement.style.color = 'red';
  }
}
