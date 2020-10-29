import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { Route } from '@angular/compiler/src/core';
import { Routes } from '@angular/router';

const routes: Routes =[
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path:'calculator',
        loadChildren:'../calculator/calculator.module#CalculatorPageModule'
      },
      {
        path: 'second',
        loadChildren: '../hours/hours.module#HoursPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/calculator'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
