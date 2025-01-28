import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { EditParalelosComponent } from './edit-paralelos.component';
import { EditParalelosRoutingModule } from './edit-paralelos-routing.module';


@NgModule({
  declarations: [
    EditParalelosComponent
  ],
  imports: [
    CommonModule,
    EditParalelosRoutingModule,
    SharedModule
  ]
})
export class EditParalelosModule { }
