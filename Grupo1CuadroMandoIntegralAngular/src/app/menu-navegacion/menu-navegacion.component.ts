import { Component, OnInit } from '@angular/core';
import { UserDataResponse } from '../models/userDataResponse.interface';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-navegacion',
  templateUrl: './menu-navegacion.component.html',
  styleUrls: ['./menu-navegacion.component.css']
})
export class MenuNavegacionComponent implements OnInit {

  userRol : string;
  title = 'Grupo1CuadroMandoIntegralAngular';
  USER = "USER";
  ADMIN = "ADMIN";
  rol = localStorage.getItem('UserRole');
  constructor(private authService: AuthService,
    private router: Router){}

  ngOnInit() {
    this.getRol();
    if(localStorage.getItem('UserRole') === null){
      this.router.navigate(['accessDenied']);
    };
   }

   getRol(){
     this.userRol = this.authService.getToken('UserRole');
      console.log(this.userRol)
      }
    logOut(){
      this.authService.logout();
    }
}
