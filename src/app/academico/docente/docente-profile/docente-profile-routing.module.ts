import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteProfileComponent } from './docente-profile.component';

const routes: Routes = [{ path: '', component: DocenteProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteProfileRoutingModule { }
