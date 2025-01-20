import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocenteSettingComponent } from './docente-setting.component';
import { DoctenteSettingRoutingModule } from './docente-setting-routing.module';



@NgModule({
  declarations: [
    DocenteSettingComponent
  ],
  imports: [
    CommonModule,
    DoctenteSettingRoutingModule
  ]
})
export class DocenteSettingModule { }
