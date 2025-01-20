import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-estudiante-setting',
  templateUrl: './estudiante-setting.component.html',
  styleUrls: ['./estudiante-setting.component.scss']
})
export class EstudiantetSettingComponent {
  public routes = routes;
}
