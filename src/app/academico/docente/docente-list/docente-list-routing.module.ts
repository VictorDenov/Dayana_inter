import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteListComponent } from './docente-list.component';

const routes: Routes = [{ path: '', component: DocenteListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteListRoutingModule { }
