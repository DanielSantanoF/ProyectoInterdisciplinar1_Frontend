import { Component, OnInit } from '@angular/core';
import { PsmDto } from '../models/PsmDto';
import { PsmService } from '../services/psm.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-psm',
  templateUrl: './lista-psm.component.html',
  styleUrls: ['./lista-psm.component.css']
})
export class ListaPsmComponent implements OnInit {

  listadoPsm: PsmDto[];

  displayedColumns = ['colNombre','colEvaluacion','colCursoAcad','colOp'];
  constructor(
    private psmService: PsmService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.loadPsm();
    if(localStorage.getItem('UserRole') === null){
      this.router.navigate(['accessDenied']);
    };
  }

  loadPsm() {
    this.psmService.getPsm().subscribe(resp => {
       this.listadoPsm = resp;
    });
  }

  delPsm(id:string){
    console.log(id);
    this.psmService.deletePsm(id).subscribe(resp=>{
         console.log("success");
         this.loadPsm();
    },error=>{
        alert(error.error.message);
    });
  }

  confirmar(nombrePsm: string,id:number) {
    if(confirm("¿Está seguro de que desea eliminar el PSM " + nombrePsm + " y todos sus datos? ")) {
      this.confirmarDoble(nombrePsm,id);
    }
  }
  confirmarDoble(nombrePsm: string,id:number) {
    if(confirm("SE ELIMINARÁN TODOS LOS DATOS DEL PSM: " + nombrePsm)) {
      this.delPsm(id.toString());
      alert("El PSM: " + nombrePsm + " y todos sus datos se eliminaron correctamente.");
    }
  }

  buscarPsmByCurAcYEv(){
    this.router.navigate(['psmByCaIdAndEv']);
  }

}
