
import { ProcesoResponse } from './proceso-response.interface';

export interface IndicadorResponse {
    id: number;
    proceso: ProcesoResponse;
    nombreIndicador: string;
    esPorcentaje: boolean;
}