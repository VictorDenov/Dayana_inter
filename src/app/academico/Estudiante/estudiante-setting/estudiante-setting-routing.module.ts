import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantetSettingComponent } from './estudiante-setting.component';

const routes: Routes = [{ path: '', component: EstudiantetSettingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteSettingRoutingModule { }
