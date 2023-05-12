import {
  Directive,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

// hostListener
// @Directive({
//   selector: '[appBetterGreen]',
// })
// export class BetterGreenDirective implements OnInit {
//   constructor(private elementRef: ElementRef) {}

//   ngOnInit() {
//פקודה של דיבור עם האלמנט שעליו יהיה את הדרקטייב שיהפוך את הרקע שלו לירוק
//     this.elementRef.nativeElement.style.background = 'green';
//     this.elementRef.nativeElement.style.color = 'white';
//   }

//   @HostListener('mouseenter') mouseover() {
//     this.elementRef.nativeElement.style.color = 'red';
//   }

//   @HostListener('mouseleave') mouseleave() {
//     this.elementRef.nativeElement.style.color = 'white';
//   }
// }

// hostBinding
@Directive({
  selector: '[appBetterGreen]',
})
export class BetterGreenDirective implements OnInit {
  @Input() bgColor = 'greenyellow';
  @HostBinding('style.color') clr = 'white';
  @HostBinding('style.background') bg = 'greenyellow';
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.bg = this.bgColor;
  }

  @HostListener('mouseenter') mouseover() {
    this.clr = 'brown';
  }

  @HostListener('mouseleave') mouseleave() {
    this.clr = 'white';
  }
}
