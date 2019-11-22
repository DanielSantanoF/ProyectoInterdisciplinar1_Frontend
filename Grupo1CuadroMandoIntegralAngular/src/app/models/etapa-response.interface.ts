import { ColegioResponse } from './colegio-response.interface';

export interface EtapaResponse {
    id: number;
    nombreSubEtapa: string;
    colegio: ColegioResponse;
}