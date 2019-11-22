import { Component, OnInit } from '@angular/core';
import { UnidadResponse } from '../models/unidad-response.interface';
import { UnidadService } from '../services/unidad.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-unidad',
  templateUrl: './lista-unidad.component.html',
  styleUrls: ['./lista-unidad.component.css']
})
export class ListaUnidadComponent implements OnInit {
  id: string;
  listaUnidad: UnidadResponse[];
  displayedColumns = ['nombreUnidad','colOp'];
  etapa : number;

  constructor(private service: UnidadService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.loadUnidad(this.id);

    });
  }
  loadUnidad(id:string){
    this.service.getUnidadPorCurso(id).subscribe(resp => {
      this.listaUnidad = resp;
      console.log(this.listaUnidad);
    }, error => {
      console.log('error');
    });
  }

  borrarUnidad(id:string){
    console.log(id);
    this.service.deleteUnidad(id).subscribe(resp=>{
     console.log("success");
     window.location.reload();
    });
   }

   confirmar(nombreUnidad: string,id:number) {
    if(confirm("¿Está seguro de que desea eliminar la Unidad " + nombreUnidad + "?")) {
      this.borrarUnidad(id.toString());
    }
  }
}
