import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective implements OnInit {

  constructor( private el: ElementRef, private rd2: Renderer2) {}

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
     this.rd2.setStyle(this.el.nativeElement, 'color', 'red');
  }

}
