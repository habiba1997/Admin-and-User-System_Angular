import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ChangeBackgroundColor]'
})
export class ChangeBackgroundColorDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer2) {

     }
     
     @HostListener('mouseover') onMouseOver()
     {
       this.changeBgColor('red');
     }
     @HostListener('mouseleave') onMouseLeave()
     {
       this.changeBgColor('black');
     }

     changeBgColor(color:string)
     {
       this.renderer.setStyle(this.el.nativeElement,
        'color',color);
     }
     //the @HostBinding() function decorator allows you to set the properties of the host element from the directive class.
     // Let's say you want to change the style properties such as height, width, color, margin, border, etc., or any 
     //other internal properties of the host element in the directive class. 

     
}
