import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { DataService } from 'src/app/shared/data/data.service';
import { patientProfile } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-estudiante-profile',
  templateUrl: './estudiante-profile.component.html',
  styleUrls: ['./estudiante-profile.component.scss']
})
export class EstudianteProfileComponent {
public routes = routes;
public patientProfile: Array<patientProfile> = [];

constructor(public data : DataService)
{
  this.patientProfile = this.data.patientProfile;
}

public sortData(sort: Sort) {
  const data = this.patientProfile.slice();

  if (!sort.active || sort.direction === '') {
    this.patientProfile = data;
  } else {
    this.patientProfile = data.sort((a, b) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const aValue = (a as any)[sort.active];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const bValue = (b as any)[sort.active];
      return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
    });
  }
}
}
