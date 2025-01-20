import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgregarDocente, Docente, } from 'src/app/models/docente';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private httpclient :HttpClient) { }

  docenteurl = environment.docentesUrl


  public lista(): Observable<Docente[]> {
    return this.httpclient.get<Docente[]>(this. docenteurl  + '/lista');
  }


  public nuevo(docente: AgregarDocente): Observable<any> {
    return this.httpclient.post<any>(this. docenteurl  + '/nuevo',docente);
  }

 

}
