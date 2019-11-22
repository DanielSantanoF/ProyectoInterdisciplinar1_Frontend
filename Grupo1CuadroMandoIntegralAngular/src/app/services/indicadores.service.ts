import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IndicadorResponse } from '../models/indicador-response.interface';
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
export class IndicadoresService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }



  getIndicadoresPorCurso(id:string): Observable<IndicadorResponse[]>{
    return this.http.get<IndicadorResponse[]>(
      url + `/indicador/${id}`,
      this.authService.getHttpOptionsWithToken()
    )
  }

  deleteIndicador(id:string): Observable<IndicadorResponse[]>{
    return this.http.delete<IndicadorResponse[]>(
      url + `/indicador/delete/${id}`,
      this.authService.getHttpOptionsWithToken()
      )
  }
}
