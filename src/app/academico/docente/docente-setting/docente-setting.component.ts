import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-docente-setting',
  templateUrl: './docente-setting.component.html',
  styleUrls: ['./docente-setting.component.scss']
})
export class DocenteSettingComponent {
  public routes = routes;
}
