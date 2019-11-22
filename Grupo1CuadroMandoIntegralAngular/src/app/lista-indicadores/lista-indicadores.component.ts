import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from '../services/indicadores.service';
import { IndicadorResponse } from '../models/indicador-response.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-indicadores',
  templateUrl: './lista-indicadores.component.html',
  styleUrls: ['./lista-indicadores.component.css']
})
export class ListaIndicadoresComponent implements OnInit {

  id: string;
  listaIndicador: IndicadorResponse[];
  displayedColumns = ['colNombreIndicador','colOp'];

  constructor(private service: IndicadoresService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.service.getIndicadoresPorCurso(this.id).subscribe(resp => {
        this.listaIndicador = resp;
        console.log(this.listaIndicador);
      }, error => {
        console.log('error');
      });
    });
    if(localStorage.getItem('UserRole') === null){
      this.router.navigate(['accessDenied']);
    } else if (localStorage.getItem('UserRole') === "USER"){
      this.router.navigate(['accessDenied']);
    } else if (localStorage.getItem('UserRole') === "ADMIN"){
      this.router.navigate(['accessDenied']);
    };
  }

  borrarIndicador(id:string){
    console.log(id);
    this.service.deleteIndicador(id).subscribe(resp=>{
     console.log("success");
     window.location.reload();
    });
   }

   confirmar(nombreIndicador: string,id:number) {
    if(confirm("¿Está seguro de que desea eliminar el Indicador " + nombreIndicador + "?")) {
      this.borrarIndicador(id.toString());
    }
  }

}
