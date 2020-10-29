import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";

import { IonicModule } from '@ionic/angular';

import { CalculatorPageRoutingModule } from './calculator-routing.module';

import { CalculatorPage } from './calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculatorPageRoutingModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatTableModule,
    MatButtonModule
  ],
  declarations: [CalculatorPage]
})
export class CalculatorPageModule {}



