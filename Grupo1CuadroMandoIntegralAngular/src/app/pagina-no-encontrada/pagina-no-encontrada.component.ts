import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-no-encontrada',
  templateUrl: './pagina-no-encontrada.component.html',
  styleUrls: ['./pagina-no-encontrada.component.css']
})
export class PaginaNoEncontradaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('UserRole') === null){
      this.router.navigate(['accessDenied']);
    };
  }

}
