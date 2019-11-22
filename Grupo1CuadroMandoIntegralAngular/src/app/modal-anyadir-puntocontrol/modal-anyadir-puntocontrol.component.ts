import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListaColegios } from '../models/listaColegiosResponse.interface';
import { ColegioService } from '../services/colegio.service';
export interface DatosEntradaDialog {
  texto: string;
}

@Component({
  selector: 'app-modal-anyadir-puntocontrol',
  templateUrl: './modal-anyadir-puntocontrol.component.html',
  styleUrls: ['./modal-anyadir-puntocontrol.component.css']
})
export class ModalAnyadirPuntocontrolComponent implements OnInit {
  fecha: string = '';
  titulo: string;
  colegios: ListaColegios[]
  
    constructor( private colegioService: ColegioService,
      public dialogRef: MatDialogRef<ModalAnyadirPuntocontrolComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DatosEntradaDialog
    ) { }
  
    ngOnInit() {
      this.titulo = this.data.texto;
      this.getColegios();
    }
  
    cerrarDialog() {
      this.dialogRef.close();
    }
    getColegios(){
      this.colegioService.getColegios().subscribe(resp=>{
        this.colegios = resp; 
      })
    }
  
    validarFormulario() {
      if(this.fecha == '') {
        return true;
      } else {
        return false;
      }
    }
}
