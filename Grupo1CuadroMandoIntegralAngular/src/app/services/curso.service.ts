import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso-reponse.interface';
import { AuthService } from './auth.service';
import { CursoDto } from '../models/cursoDto';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

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
export class CursoService {

    constructor(private http: HttpClient,
      private authService: AuthService) { }

    getCursos(id:string): Observable<Curso[]>{

        return this.http.get<Curso[]>(
            url + `/cursos/${id}`,
            this.authService.getHttpOptionsWithToken()
        )

    }
    borrarCurso(id:string): Observable<Curso[]>{
        return this.http.delete<Curso[]>(
          url + `/cursos/delete/${id}`,
          this.authService.getHttpOptionsWithToken()
        )
      }

      anyadirCurso(nombreCurso:string,etapa:string){
        const dto = new CursoDto(3000,nombreCurso,etapa)
        return this.http.post<Curso>(
          url+ `/cursos/new`,
          dto,
          this.authService.getHttpOptionsWithToken()
        )
      }
    
}