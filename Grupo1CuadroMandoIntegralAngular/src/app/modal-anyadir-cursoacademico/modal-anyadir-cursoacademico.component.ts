import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DatosEntradaDialog {
  texto: string;
}

@Component({
  selector: 'app-modal-anyadir-cursoacademico',
  templateUrl: './modal-anyadir-cursoacademico.component.html',
  styleUrls: ['./modal-anyadir-cursoacademico.component.css']
})
export class ModalAnyadirCursoacademicoComponent implements OnInit {
nombre: string = '';
titulo: string;

  constructor(
    public dialogRef: MatDialogRef<ModalAnyadirCursoacademicoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DatosEntradaDialog
  ) { }

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
}
