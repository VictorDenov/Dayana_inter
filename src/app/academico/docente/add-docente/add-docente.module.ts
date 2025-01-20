import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { materialModule } from 'src/app/shared/material.module';
import { AddDocenteRoutingModule } from './add-docente-routing.module';
import { AddDocenteComponent } from './add-docente.component';


@NgModule({
  declarations: [
    AddDocenteComponent
  ],
  imports: [
    CommonModule,
    AddDocenteRoutingModule,
    SharedModule,
    materialModule
  ]
})
export class AddDocenteModule { }
