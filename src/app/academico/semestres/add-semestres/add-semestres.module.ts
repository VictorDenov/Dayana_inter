import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddSemestresComponent } from './add-semestres.component';
import { AddSemestresRoutingModule } from './add-semestres-routing.module';


@NgModule({
  declarations: [
    AddSemestresComponent
  ],
  imports: [
    CommonModule,
    AddSemestresRoutingModule,
    SharedModule
  ]
})
export class AddSemestrestModule { }
