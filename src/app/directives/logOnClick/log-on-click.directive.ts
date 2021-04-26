import {Directive, HostListener} from '@angular/core';

@Directive({
    selector: "[logOnClick]",

})

export default class LogOnClickDirective {

    constructor() {}
    @HostListener('click', ['$event'])
    onClick(event) { console.log(event); }
}