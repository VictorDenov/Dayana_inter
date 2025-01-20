import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteProfileRoutingModule } from './docente-profile-routing.module';
import { DocenteProfileComponent } from './docente-profile.component';


@NgModule({
  declarations: [
    DocenteProfileComponent
  ],
  imports: [
    CommonModule,
    DocenteProfileRoutingModule
  ]
})
export class DocenteProfileModule { }
