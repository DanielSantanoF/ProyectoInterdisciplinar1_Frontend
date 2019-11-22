import { Component, OnInit } from '@angular/core';
import { EtapaResponse } from '../models/etapa-response.interface';
import { EtapaService } from '../services/etapa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-etapas',
  templateUrl: './lista-etapas.component.html',
  styleUrls: ['./lista-etapas.component.css']
})
export class ListaEtapasComponent implements OnInit {

  id: string;
  listaEtapa: EtapaResponse[];
  displayedColumns = ['colNombreEtapa','colOp'];

  constructor(private service: EtapaService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.service.getEtapasPorCurso(this.id).subscribe(resp => {
        this.listaEtapa = resp;
        console.log(this.listaEtapa);
      }, error => {
        console.log('error');
      });

    });
  }

  borrarEtapa(id:string){
    console.log(id);
    this.service.deleteEtapa(id).subscribe(resp=>{
     console.log("success");
     window.location.reload();
    });
   }

   confirmar(nombreCurso: string,id:number) {
    if(confirm("¿Está seguro de que desea eliminar el Curso " + nombreCurso + "?")) {
      this.borrarEtapa(id.toString());
    }
  }

}
