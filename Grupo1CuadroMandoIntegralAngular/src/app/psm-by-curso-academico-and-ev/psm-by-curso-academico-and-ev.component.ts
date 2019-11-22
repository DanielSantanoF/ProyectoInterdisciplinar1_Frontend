import { Component, OnInit } from '@angular/core';
import { CursoAcademicoResponse } from '../models/cursoAcademico-response.interface';
import { AuthService } from '../services/auth.service';
import { PsmService } from '../services/psm.service';
import { CursoAcademicoService } from '../services/curso-academico.service';
import { ListaPsmResponse } from '../models/lista-psm.interface';
import { PamByCursoAcademicoAndEvDto } from '../models/psmByCursoAcademicoIdAndEv.dto';
import { PsmByCursoAcademicoAndEvaluacionResponse } from '../models/psmByCursoAcademicoAndEvaluacionResponse.interface';
import { MatDialog } from '@angular/material/dialog';
import { VerPsmBuscadoDialogComponent } from '../ver-psm-buscado-dialog/ver-psm-buscado-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-psm-by-curso-academico-and-ev',
  templateUrl: './psm-by-curso-academico-and-ev.component.html',
  styleUrls: ['./psm-by-curso-academico-and-ev.component.css']
})
export class PsmByCursoAcademicoAndEvComponent implements OnInit {

  cursoAcademicoId: number;
  psmId: number;
  ev: string;
  listaCursosAcademicos: CursoAcademicoResponse[];
  listaPsm: ListaPsmResponse[];
  psmEncontrado: PsmByCursoAcademicoAndEvaluacionResponse;

  constructor(private psmService: PsmService, private cursoAcademicoService: CursoAcademicoService,
      public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.loadAllCursosAcademicos();
    this.loadAllPsm();
    if(localStorage.getItem('UserRole') === null){
      this.router.navigate(['accessDenied']);
    };
  }

  loadAllCursosAcademicos(){
    this.cursoAcademicoService.getCursosAcademicos().subscribe(resp =>{
      this.listaCursosAcademicos = resp
    });
  }

  loadAllPsm(){
    this.psmService.getPsm().subscribe(resp =>{
      this.listaPsm = resp
    });
  }

  doSearch(){
    const dto = new PamByCursoAcademicoAndEvDto(this.psmId, this.cursoAcademicoId, this.ev);
    this.psmService.getPsmByCursoAcademicoAndEvaluacionResponse(dto).subscribe(resp =>{
      this.psmEncontrado = resp;
      this.openPsm();
    });
  }

  openPsm(){
    const dialogRef = this.dialog.open(VerPsmBuscadoDialogComponent, {
      data: {psm: this.psmEncontrado}
    });
    dialogRef.afterClosed().subscribe(resp =>{
      this.router.navigate(['listaPsm']);
    });
  }

}
