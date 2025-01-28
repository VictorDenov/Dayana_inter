import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemestresListComponent } from './semestres-list.component';

const routes: Routes = [{ path: '', component: SemestresListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SemestresListRoutingModule { }
