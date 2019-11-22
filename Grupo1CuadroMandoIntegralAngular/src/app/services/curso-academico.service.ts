import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaCursosAcademicosResponse } from '../models/listaCursosAcademicos-response.interface';
import { CursoAcademicoDto } from '../models/CursoAcademicoDto';
import { CursoAcademicoResponse } from '../models/curso-academico-dto.response';
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
export class CursoAcademicoService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  getCursosAcademicos(): Observable<ListaCursosAcademicosResponse[]>{
    return this.http.get<ListaCursosAcademicosResponse[]>(
      url + `/cursoacademico/`,
      this.authService.getHttpOptionsWithToken()
    )
  }

  deleteCursoAcademico(id:string): Observable<ListaCursosAcademicosResponse[]>{
    return this.http.delete<ListaCursosAcademicosResponse[]>(
      url + `/cursoacademico/delete/${id}`,
      this.authService.getHttpOptionsWithToken());
  }

  public addCursoAcademico(nombre:string) {
    const cursoacademicoDto = new CursoAcademicoDto(nombre,1);

    return this.http.post<CursoAcademicoResponse>(
        url + `/cursoacademico/`,
      cursoacademicoDto,
      this.authService.getHttpOptionsWithToken())
  }
  
}
  
