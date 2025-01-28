import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrerasRoutingModule } from './carreras-routing.module';
import { CarreraComponent } from './carreras.component';


@NgModule({
  declarations: [
    CarreraComponent
  ],
  imports: [
    CommonModule,
    CarrerasRoutingModule
  ]
})
export class CarreraModule { }
