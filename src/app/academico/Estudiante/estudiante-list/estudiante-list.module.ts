import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { EstudianteListRoutingModule } from './estudiante-list-routing.module';
import { EstudianteListComponent } from './estudiante-list.component';


@NgModule({
  declarations: [
    EstudianteListComponent
  ],
  imports: [
    CommonModule,
    EstudianteListRoutingModule,
    SharedModule
  ]
})
export class PatientsListModule { }
