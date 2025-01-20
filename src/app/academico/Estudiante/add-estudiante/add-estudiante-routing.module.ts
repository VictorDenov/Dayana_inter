import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEstudianteComponent } from './add-estudiante.component';

const routes: Routes = [{ path: '', component: AddEstudianteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEstudianteRoutingModule { }
