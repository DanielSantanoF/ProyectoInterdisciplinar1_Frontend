import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PsmByCursoAcademicoAndEvaluacionResponse } from '../models/psmByCursoAcademicoAndEvaluacionResponse.interface';
import { CursoAcademico } from '../models/psmCursoAcademico.interface';
import { ValoresIndicadores } from '../models/psmValoresIndicadores.interface';

export interface DatosEntradaDialogData {
  psmData: PsmByCursoAcademicoAndEvaluacionResponse;
}

@Component({
  selector: 'app-ver-psm-buscado-dialog',
  templateUrl: './ver-psm-buscado-dialog.component.html',
  styleUrls: ['./ver-psm-buscado-dialog.component.css']
})
export class VerPsmBuscadoDialogComponent implements OnInit {

  psmEncontrado: PsmByCursoAcademicoAndEvaluacionResponse;
  cursoAcademicoPsm: CursoAcademico;
  listaDeValoresIndicadores: ValoresIndicadores[];
  ev: string;
  displayedColumns = ['colValReal','colValConf'];

  id: number;
  nombrePsm: string;
  evaluacion: string;
  peso: number;
  cursoAcademico: CursoAcademico;
  listaValoresIndicadores: ValoresIndicadores[];
  
  constructor(public dialogRef: MatDialogRef<VerPsmBuscadoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DatosEntradaDialogData) { }

  ngOnInit() {
    this.psmEncontrado = this.data.psmData;
    this.cursoAcademicoPsm = this.data.psmData.cursoAcademico;
    this.listaDeValoresIndicadores = this.data.psmData.listaValoresIndicadores;
    this.ev = this.data.psmData.evaluacion;
  }

  cerrarDialog(){
    this.dialogRef.close();
  }

}
