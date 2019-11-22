import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoService } from '../services/curso.service';
import { EtapaResponse } from '../models/etapa-response.interface';
import { EtapaService } from '../services/etapa.service';

export interface DatosEntradaDialog {
}
@Component({
  selector: 'app-model-nuevo-curso',
  templateUrl: './model-nuevo-curso.component.html',
  styleUrls: ['./model-nuevo-curso.component.css']
})
export class ModelNuevoCursoComponent implements OnInit {
  nombre: string = '';
  etapas : EtapaResponse[];
  titulo: string;
  nombreCurso:string='';
  nombreEtapa:string= '';
  
    constructor(public service: CursoService, public etapaService:EtapaService,
      public dialogRef: MatDialogRef<ModelNuevoCursoComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DatosEntradaDialog
    ) { }
  
    ngOnInit() {
     this.getEtapas();
    }
  
    cerrarDialog() {
      this.dialogRef.close();
    }
  
    validarFormulario() {
      if(this.nombreCurso == '') {
        return true;
      } else {
        return false;
      }
      
    }
    crearCurso(){
        this.service.anyadirCurso(this.nombreCurso,this.nombreEtapa).subscribe(resp=>{
          alert("Se ha creado el Curso correctamente");
      this.dialogRef.close();
        })

        
    }
    getEtapas(){
      this.etapaService.getEtapas().subscribe(resp=>{
        this.etapas = resp;
      })
    }
  }
  
