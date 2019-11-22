import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnidadResponse } from '../models/unidad-response.interface';
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
export class UnidadService {
  constructor(private http: HttpClient,
    private authService: AuthService) { }

  

  getUnidadPorCurso(id:string): Observable<UnidadResponse[]>{
    return this.http.get<UnidadResponse[]>(
      url + `/unidad/${id}`,
      this.authService.getHttpOptionsWithToken()
    )
  }

  getAllUnidad(): Observable<UnidadResponse[]>{
    return this.http.get<UnidadResponse[]>(
      url + `/unidad/`,
      this.authService.getHttpOptionsWithToken()
    )
  }

  deleteUnidad(id:string): Observable<UnidadResponse[]>{
    return this.http.delete<UnidadResponse[]>(
      url + `/unidad/delete/${id}`,
      this.authService.getHttpOptionsWithToken()
      )
  }
}