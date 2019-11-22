import { Component, OnInit } from '@angular/core';
import { CursoService } from '../services/curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from '../models/curso-reponse.interface';
import { ModelNuevoCursoComponent } from '../model-nuevo-curso/model-nuevo-curso.component';


@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  id:string;
  nombreCurso:string;
  nombreEtapa:string;
  listaCursos: Curso[];
  displayedColumns = ['colNombre', 'colNombreEtapa','colOp'];
  constructor(private service: CursoService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.loadCursos(this.id);
    });
    if(localStorage.getItem('UserRole') === null){
      this.router.navigate(['accessDenied']);
    } else if (localStorage.getItem('UserRole') === "USER"){
      this.router.navigate(['accessDenied']);
    };
  }
  loadCursos(id:string){
    this.service.getCursos(id).subscribe(resp=>{
      this.listaCursos = resp;
    })
  }
  borrarCurso(id:string){
    this.service.borrarCurso(id).subscribe(resp=>{
      this.loadCursos(this.id);
    })
  }
  nuevoCursoDialog(){
    const dialogRef = this.dialog.open(ModelNuevoCursoComponent, {
      data: {texto: 'Crear nuevo Proceso',}
    });
    dialogRef.afterClosed().subscribe(resp => {
      this.loadCursos(this.id);
    });
  }
  confirmar(nombreCurso: string,id:number) {
    if(confirm("¿Está seguro de que desea eliminar el Proceso " + nombreCurso + "?")) {
      this.borrarCurso(id.toString());
    }
  }

}
