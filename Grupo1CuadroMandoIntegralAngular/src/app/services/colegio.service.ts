import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { ListaColegios } from '../models/listaColegiosResponse.interface';

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
export class ColegioService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }

    getColegios(): Observable<ListaColegios[]>{
      return this.http.get<ListaColegios[]>(
        url + `/colegio/obtenerColegios`,
        this.authService.getHttpOptionsWithToken()
      )
    }
    
}
