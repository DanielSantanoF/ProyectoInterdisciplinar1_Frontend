import { Component, OnInit } from '@angular/core';
import { ProcesoResponse } from '../models/proceso-response.interface';
import { ProcesoService } from '../services/proceso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoAcademicoDto } from '../models/CursoAcademicoDto';
import { MatDialog } from '@angular/material/dialog';
import { ModalAnyadirProcesoComponent } from '../modal-anyadir-proceso/modal-anyadir-proceso.component';;
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-procesos',
  templateUrl: './lista-procesos.component.html',
  styleUrls: ['./lista-procesos.component.css']
})
export class ListaProcesosComponent implements OnInit {
  id:string;
  nombre : string;
  tipo: string;
  listaProcesos:ProcesoResponse[];
  displayedColumns = ['colNombre', 'colTipo','colCur','colOp'];
  user = "USER";
  admin = "ADMIN";
  rol = localStorage.getItem('UserRole');
  
  constructor(private service: ProcesoService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.loadProcesos(this.id);
  });
  if(localStorage.getItem('UserRole') === null){
    this.router.navigate(['accessDenied']);
  };
}

  loadProcesos(id:string){
    this.service.getProcesos(id).subscribe(resp=>{
      this.listaProcesos = resp;
    }, error => {
      console.log('error');
    });
  }

  borrarProceso(id:string){
    this.service.borrarProcesos(id).subscribe(resp=>{
      this.loadProcesos(this.id);
    })
  }
  confirmar(nombreProceso: string, id:number) {
    if(confirm("¿Está seguro de que desea eliminar el Proceso " + nombreProceso + "?")) {
      this.borrarProceso(id.toString());
    }
  }
  nuevoProcesoDialog(cursoAcademico:CursoAcademicoDto){
    const dialogRef = this.dialog.open(ModalAnyadirProcesoComponent, {
      data: {texto: 'Crear nuevo Proceso', cursoA: cursoAcademico}
    });
    dialogRef.afterClosed().subscribe(resp => {
      this.loadProcesos(this.id);
    });
  }

  doVerIndicadores(id:number){
    this.router.navigate([`proceso/${id}`]);
  }

}
