import { CursoAcademicoResponse } from './curso-academico-dto.response';

export interface ProcesoResponse {
    id: number;
    nombre: string;
    tipo:string;
    cursoAcademico: CursoAcademicoResponse;
}