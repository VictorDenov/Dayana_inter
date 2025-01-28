import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDepartmentRoutingModule } from './add-paralelos-routing.module';
import { AddDepartmentComponent } from './add-paralelos.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddDepartmentComponent
  ],
  imports: [
    CommonModule,
    AddDepartmentRoutingModule,
    SharedModule
  ]
})
export class AddParalelosModule { }
