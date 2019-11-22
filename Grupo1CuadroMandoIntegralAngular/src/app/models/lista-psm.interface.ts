import { ColegioDto } from './ColegioDto';
import { CursoAcademico } from './psmCursoAcademico.interface';

export interface ListaPsmResponse {
    id: number;
    nombrePsm: string;
    evaluacion: string;
    peso: number;
    colegioDto: ColegioDto;
    cursoAcademico: CursoAcademico;
}