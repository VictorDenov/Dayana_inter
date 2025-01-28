import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCarreraRoutingModule } from './add-carreras-routing.module';
import { AddCarrerasComponent } from './add-carreras.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddCarrerasComponent
  ],
  imports: [
    CommonModule,
    AddCarreraRoutingModule,
    SharedModule
  ]
})
export class AddCarrerasModule { }
