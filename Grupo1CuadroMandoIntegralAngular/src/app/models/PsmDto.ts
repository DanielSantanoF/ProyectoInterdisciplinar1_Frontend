import { ColegioDto } from './ColegioDto';
import { CursoAcademicoDto } from './CursoAcademicoDto';

export class PsmDto {
    constructor(public id: number, public nombrePsm: string, public evaluacion: string, 
        public peso: number, public colegioDto: ColegioDto, public cursoAcademico: CursoAcademicoDto) { }
}