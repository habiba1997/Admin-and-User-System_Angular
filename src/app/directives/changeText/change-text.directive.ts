import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[changeText]'
})
export class ChangeTextDirective {

  constructor(element: ElementRef) {
    console.log(element);
    element.nativeElement.innerText="Text is changed by changeText Directive";
    
   }

}
