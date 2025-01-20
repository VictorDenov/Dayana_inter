import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { EditDocenteRoutingModule } from './edit-docente-routing.module';
import { EditDocenteComponent } from './edit-docente.component';


@NgModule({
  declarations: [
    EditDocenteComponent
  ],
  imports: [
    CommonModule,
    EditDocenteRoutingModule,
    SharedModule
  ]
})
export class EditDocenteModule { }
