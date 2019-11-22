import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PsmByCursoAcademicoAndEvaluacionResponse } from '../models/psmByCursoAcademicoAndEvaluacionResponse.interface';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PamByCursoAcademicoAndEvDto } from '../models/psmByCursoAcademicoIdAndEv.dto';
import { ListaPsmResponse } from '../models/lista-psm.interface';

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
export class PsmService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getPsmByCursoAcademicoAndEvaluacionResponse(dto: PamByCursoAcademicoAndEvDto): Observable<PsmByCursoAcademicoAndEvaluacionResponse>{
    return this.http.post<PsmByCursoAcademicoAndEvaluacionResponse>(
      url + `/psm/obtenerPsm`,
      dto,
      this.authService.getHttpOptionsWithToken()
    );
  }

  getPsm(): Observable<ListaPsmResponse[]>{
    return this.http.get<ListaPsmResponse[]>(
      url + `/psm/`,
      this.authService.getHttpOptionsWithToken()
    )
  }

  deletePsm(id:string): Observable<ListaPsmResponse[]>{
    return this.http.delete<ListaPsmResponse[]>(
      url + `/psm/delete/${id}`,
      this.authService.getHttpOptionsWithToken()
      );
  }
}
