import { ChangeTextDirective } from './change-text.directive';
let elRefMock = {
  nativeElement: document.createElement('div')
};
describe('ChangeTextDirective', () => {
  it('should create an instance', () => {
    const directive = new ChangeTextDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
