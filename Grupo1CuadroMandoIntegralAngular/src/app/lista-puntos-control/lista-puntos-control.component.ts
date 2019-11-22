import { Component, OnInit } from '@angular/core';
import { PuntosControl } from '../models/PuntosControlDto';
import { PuntosControlService } from '../services/puntos-control-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalAnyadirPuntocontrolComponent } from '../modal-anyadir-puntocontrol/modal-anyadir-puntocontrol.component';
import { ColegioDto } from '../models/ColegioDto';
import { PsmDto } from '../models/PsmDto';
import { PsmDePuntoControlComponent } from '../psm-de-punto-control/psm-de-punto-control.component';


@Component({
  selector: 'app-lista-puntos-control',
  templateUrl: './lista-puntos-control.component.html',
  styleUrls: ['./lista-puntos-control.component.css']
})
export class ListaPuntosControlComponent implements OnInit {
  id: string;
  listaPuntoControl: PuntosControl[];
  listaPuntoControlVacios: PuntosControl[];
  displayedColumns = ['colFecha', 'colColegioNombre','colCur','colOp'];
  fecha: string;
  colegio: ColegioDto;

  constructor(private service: PuntosControlService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.loadPuntosControl(this.id);
    });
    if(localStorage.getItem('UserRole') === null){
      this.router.navigate(['accessDenied']);
    } else if (localStorage.getItem('UserRole') === "USER"){
      this.router.navigate(['accessDenied']);
    };
      }

    loadPuntosControl(id:string){
      this.service.getPuntosControl(id).subscribe(resp => {
        this.listaPuntoControl = resp;
        console.log(this.listaPuntoControl);
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

      nuevoPuntoControlDialog(colegio:ColegioDto){
        
        const dialogRef = this.dialog.open(ModalAnyadirPuntocontrolComponent, {
          data: {texto: 'Crear nuevo Punto de Control '}
        });
        dialogRef.afterClosed().subscribe(resp => {
         
        this.service.anyadirPuntoControl(colegio,resp).subscribe(resp => {
              alert("Se ha creado Punto de control correctamente");
              this.loadPuntosControl(this.id)
            });
        });
      }

      doVervacios(){
        this.router.navigate(['/puntosControl/puntos/vacios']);
      }

      doVerPsm(psmDePuntoControl: PsmDto[]){
        const dialogRef = this.dialog.open(PsmDePuntoControlComponent, {
          data: {psmData: psmDePuntoControl}
        });
        dialogRef.afterClosed().subscribe(resp =>{
        });
      }

  }

