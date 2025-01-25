import { Component, OnInit, ViewChild } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
  ApexGrid,
  ApexStroke,
  
} from 'ng-apexcharts';
import { Sort } from '@angular/material/sort';
import { DataService } from 'src/app/shared/data/data.service';
import { recentPatients, upcomingAppointments } from 'src/app/shared/models/models';
import { TokenService } from 'src/app/authentication/services/token.service';
export type ChartOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  series: ApexAxisChartSeries | any;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chart: ApexChart | any;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataLabels: ApexDataLabels | any;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plotOptions: ApexPlotOptions | any;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responsive: ApexResponsive[] | any;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  xaxis: ApexXAxis | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  legend: ApexLegend | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fill: ApexFill | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  grid: ApexGrid | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stroke: ApexStroke | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  labels: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
};
interface data {
  value: string ;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent{
  // Definir las rutas
  public routes = routes;


 

  // Datos de ejemplo para estudiantes
  public registeredStudents = [
    {
      no: 1,
      studentName: "Juan Pérez",
      career: "Ingeniería en Sistemas",
      registrationDate: "2023-08-15",
      status: "Activo",
      img: "path_to_image/juan.jpg"  // Reemplaza con la URL real de la imagen
    },
    {
      no: 2,
      studentName: "Ana García",
      career: "Arquitectura",
      registrationDate: "2023-06-10",
      status: "Inactivo",
      img: "path_to_image/ana.jpg"  // Reemplaza con la URL real de la imagen
    },
    {
      no: 3,
      studentName: "Carlos López",
      career: "Medicina",
      registrationDate: "2022-09-01",
      status: "Activo",
      img: "path_to_image/carlos.jpg"  // Reemplaza con la URL real de la imagen
    }
    // Agrega más estudiantes si es necesario
  ];


  public atendidos = [
    {
      no: 1,
      type: "Revisión de tesis",
      studentName: "Juan Pérez",
      teacherName: "Dr. Ana García",
      date: "2025-01-10",
      attended: true,
    },
    {
      no: 2,
      type: "Asesoría académica",
      studentName: "María López",
      teacherName: "Dr. Carlos Rodríguez",
      date: "2025-01-15",
      attended: false,
    },
    {
      no: 3,
      type: "Revisión de tesis",
      studentName: "Luis Martínez",
      teacherName: "Dr. Julia Fernández",
      date: "2025-01-20",
      attended: true,
    }
  ];


 

  constructor() { }

  // Método para manejar el ordenamiento de datos (si es necesario)
  sortData(event: any): void {
    // Implementa la lógica de ordenamiento si es necesario
    console.log('Ordenando datos...', event);
  }

  ngOnInit(): void {
   
   }
 
 

}