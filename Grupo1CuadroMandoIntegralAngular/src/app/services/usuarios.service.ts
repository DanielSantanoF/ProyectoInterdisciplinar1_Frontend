import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AllUsersResponse } from '../models/allUsersResponse.interface';

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
export class UsuariosService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllUsers(): Observable<AllUsersResponse[]>{
    return this.http.get<AllUsersResponse[]>(
      url + `/admin/allUsers`,
      this.authService.getHttpOptionsWithToken()
    )
  }

}
