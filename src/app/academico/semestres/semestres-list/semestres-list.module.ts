import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { SemestresListRoutingModule } from './semestres-list-routing.module';
import { SemestresListComponent } from './semestres-list.component';


@NgModule({
  declarations: [
    SemestresListComponent
  ],
  imports: [
    CommonModule,
    SemestresListRoutingModule,
    SharedModule
  ]
})
export class SemestresmentListModule { }
