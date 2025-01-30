import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-atenciones.component.html',
  styleUrls: ['./add-atenciones.component.scss']
})
export class AddAtencionesmentComponent {
  public routes = routes;
}
