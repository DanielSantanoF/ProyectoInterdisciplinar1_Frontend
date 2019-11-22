import { Component, OnInit, Inject } from '@angular/core';

import { ProcesoService } from '../services/proceso.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProcesoResponse } from '../models/proceso-response.interface';
import { CursoAcademico } from '../models/psmCursoAcademico.interface';
export interface DatosEntradaDialog {
  texto: string;
  cursoA: CursoAcademico; 
}

@Component({
  selector: 'app-modal-anyadir-proceso',
  templateUrl: './modal-anyadir-proceso.component.html',
  styleUrls: ['./modal-anyadir-proceso.component.css']
})
export class ModalAnyadirProcesoComponent implements OnInit {
  nombre: string = '';
  titulo: string;
  tipo = '';

  procesos: ProcesoResponse[];
  constructor(private service: ProcesoService,
    public dialogRef: MatDialogRef<ModalAnyadirProcesoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DatosEntradaDialog) { }

  ngOnInit() {
    this.titulo = this.data.texto;
  }

  cerrarDialog() {
    this.dialogRef.close();
  }

  validarFormulario() {
    if(this.nombre == '') {
      return true;
    } else {
      return false;
    }
  }

  crearProceso() {
    this.service.anyadirProceso(this.data.cursoA, this.nombre, this.tipo).subscribe(resp => {
      alert("Se ha creado Punto de control correctamente");
      this.dialogRef.close();
    });
  }

}
