import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EtapaResponse } from '../models/etapa-response.interface';
import { AuthService } from './auth.service';

//RUTA DEL API
const url = 'http://localhost:9000'
//EL COMO SE ENVIA EL CONTENIDO AL API
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EtapaService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  getEtapasPorCurso(id:string): Observable<EtapaResponse[]>{
    return this.http.get<EtapaResponse[]>(
      url + `/etapa/${id}`,
      this.authService.getHttpOptionsWithToken()
    )
  }
  getEtapas(): Observable<EtapaResponse[]>{
    return this.http.get<EtapaResponse[]>(
      url + `/etapa/`,
      this.authService.getHttpOptionsWithToken()
    )
  }


  deleteEtapa(id:string): Observable<EtapaResponse[]>{
    return this.http.delete<EtapaResponse[]>(
      url + `/etapa/delete/${id}`,
      this.authService.getHttpOptionsWithToken()
      )
  }
}
