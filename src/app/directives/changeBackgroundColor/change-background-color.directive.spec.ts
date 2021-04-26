import { ElementRef, Renderer2 } from '@angular/core';
import { ChangeBackgroundColorDirective } from './change-background-color.directive';
let elRefMock = {
  nativeElement: document.createElement('div')
};
let renderer2mock: Renderer2;

// let serviceMock = {
//   setTitle: (title: string) => null
// };
describe('ChangeBackgroundColorDirective', () => {
  it('should create an instance', () => {
    const directive = new ChangeBackgroundColorDirective(elRefMock,renderer2mock);
    expect(directive).toBeTruthy();
  });
});
