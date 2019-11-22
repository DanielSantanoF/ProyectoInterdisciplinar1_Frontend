import { Component, OnInit, Inject } from '@angular/core';
import { PsmDto } from '../models/PsmDto';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PuntosControl } from '../models/PuntosControlDto';

export interface DatosEntradaDialogData {
  psmData: PsmDto[];
}
@Component({
  selector: 'app-psm-de-punto-control',
  templateUrl: './psm-de-punto-control.component.html',
  styleUrls: ['./psm-de-punto-control.component.css']
})
export class PsmDePuntoControlComponent implements OnInit {

  listaPsm: PsmDto[];
  displayedColumns = ['colNombre','colEv'];

  constructor(public dialogRef: MatDialogRef<PsmDePuntoControlComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DatosEntradaDialogData) { }

  ngOnInit() {
    this.listaPsm = this.data.psmData;
  }

  cerrarDialog(){
    this.dialogRef.close();
  }

}
