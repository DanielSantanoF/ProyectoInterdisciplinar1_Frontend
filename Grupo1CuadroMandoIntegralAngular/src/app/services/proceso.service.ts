import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProcesoResponse } from '../models/proceso-response.interface';
import { CursoAcademicoDto } from '../models/CursoAcademicoDto';
import { ProcesoDto } from '../models/ProcesoDto';
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
export class ProcesoService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }


  getProcesos(id:string): Observable<ProcesoResponse[]>{
    return this.http.get<ProcesoResponse[]>(
      url+`/procesos/${id}`,
      this.authService.getHttpOptionsWithToken()

    )
  }

  borrarProcesos(id:string): Observable<ProcesoResponse[]>{
    return this.http.delete<ProcesoResponse[]>(
      url + `/procesos/delete/${id}`,
      this.authService.getHttpOptionsWithToken()
    )
  }

  anyadirProceso(cursoAcademico: CursoAcademicoDto, nombre: string, tipo: string){
    const dto = new ProcesoDto(3000, nombre, tipo, cursoAcademico);
    console.log("nombre: " + dto.nombre);
    console.log("tipo: " + dto.tipo);
    return this.http.post<ProcesoDto>(
      url + `/procesos/new`,
      dto,
      this.authService.getHttpOptionsWithToken()
    );
  }



}
