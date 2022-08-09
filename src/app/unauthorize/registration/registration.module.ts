import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntegerInputDirectiveModule } from 'src/app/common/directives/integer-input/integer-input-directive.module';
import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';

import { RegistrationPage } from './registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IntegerInputDirectiveModule,
    IonicModule,
    RegistrationPageRoutingModule
  ],
  declarations: [RegistrationPage]
})
export class RegistrationPageModule {}
