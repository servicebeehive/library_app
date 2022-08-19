import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appIntegerInputDirective]',
})
export class IntegerInputDirective {
  constructor() {}

  @HostListener('keypress', ['$event'])
  onInput(event: any) {
    const pattern = /[0-9]/; // without ., for integer only
    const inputChar = String.fromCharCode(
      event.which ? event.which : event.keyCode
    );

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }
    return true;
  }
}
