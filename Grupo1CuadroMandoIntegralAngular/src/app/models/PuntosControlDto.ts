import { ColegioDto } from './ColegioDto';
import { PsmDto } from './PsmDto';

export class PuntosControl {
   constructor( public id: number, public fecha: string, public psm: PsmDto[], public colegioDto: ColegioDto){

   }
}
