import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSemestresComponent } from './add-semestres.component';

const routes: Routes = [{ path: '', component: AddSemestresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSemestresRoutingModule { }
