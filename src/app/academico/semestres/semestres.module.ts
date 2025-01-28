import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemestresComponent } from './semestres.component';
import { SemestresRoutingModule } from './semestres-routing.module';



@NgModule({
  declarations: [
    SemestresComponent
  ],
  imports: [
    CommonModule,
    SemestresRoutingModule
  ]
})
export class SemestresModule { }
