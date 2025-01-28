import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditParalelosComponent } from './edit-paralelos.component';

const routes: Routes = [{ path: '', component: EditParalelosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditParalelosRoutingModule { }
