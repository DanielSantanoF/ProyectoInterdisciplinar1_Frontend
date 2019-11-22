import { CursoAcademicoResponse } from './cursoAcademico-response.interface';

export class ProcesoDto {
    constructor(public id:number, public nombre:string,public tipo:string, public cursoAcademico: CursoAcademicoResponse){
    }
}