import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[addBorderBinding]'
})
export class AddBorderBindingDirective {

  constructor() { }
  @HostBinding('style.border') border: string;
  @HostListener('mouseover') onMouseOver2()
  {
       this.border ='5px solid green';
  }

}
