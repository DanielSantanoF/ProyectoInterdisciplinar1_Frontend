import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PuntosControl } from '../models/PuntosControlDto';
import { CursoAcademicoDto } from '../models/CursoAcademicoDto';
import { ColegioDto } from '../models/ColegioDto';
import { PsmDto } from '../models/PsmDto';
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
export class PuntosControlService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  getPuntosControl(id:string): Observable<PuntosControl[]>{
    return this.http.get<PuntosControl[]>(
      url + `/puntosControl/${id}`,
      this.authService.getHttpOptionsWithToken()
    )
  }
  deletePuntoControl(id:string): Observable<PuntosControl[]>{
    return this.http.delete<PuntosControl[]>(
      url + `/puntosControl/delete/${id}`,
      this.authService.getHttpOptionsWithToken()
      )
  }

  anyadirPuntoControl(colegio:ColegioDto,fecha:string){
    const psm :PsmDto[] = [];
    const dto = new PuntosControl(2,fecha,psm,colegio)
   // Al no tener ningun componente todavía de colegio metemos como predeterminado el colegio con id 1
return this.http.post<PuntosControl>(
      url + `/puntosControl/new`,
    dto,
    this.authService.getHttpOptionsWithToken()
    )
}



mostrarVacios(): Observable<PuntosControl[]>{
  return this.http.get<PuntosControl[]>(
    url + `/puntosControl/puntos/vacios`,
    this.authService.getHttpOptionsWithToken()
  )
}
  }


