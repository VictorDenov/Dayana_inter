import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-edit-atenciones',
  templateUrl: './edit-atenciones.component.html',
  styleUrls: ['./edit-atenciones.component.scss']
})
export class EditAtencionesComponent {
  public routes = routes;
}
