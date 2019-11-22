import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ListaColegios } from '../models/listaColegiosResponse.interface';
import { SignUpDto } from '../models/signinDto.dto';
import { ColegioService } from '../services/colegio.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  listaColegios: ListaColegios[];
  username: string;
  password: string;
  password2: string;
  email: string;
  idColegio: number;
  rol = "USER";
  superAdmin = "SUPER_ADMIN";
  role = localStorage.getItem('UserRole');

  constructor(private authService: AuthService, 
    private router: Router,
    private colegioService: ColegioService) { }

  ngOnInit() {
    this.loadListaColegios();
    if(localStorage.getItem('UserRole') === null){
      this.router.navigate(['accessDenied']);
    } else if (localStorage.getItem('UserRole') === "USER"){
      this.router.navigate(['accessDenied']);
    };
  }

  doSignUp(){
    const dto = new SignUpDto(this.username, this.password, this.password2, this.email, this.idColegio, this.rol)
    this.authService.signUp(dto).subscribe(resp =>{
      if(resp.username != null){
        this.router.navigate(['/cursosacademicos']);
        //window.location.href='http://localhost:4200/usuarios'
      }
    });
  }

  loadListaColegios(){
    this.colegioService.getColegios().subscribe(resp => {
      this.listaColegios = resp;
    });
  }

}
