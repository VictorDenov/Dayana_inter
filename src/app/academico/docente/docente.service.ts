import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { AgregarDocente, Docente, } from 'src/app/models/docente';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private httpclient :HttpClient) { }

  docenteurl = environment.Servicios


  public lista(): Observable<Docente[]> {
    return this.httpclient.get<Docente[]>(this. docenteurl  + 'docentes/lista');
  }


  public nuevo(docente: AgregarDocente): Observable<any> {
    return this.httpclient.post<any>(this. docenteurl  + '/nuevo',docente);
  }

  listaDocente(): Observable<any> {
    return this.httpclient.get<any>(this.docenteurl+'/docentes/lista').pipe(
      catchError(error => {
        console.error(error);
        throw error;
      })
    );
  }


  getCarreras(): Observable<any> {
    return this.httpclient.get<any>(this.docenteurl+'/carreras').pipe(
      catchError(error => {
        console.error(error);
        throw error;
      })
    );
  }


    private handleError(error: any): Observable<any> {
      console.error('Error en la lista', error);
      throw error; // Puedes ajustar este manejo de error según tus necesidades
    }
 

}
