import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteComponent } from './docente.component';
import { DocenteRoutingModule } from './docente-routing.module';


@NgModule({
  declarations: [
    DocenteComponent
  ],
  imports: [
    CommonModule,
    DocenteRoutingModule
  ]
})
export class DocenteModule { }
