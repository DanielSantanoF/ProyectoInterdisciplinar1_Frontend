import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('UserRole') != null){
      this.router.navigate(['cursosacademicos']);
    };
  }

  doLogin(){
    this.authService.login(this.username, this.password)
  }
  
}
