import { Component, OnInit } from '@angular/core';
import { PuntosControl } from '../models/PuntosControlDto';
import { ColegioDto } from '../models/ColegioDto';
import { PuntosControlService } from '../services/puntos-control-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalAnyadirPuntocontrolComponent } from '../modal-anyadir-puntocontrol/modal-anyadir-puntocontrol.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-puntos-vacios',
  templateUrl: './listado-puntos-vacios.component.html',
  styleUrls: ['./listado-puntos-vacios.component.css']
})
export class ListadoPuntosVaciosComponent implements OnInit {
  listaPuntoControlVacios: PuntosControl[];
  displayedColumns = ['colFecha', 'colColegioNombre','colOp'];
  fecha: string;
  colegio: ColegioDto;
  constructor(private service: PuntosControlService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.loadVacios();
    if(localStorage.getItem('UserRole') === null){
      this.router.navigate(['accessDenied']);
    };
  }
  loadVacios(){
    this.service.mostrarVacios().subscribe(resp => {
      this.listaPuntoControlVacios = resp;
    }, error => {
      console.log('error');
    });

  }

  borrarPuntoControl(id:string){
     console.log(id);
     this.service.deletePuntoControl(id).subscribe(resp=>{
      console.log("success");
      window.location.reload();
     });
    }

    nuevoPuntoControlDialogVacios(colegio:ColegioDto){
      
      const dialogRef = this.dialog.open(ModalAnyadirPuntocontrolComponent, {
        data: {texto: 'Crear nuevo Punto de Control '}
      });
      dialogRef.afterClosed().subscribe(resp => {
       
      this.service.anyadirPuntoControl(colegio,resp).subscribe(resp => {
            alert("Se ha creado Punto de control correctamente");
            this.loadVacios();

          });
        
      });
    }
}
