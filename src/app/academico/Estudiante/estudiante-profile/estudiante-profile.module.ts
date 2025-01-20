import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { EstudianteProfileRoutingModule } from './estudiante-profile-routing.module';
import { EstudianteProfileComponent } from './estudiante-profile.component';


@NgModule({
  declarations: [
    EstudianteProfileComponent
  ],
  imports: [
    CommonModule,
    EstudianteProfileRoutingModule,
    SharedModule
  ]
})
export class EstudianteProfileModule { }
