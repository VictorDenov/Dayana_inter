import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrerasListComponent } from './carreras-list.component';

const routes: Routes = [{ path: '', component: CarrerasListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrerasListRoutingModule { }
