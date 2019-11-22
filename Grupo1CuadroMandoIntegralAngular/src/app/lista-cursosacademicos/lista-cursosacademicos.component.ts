import { Component, OnInit } from '@angular/core';
import { CursoAcademicoDto } from '../models/cursoAcademicoDto.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { CursoAcademicoService } from '../services/curso-academico.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalAnyadirCursoacademicoComponent } from '../modal-anyadir-cursoacademico/modal-anyadir-cursoacademico.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-cursosacademicos',
  templateUrl: './lista-cursosacademicos.component.html',
  styleUrls: ['./lista-cursosacademicos.component.css']
})
export class ListaCursosacademicosComponent implements OnInit {

  listadoCursosAcademicos: CursoAcademicoDto[];
  displayedColumns = ['colId','colNombre','colOp'];
  rol: string;
  USER = "USER";
  ADMIN = "ADMIN";
  
  constructor(
    private cursoAcademicoService: CursoAcademicoService,
    public dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit() {
    this.loadCursosAcademicos();
    if(localStorage.getItem('UserRole') === null){
      this.router.navigate(['accessDenied']);
    };
    this.rol = localStorage.getItem('UserRole');
  }

  loadCursosAcademicos() {
    this.cursoAcademicoService.getCursosAcademicos().subscribe(resp => {
       this.listadoCursosAcademicos = resp;
    });
  }

  delCursoAcademico(id:string){
    console.log(id);
    this.cursoAcademicoService.deleteCursoAcademico(id).subscribe(resp=>{
         console.log("success");
         this.loadCursosAcademicos();
    },error=>{
        alert(error.error.message);
    });
  }

  confirmar(nombreCursoAcademico: string,id:number) {
    if(confirm("¿Está seguro de que desea eliminar el Curso Académico " + nombreCursoAcademico + "?")) {
      this.delCursoAcademico(id.toString());
    }
  }

  nuevoCursoAcademicoDialog() {
    const dialogRef = this.dialog.open(ModalAnyadirCursoacademicoComponent, {
      data: {texto: 'Crear nuevo Curso Académico '}
    });

    dialogRef.afterClosed().subscribe(resp => {
      if(resp) {
        this.cursoAcademicoService.addCursoAcademico(resp).subscribe(resp => {
          alert("Se ha creado el curso acádemico correctamente");
          this.loadCursosAcademicos();
        });
      }
    });
  }
}
