import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraComponent } from './carreras.component';

const routes: Routes = [
  { path: '', component: CarreraComponent,
  children: [
    {
      path: 'carreras-list',
      loadChildren: () =>
        import('./list-carreras/carreras-list.module').then(
          (m) => m.CarrerasListModule
        ),
    },
    {
      path: 'add-carreras',
      loadChildren: () =>
        import('./add-carreras/add-carreras.module').then(
          (m) => m.AddCarrerasModule
        ),
    },
    {
      path: 'edit-carreras',
      loadChildren: () =>
        import('./edit-carreras/edit-carreras.module').then(
          (m) => m.EditCarrerasModule
        ),
    },
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrerasRoutingModule {}
