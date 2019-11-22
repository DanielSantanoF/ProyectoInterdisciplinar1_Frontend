import { Unidad } from './unidad.interface';

export interface Curso {
    id: number;
    nombreEtapa: string;
    nombreCurso: string;
    peso: number;
    unidades: Unidad[];
}
