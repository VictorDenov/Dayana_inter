import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesComponent } from './estudiante.component';
import { EstudianteRoutingModule } from './estudiante-routing.module';


@NgModule({
  declarations: [
    EstudiantesComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule
  ]
})
export class EstudiantetModule { }
