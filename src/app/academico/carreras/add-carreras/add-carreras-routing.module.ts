import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarrerasComponent } from './add-carreras.component';

const routes: Routes = [{ path: '', component: AddCarrerasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCarreraRoutingModule { }
