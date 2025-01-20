import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { AddEstudianteRoutingModule } from './add-estudiante-routing.module';
import { AddEstudianteComponent } from './add-estudiante.component';


@NgModule({
  declarations: [
    AddEstudianteComponent
  ],
  imports: [
    CommonModule,
    AddEstudianteRoutingModule,
    SharedModule
  ]
})
export class AddEstudiantetModule { }
