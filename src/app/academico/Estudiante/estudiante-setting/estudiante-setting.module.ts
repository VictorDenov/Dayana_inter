import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteSettingRoutingModule } from './estudiante-setting-routing.module';
import { EstudiantetSettingComponent } from './estudiante-setting.component';



@NgModule({
  declarations: [
    EstudiantetSettingComponent
  ],
  imports: [
    CommonModule,
    EstudianteSettingRoutingModule
  ]
})
export class EstudianteSettingModule { }
