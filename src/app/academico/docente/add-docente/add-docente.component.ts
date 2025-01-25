import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { DocenteService } from '../docente.service';
import { AgregarDocente, Docente } from 'src/app/models/docente';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/authentication/services/token.service';
import { Carrera } from 'src/app/models/carrera.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

interface data {
  value: string ;
}


export interface docenteagregar {
  primernombre: string;
  segundonombre: string;
  primerapellido: string;
  segundoapellido: string;
  cedula: number;
  titulotercernivel: string;
  tituloterposgrado: string;
  carrera: { id: number; nombreCarrera: string };
  campus: string;
  periodoacademico: string;
  email: string;
  password: string;
  imagenes: Array<{ url: string; public_id: string }>;
}

@Component({
  selector: 'app-add-docente',
  templateUrl: './add-docente.component.html',
  styleUrls: ['./add-docente.component.scss']
})

export class AddDocenteComponent implements OnInit {

  selectedValue: string = '';
  docenteForm: FormGroup;
  selectedImage: any = null; // Imagen seleccionada
  deleteIcon: boolean = false;
  public routes = routes;
  imageUrl: string | ArrayBuffer | null = null;  // URL temporal de la imagen (si es necesario)

  selectedList1: data[] = [];  // Lista de carreras
  selectedList2: data[] = [
    { value: 'Riobamba' },
    { value: 'Eugenio Espejo' },
    { value: 'Andaguirre' },
  ];
  selectedList3: data[] = [
    { value: 'Noviembre 2024-febrero 2025' },
    { value: 'Usa' },
    { value: 'Uk' },
    { value: 'Italy' },
  ];
  selectedList4: data[] = [
    { value: 'Select State' },
    { value: 'Alaska' },
    { value: 'California' },
  ];

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public docenteservice: DocenteService
  ) {
    this.docenteForm = this.fb.group({
      Primernombre: ['', Validators.required],
      Segundonombre: ['', Validators.required],
      PrimerApellido: ['', Validators.required],
      SegundoApellido: ['', Validators.required],
      Cedula: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      TituloTercerNivel: ['', Validators.required],
      TituloPosgrado: ['', Validators.required],
      carrera: [this.selectedList1.length ? this.selectedList1[0].value : null, Validators.required], // Asigna el primer valor si está disponible
      Campus: [null, Validators.required],  // Asegúrate de que campus sea obligatorio
      PeriodoAcademico: [null, Validators.required],  // Asegúrate de que periodoacademico sea obligatorio
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      imagenes: [null]
    });    
  }

  ngOnInit(): void {
    this.loadCarreras();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      this.imageUrl = URL.createObjectURL(file);  // URL temporal para vista previa
      this.deleteIcon = true;
    } else {
      this.selectedImage = null;  // Si no se seleccionó archivo, limpiar
    }
  }
  

  onCreate() {
    if (this.docenteForm.invalid) {
      console.log('Formulario no válido:', this.docenteForm);  // Agrega un log para ver el estado del formulario
      return;
    }
    
    const formData = new FormData();
    const docenteData: docenteagregar = {
      ...this.docenteForm.value,
      imagenes: this.selectedImage ? [{ url: this.selectedImage.name, public_id: 'public-id' }] : []
    };
  
    formData.append('docente', JSON.stringify(docenteData));
  
    if (this.selectedImage) {
      formData.append('imagenes', this.selectedImage, this.selectedImage.name);
    }
  
    const apiUrl = environment.Servicios;
    this.http.post(apiUrl+'/docentes/create', formData).subscribe(
      (response) => {
        console.log('Docente creado correctamente:', response);
      },
      (error) => {
        console.error('Error al crear el docente:', error);
      }
    );
  }
  
  loadCarreras(): void {
    this.docenteservice.getCarreras().subscribe(
      (data) => {
        this.selectedList1 = data.map((carrera: Carrera) => ({
          value: carrera.nombreCarrera
        }));
        console.log('Carreras cargadas:', this.selectedList1);  // Verificar que la lista se carga
      },
      (error) => {
        console.error('Error al obtener las carreras', error);
      }
    );
  }
  
  deleteIconFunc() {
    this.deleteIcon = !this.deleteIcon;
    this.selectedImage = null;  // Limpia la imagen seleccionada
    this.imageUrl = null;  // Limpia la URL temporal de la imagen
  }
}
