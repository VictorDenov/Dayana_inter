import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexResponsive,
  ApexPlotOptions,
  ApexLegend,
  ApexTooltip,
} from 'ng-apexcharts';
import { TokenService } from 'src/app/authentication/services/token.service';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}
export type ChartOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  series: ApexAxisChartSeries | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chart: ApexChart | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  xaxis: ApexXAxis | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataLabels: ApexDataLabels | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  grid: ApexGrid | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fill: ApexFill | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  markers: ApexMarkers | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  yaxis: ApexYAxis | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stroke: ApexStroke | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  title: ApexTitleSubtitle | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  labels: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responsive: ApexResponsive[] | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plotOptions: ApexPlotOptions | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tooltip: ApexTooltip | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  legend: ApexLegend | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
};

@Component({
  selector: 'app-docente-dashboard',
  templateUrl: './docente-dashboard.component.html',
  styleUrls: ['./docente-dashboard.component.scss'],
})


export class DashboardDocenteComponent implements OnInit {

  userName: string | null = '';
  public routes = routes;


  ngOnInit(): void {
    // Llamamos a TokenService para obtener el nombre del docente desde el token
    this.userName = this.tokenService.getNombreDocente();
  }

  constructor(public tokenService: TokenService) { }

  // Lista de carreras con semestres, paralelos y estudiantes
  carreras = [
    { name: 'Desarrollo de Software', 
      semestres: [
        {
          name: 'Primer Semestre', 
          paralelos: [
            { name: 'A', students: ['Dayana Nuñez', 'Patricio Diaz', 'Alex Parra'] },
            { name: 'B', students: ['Lesly Tierra', 'Angelica Damian', 'Carlos Parra'] }
          ]
        },
        {
          name: 'Segundo Semestre', 
          paralelos: [
            { name: 'A', students: ['Angie Gusqui', 'Luis Aguirre', 'Angel Peña'] },
            { name: 'B', students: ['Fernanda Guerrero', 'Sofia Rios', 'Daniel Guevara'] }
          ]
        },
      ]
    },
    { name: 'Rehabilitación Fisica', 
      semestres: [
        {
          name: 'Primer Semestre', 
          paralelos: [
            { name: 'A', students: ['Dayana Nuñez', 'Patricio Diaz', 'Alex Parra'] },
            { name: 'B', students: ['Lesly Tierra', 'Angelica Damian', 'Carlos Parra'] }
          ]
        },
        {
          name: 'Segundo Semestre', 
          paralelos: [
            { name: 'A', students: ['Angie Gusqui', 'Luis Aguirre', 'Angel Peña'] },
            { name: 'B', students: ['Fernanda Guerrero', 'Sofia Rios', 'Daniel Guevara'] }
          ]
        },
      ]
    },
  ];
  

  // Variables para gestionar la selección del formulario
  selectedCarrera!: string;
  selectedSemestre!: string;
  selectedParalelo!: string;
  selectedEstudiante!: string;
  selectedAtencion!: string;
  detalleAtencion: string = '';  // Aquí se guarda el detalle de la atención

  // Datos dinámicos basados en las selecciones
  semestres: any[] = [];
  paralelos: any[] = [];
  estudiantes: string[] = [];
  atenciones: string[] = ['Revisión de Tesis', 'Asesoría', 'Consulta General'];

  // Método para actualizar semestres cuando se elige una carrera
  onCarreraChange() {
    const carrera = this.carreras.find(c => c.name === this.selectedCarrera);
    this.semestres = carrera ? carrera.semestres : [];
    this.selectedSemestre = this.semestres.length > 0 ? this.semestres[0].name : '';
    this.paralelos = [];
    this.estudiantes = [];
  }

  // Método para actualizar paralelos cuando se elige un semestre
  onSemestreChange() {
    const semestre = this.semestres.find(s => s.name === this.selectedSemestre);
    this.paralelos = semestre ? semestre.paralelos : [];
    this.selectedParalelo = this.paralelos.length > 0 ? this.paralelos[0].name : '';
    this.estudiantes = [];
  }

  // Método para actualizar estudiantes cuando se elige un paralelo
  onParaleloChange() {
    const paralelo = this.paralelos.find(p => p.name === this.selectedParalelo);
    this.estudiantes = paralelo ? paralelo.students : [];
    this.selectedEstudiante = this.estudiantes.length > 0 ? this.estudiantes[0] : '';
  }

  // Método para registrar la atención
  registrarAtencion() {
    const atencionData = {
      carrera: this.selectedCarrera,
      semestre: this.selectedSemestre,
      paralelo: this.selectedParalelo,
      estudiante: this.selectedEstudiante,
      tipoAtencion: this.selectedAtencion,
      detalleAtencion: this.detalleAtencion, // Incluye el detalle si corresponde
    };
    console.log('Registro de atención:', atencionData);
    // Aquí puedes agregar el código para registrar la atención en una base de datos o en el sistema
  }



}
