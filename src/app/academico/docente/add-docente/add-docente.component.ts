import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { DocenteService } from '../docente.service';
import { AgregarDocente, Docente } from 'src/app/models/docente';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
interface data {
  value: string ;
}
@Component({
  selector: 'app-add-docente',
  templateUrl: './add-docente.component.html',
  styleUrls: ['./add-docente.component.scss']
})
export class AddDocenteComponent  implements OnInit {

      nombre = '';
      nombreDocente='';
      email='';
      password=' ';
    
 
  constructor(public docenteservice : DocenteService, private router: Router, private toastr: ToastrService,)
  {


  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

onCreate(): void {
    const docente = new AgregarDocente (this.nombre,this.nombreDocente,this.email,this.password);
    this.docenteservice.nuevo(docente).subscribe(
      data => {
        this.toastr.success('Docente Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/dashboard/admin-dashboard']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/dashboard/admin-dashboard']);
      }
    );
  }



  public routes = routes;
  public selectedValue !: string ;

  selectedList1: data[] = [
    {value: 'Select Department'},
    {value: 'Orthopedics'},
    {value: 'Radiology'},
    {value: 'Dentist'},
  ];
  selectedList2: data[] = [
    {value: 'Select City'},
    {value: 'Alaska'},
    {value: 'Los Angeles'},
  ];
  selectedList3: data[] = [
    {value: 'Select Country'},
    {value: 'Usa'},
    {value: 'Uk'},
    {value: 'Italy'},
  ];
  selectedList4: data[] = [
    {value: 'Select State'},
    {value: 'Alaska'},
    {value: 'California'},
  ];
}
