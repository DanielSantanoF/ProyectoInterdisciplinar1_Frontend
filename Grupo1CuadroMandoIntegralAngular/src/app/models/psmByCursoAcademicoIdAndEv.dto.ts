export class PamByCursoAcademicoAndEvDto {
    psmId: number;
    cursoAcademicoId: number;
    evaluacion: string;

    constructor(pId:number ,caId: number, ev: string){
        this.psmId = pId;
        this.cursoAcademicoId = caId;
        this.evaluacion = ev;
    }

}