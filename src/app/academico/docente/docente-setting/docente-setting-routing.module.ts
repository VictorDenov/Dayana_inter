import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteSettingComponent } from './docente-setting.component';

const routes: Routes = [{ path: '', component: DocenteSettingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctenteSettingRoutingModule { }
