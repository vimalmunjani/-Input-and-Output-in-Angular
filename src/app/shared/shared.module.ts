import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardShadowDirective } from './directives/card-shadow.directive';
import { HiddenDirective } from './directives/hidden.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardShadowDirective,
    HiddenDirective
  ],
  exports: [
    CardShadowDirective,
    HiddenDirective
  ]
})
export class SharedModule { }
