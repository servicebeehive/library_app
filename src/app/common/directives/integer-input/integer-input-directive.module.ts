import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegerInputDirective } from './integer-input-directive.directive';



@NgModule({
  declarations: [IntegerInputDirective],
  imports: [
    CommonModule
  ],
  exports: [IntegerInputDirective]
})
export class IntegerInputDirectiveModule { }
