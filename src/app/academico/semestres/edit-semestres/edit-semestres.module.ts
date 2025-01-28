import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditSemestresComponent } from './edit-semestres.component';
import { EditSemestresRoutingModule } from './edit-semestres-routing.module';


@NgModule({
  declarations: [
    EditSemestresComponent
  ],
  imports: [
    CommonModule,
    EditSemestresRoutingModule,
    SharedModule
  ]
})
export class EditSemestresModule { }
