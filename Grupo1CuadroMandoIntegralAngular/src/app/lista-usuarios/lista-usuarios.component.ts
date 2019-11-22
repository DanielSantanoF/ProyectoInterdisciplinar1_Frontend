import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { AllUsersResponse } from '../models/allUsersResponse.interface';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  displayedColumns = ['colRole','colUsername','colEmail', 'colColegio'];
  listadoUsuarios: AllUsersResponse[];

  constructor(private router: Router, private userService: UsuariosService) { }

  ngOnInit() {
    this.loadGetAllUsers();
    //CON ESTO EL USUARIO TIENE ACCESO EL ROL QUE NO ESTE ES EL QUE TIENE ACCESO AL ELEMENTO EN ESTE CASO "USER"
    if(localStorage.getItem('UserRole') === null){
      this.router.navigate(['accessDenied']);
    } else if (localStorage.getItem('UserRole') === "USER"){
      this.router.navigate(['accessDenied']);
    } 
  }

  loadGetAllUsers(){
    this.userService.getAllUsers().subscribe(resp =>{
      this.listadoUsuarios = resp;
    });
  }

  anyadirUsuario(){
    this.router.navigate(['signup']);
  }

}
