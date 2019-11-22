import { PsmColegio } from './colegioPsm.interface';
import { CursoAcademico } from './psmCursoAcademico.interface';
import { ValoresIndicadores } from './psmValoresIndicadores.interface';

export interface PsmByCursoAcademicoAndEvaluacionResponse {
    id: number;
    nombrePsm: string;
    evaluacion: string;
    peso: number;
    colegioDto: PsmColegio;
    cursoAcademico: CursoAcademico;
    listaValoresIndicadores: ValoresIndicadores[];
}