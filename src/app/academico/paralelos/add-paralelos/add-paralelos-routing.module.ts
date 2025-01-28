import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddParalelosComponent } from './add-paralelos.component';

const routes: Routes = [{ path: '', component: AddParalelosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDepartmentRoutingModule { }
