import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParalelosListComponent } from './paralelos-list.component';

const routes: Routes = [{ path: '', component: ParalelosListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParalelosListRoutingModule { }
